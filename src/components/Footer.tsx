import { SITE } from '../constants/site';

export default function Footer() {
  return (
    <footer
      className="relative py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-center"
      style={{ borderTop: '1px solid var(--border)', zIndex: 1, maxWidth: '1100px', margin: '0 auto', padding: '1.5rem clamp(1rem, 4vw, 2rem)' }}
    >
      <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--text-dim)' }}>
        © 2026 SIMONE MICALIZZI
      </span>
      <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--text-dim)' }}>
        {SITE.coordsShort}
      </span>
    </footer>
  );
}
