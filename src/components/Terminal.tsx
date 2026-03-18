import { useEffect, useRef } from 'react';
import { useTerminal } from '../terminal/useTerminal';
import TerminalLine from './TerminalLine';
import AsciiImage from './AsciiImage';
import { BANNER, BOOT_LINES, PROMPT } from '../terminal/ascii';

interface Props {
  onGuiSwitch: () => void;
}

export default function Terminal({ onGuiSwitch }: Props) {
  const { history, input, setInput, handleKeyDown, inputRef, focusInput } = useTerminal(onGuiSwitch);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div
      className="min-h-screen bg-[#0d0f0f] flex flex-col"
      onClick={focusInput}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1c1c] border-b border-green-900/30 shrink-0">
        <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
        <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
        <span className="ml-4 text-green-600 text-xs font-mono tracking-widest">
          pandoraqs@portfolio ~ terminal
        </span>
      </div>

      <div className="shrink-0 flex flex-row gap-6 px-6 pt-6 pb-4 border-b border-green-900/20">
        <div className="shrink-0">
          <AsciiImage
            src="/assets/profile.jpg"
            width={42}
            aspectFix={0.55}
            className="text-green-500"
            style={{ fontSize: '7px', lineHeight: '1.1' }}
          />
        </div>

        <div className="flex flex-col justify-start overflow-hidden">
          <pre
            className="text-green-400 font-mono whitespace-pre overflow-hidden"
            style={{ fontSize: '6px', lineHeight: '1.15' }}
          >
            {BANNER}
          </pre>
          <div className="mt-2 space-y-0.5">
            {BOOT_LINES.map((l, i) => (
              <p
                key={i}
                className="font-mono"
                style={{
                  fontSize: '11px',
                  color: l.startsWith('>') ? '#4ade80' : '#86efac',
                  minHeight: l === '' ? '8px' : undefined,
                }}
              >
                {l}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-0.5">
        {history.map(line => (
          <TerminalLine key={line.id} line={line} />
        ))}

        <div className="flex items-center gap-2 mt-2">
          <span className="text-green-500 font-mono text-sm select-none">{PROMPT}</span>
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            spellCheck={false}
            autoComplete="off"
            className="flex-1 bg-transparent text-green-300 font-mono text-sm outline-none caret-green-400 border-none"
          />
        </div>

        <div ref={bottomRef} />
      </div>
    </div>
  );
}