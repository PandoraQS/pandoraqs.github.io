import { useState, useCallback, useRef } from 'react';
import type { TerminalLine } from './types';
import { PROMPT } from './ascii';
import { resolveCommand, commandKeys } from './commands';
import { SORT_ALGOS } from './sorting';

const makeId = () => crypto.randomUUID();

export function useTerminal(onGuiSwitch: () => void) {
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => inputRef.current?.focus();

  const runCommand = useCallback((rawInput: string) => {
    const trimmed = rawInput.trim();
    if (!trimmed) return;

    const promptLine: TerminalLine = {
      id: makeId(),
      type: 'output',
      content: `${PROMPT} ${trimmed}`,
    };

    if (trimmed === 'clear') {
      setHistory([]);
      setCmdHistory(prev => [trimmed, ...prev]);
      setHistoryIdx(-1);
      return;
    }

    if (trimmed === 'gui') {
      onGuiSwitch();
      return;
    }

    const result = resolveCommand(trimmed);
    setHistory(prev => [...prev, promptLine, ...result.lines]);
    setCmdHistory(prev => [trimmed, ...prev]);
    setHistoryIdx(-1);
  }, [onGuiSwitch]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      runCommand(input);
      setInput('');
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const idx = Math.min(historyIdx + 1, cmdHistory.length - 1);
      setHistoryIdx(idx);
      setInput(cmdHistory[idx] ?? '');
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const idx = Math.max(historyIdx - 1, -1);
      setHistoryIdx(idx);
      setInput(idx === -1 ? '' : cmdHistory[idx]);
    }
    if (e.key === 'Tab') {
      e.preventDefault();

      const normalized = input.trim();
      if (!normalized) return;

      const parts = normalized.split(/\s+/);
      const root = parts[0];

      if (parts.length === 1) {
        const match = commandKeys.find(k => k.startsWith(root));
        if (match) setInput(match);
        return;
      }

      if (root === 'sort') {
        const args = parts.slice(1);
        const maybeAlgo = args[0] ?? '';

        if (maybeAlgo && !SORT_ALGOS.includes(maybeAlgo as (typeof SORT_ALGOS)[number])) {
          const algoMatch = SORT_ALGOS.find(a => a.startsWith(maybeAlgo));
          if (algoMatch) {
            setInput(['sort', algoMatch, ...args.slice(1)].join(' '));
            return;
          }
        }

        const lastArg = args[args.length - 1] ?? '';
        const hasExpand = args.includes('expand');

        if (!hasExpand && lastArg && 'expand'.startsWith(lastArg)) {
          setInput(['sort', ...args.slice(0, -1), 'expand'].join(' '));
        }
      }
    }
  };

  return { history, input, setInput, handleKeyDown, inputRef, focusInput };
}
