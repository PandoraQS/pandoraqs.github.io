import { useEffect, useRef, useState } from 'react';

const CHARS = '@#S%?*+;:,. ';

interface Props {
  src: string;
  width?: number;
  aspectFix?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function AsciiImage({ src, width = 80, aspectFix = 0.55, className, style }: Props) {
  const [ascii, setAscii] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext('2d')!;
      const cols = width;
      const rows = Math.floor(cols * (img.height / img.width) * aspectFix);
      canvas.width = cols;
      canvas.height = rows;
      ctx.drawImage(img, 0, 0, cols, rows);
      const data = ctx.getImageData(0, 0, cols, rows).data;
      let result = '';
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = (y * cols + x) * 4;
          const brightness = (0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]) / 255;
          result += CHARS[Math.floor((1 - brightness) * (CHARS.length - 1))];
        }
        result += '\n';
      }
      setAscii(result);
    };
  }, [src, width, aspectFix]);

  return (
    <>
      <canvas ref={canvasRef} className="hidden" />
      <pre className={`font-mono leading-none whitespace-pre select-none ${className ?? ''}`} style={style}>
        {ascii || '...'}
      </pre>
    </>
  );
}
