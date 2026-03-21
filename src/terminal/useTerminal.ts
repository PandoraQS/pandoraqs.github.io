import { useState, useCallback, useRef } from 'react';
import type { TerminalLine } from './types';
import { PROMPT } from './ascii';
import { resolveCommand, commandKeys } from './commands';

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
      const match = commandKeys.find(k => k.startsWith(input));
      if (match) setInput(match);
    }
  };

  return { history, input, setInput, handleKeyDown, inputRef, focusInput };
}
