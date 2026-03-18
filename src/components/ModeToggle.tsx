interface Props { mode: 'gui' | 'terminal'; onToggle: () => void; }

export default function ModeToggle({ mode, onToggle }: Props) {
  return (
    <button onClick={onToggle}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 font-mono text-xs tracking-widest uppercase px-3 py-2 border transition-all duration-200"
      style={{
        borderColor: mode === 'terminal' ? 'var(--accent-bright)' : 'var(--border-hi)',
        color: mode === 'terminal' ? 'var(--accent-bright)' : 'var(--text-muted)',
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
        el.style.borderColor = mode === 'terminal' ? 'var(--accent-bright)' : 'var(--border-hi)';
        el.style.color = mode === 'terminal' ? 'var(--accent-bright)' : 'var(--text-muted)';
        el.style.boxShadow = 'none';
      }}>
      <span style={{ opacity: mode === 'gui' ? 1 : 0.35 }}>GUI</span>
      <span style={{ color: 'var(--text-dim)' }}>/</span>
      <span style={{ opacity: mode === 'terminal' ? 1 : 0.35 }}>TERM</span>
    </button>
  );
}