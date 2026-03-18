import { useState, useCallback, useRef } from 'react';
import type { TerminalLine } from './types';
import { PROMPT } from './ascii';
import { resolveCommand, commandKeys } from './commands';

const makeId = () => crypto.randomUUID();

const initialHistory: TerminalLine[] = [];

export function useTerminal(onGuiSwitch: () => void) {
  const [history, setHistory] = useState<TerminalLine[]>(initialHistory);
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
      const newIdx = Math.min(historyIdx + 1, cmdHistory.length - 1);
      setHistoryIdx(newIdx);
      setInput(cmdHistory[newIdx] ?? '');
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newIdx = Math.max(historyIdx - 1, -1);
      setHistoryIdx(newIdx);
      setInput(newIdx === -1 ? '' : cmdHistory[newIdx]);
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      const match = commandKeys.find(k => k.startsWith(input));
      if (match) setInput(match);
    }
  };

  return { history, input, setInput, handleKeyDown, inputRef, focusInput };
}