import { Target } from 'lucide-react';

export default function GoalCard() {
  return (
    <div
      className="relative border"
      style={{
        borderColor: 'var(--border-hi)',
        background: 'var(--surface)',
        padding: '1.5rem',
        zIndex: 1,
      }}
    >
      <div className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2" style={{ borderColor: 'var(--accent-bright)' }} />
      <div className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2" style={{ borderColor: 'var(--accent-bright)' }} />

      <div className="flex items-center gap-2 mb-3">
        <div
          className="p-1.5 border shrink-0"
          style={{ borderColor: 'var(--border-hi)', color: 'var(--accent-bright)', background: 'rgba(124,58,237,0.08)' }}
        >
          <Target size={13} />
        </div>
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--accent-bright)' }}>
          [GOAL]
        </span>
      </div>

      <p style={{ fontSize: '0.85rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
        Build systems at the intersection of high-performance engineering and intelligent data — where distributed infrastructure meets real-time ML inference at scale.
      </p>
    </div>
  );
}
