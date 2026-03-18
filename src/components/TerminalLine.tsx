import AsciiImage from './AsciiImage';
import type { TerminalLine as TLine } from '../terminal/types';

const colorMap: Record<TLine['type'], string> = {
  output:  'text-green-300',
  error:   'text-red-400',
  success: 'text-emerald-400',
  info:    'text-blue-400',
  ascii:   'text-green-400',
  link:    'text-cyan-400 underline cursor-pointer hover:text-cyan-200',
  image:   '',
};

export default function TerminalLine({ line }: { line: TLine }) {
  const cls = colorMap[line.type];

  if (line.type === 'ascii') {
    return (
      <pre
        className="text-green-400 font-mono whitespace-pre overflow-hidden"
        style={{ fontSize: '7px', lineHeight: '1.15' }}
      >
        {line.content}
      </pre>
    );
  }

  if (line.type === 'image') {
    return (
      <div className="my-1">
        <AsciiImage
          src={line.content}
          width={90}
          className="text-green-500"
          style={{ fontSize: '5.5px', lineHeight: '1' }}
        />
      </div>
    );
  }

  if (line.type === 'link') {
    const match = line.content.match(/https?:\/\/[^\s]+|mailto:[^\s]+/);
    if (match) {
      return (
        <div className={`font-mono text-sm ${cls}`}>
          <a href={match[0]} target="_blank" rel="noreferrer" className="hover:underline">
            {line.content}
          </a>
        </div>
      );
    }
  }

  return (
    <div className={`font-mono text-sm leading-relaxed ${cls}`}>
      {line.content}
    </div>
  );
}