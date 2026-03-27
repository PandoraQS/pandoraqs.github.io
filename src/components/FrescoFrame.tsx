import type { ReactNode } from 'react';

interface FrescoFrameProps {
  width: string;
  height: string;
  topLabel: string;
  bottomLeftLabel: string;
  bottomRightLabel?: string;
  modeLabel: string;
  statusLabel?: string;
  children: ReactNode;
  cornerVariant?: 'all' | 'diagonal';
  showLeftRail?: boolean;
  topLabelOffsetClass?: string;
  bottomLabelOffsetClass?: string;
}

export default function FrescoFrame({
  width,
  height,
  topLabel,
  bottomLeftLabel,
  bottomRightLabel,
  modeLabel,
  statusLabel,
  children,
  cornerVariant = 'all',
  showLeftRail = false,
  topLabelOffsetClass = '-top-6',
  bottomLabelOffsetClass = '-bottom-7',
}: FrescoFrameProps) {
  return (
    <div className="relative shrink-0 flex justify-center lg:block">
      <div
        className="relative"
        style={{
          width,
          height,
        }}
      >
        {cornerVariant === 'all' ? (
          <>
            <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2" style={{ borderColor: 'var(--accent-bright)' }} />
            <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2" style={{ borderColor: 'var(--accent-bright)' }} />
            <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2" style={{ borderColor: 'var(--accent-bright)' }} />
            <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2" style={{ borderColor: 'var(--accent-bright)' }} />
          </>
        ) : (
          <>
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: 'var(--accent-bright)' }} />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: 'var(--accent-bright)' }} />
          </>
        )}

        <div className={`absolute ${topLabelOffsetClass} left-0`}>
          <p className="font-mono tracking-widest" style={{ color: 'var(--text-dim)', letterSpacing: '0.14em', fontSize: '9px', opacity: 0.9 }}>
            {topLabel}
          </p>
        </div>

        <div
          className={`absolute ${bottomLabelOffsetClass} left-0 right-0 flex items-center justify-between font-mono tracking-widest`}
          style={{ color: 'var(--text-dim)', letterSpacing: '0.14em', fontSize: '9px', opacity: 0.9 }}
        >
          <span>{bottomLeftLabel}</span>
          {bottomRightLabel ? <span style={{ letterSpacing: '0.18em' }}>{bottomRightLabel}</span> : <span />}
        </div>

        {showLeftRail ? (
          <div
            className="absolute top-0 bottom-0 -left-4"
            style={{ borderLeft: '1px solid var(--border)', opacity: 0.4 }}
          />
        ) : null}

        {children}

        <div
          className={`absolute bottom-0 left-0 right-0 flex items-center ${statusLabel ? 'justify-between' : 'justify-end'} px-2 py-1`}
          style={{ background: 'rgba(9,9,15,0.7)', borderTop: '1px solid var(--border-hi)' }}
        >
          {statusLabel ? (
            <span className="font-mono tracking-widest" style={{ color: 'var(--text-dim)', fontSize: '10px' }}>
              {statusLabel}
            </span>
          ) : null}
          <span className="font-mono tracking-widest shrink-0" style={{ color: 'var(--accent-bright)', fontSize: '10px', whiteSpace: 'nowrap' }}>
            {modeLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
