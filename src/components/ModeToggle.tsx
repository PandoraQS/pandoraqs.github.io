interface Props {
  mode: 'gui' | 'terminal';
  onToggle: () => void;
}

export default function ModeToggle({ mode, onToggle }: Props) {
  const isTerminal = mode === 'terminal';

  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 font-mono text-xs tracking-widest uppercase px-3 py-2 border transition-all duration-200"
      style={{
        borderColor: isTerminal ? 'var(--accent-bright)' : 'var(--border-hi)',
        color: isTerminal ? 'var(--accent-bright)' : 'var(--text-muted)',
        background: 'var(--surface)',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'var(--accent-bright)';
        el.style.color = 'var(--accent-bright)';
        el.style.boxShadow = '0 0 12px rgba(124,58,237,0.3)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = isTerminal ? 'var(--accent-bright)' : 'var(--border-hi)';
        el.style.color = isTerminal ? 'var(--accent-bright)' : 'var(--text-muted)';
        el.style.boxShadow = 'none';
      }}
    >
      <span style={{ opacity: isTerminal ? 0.35 : 1 }}>GUI</span>
      <span style={{ color: 'var(--text-dim)' }}>/</span>
      <span style={{ opacity: isTerminal ? 1 : 0.35 }}>TERM</span>
    </button>
  );
}
