import { Mail } from 'lucide-react';
import { SITE } from '../constants/site';
import { hoverHandlers } from '../hooks/useHover';

const btnHover = hoverHandlers(
  { background: 'var(--accent)', color: '#fff', boxShadow: '0 0 24px rgba(124,58,237,0.4)' },
  { background: 'transparent',   color: 'var(--accent-bright)', boxShadow: 'none' },
);

export default function CTA() {
  return (
    <div
      className="relative mt-16 md:mt-28 border"
      style={{ borderColor: 'var(--border-hi)', background: 'var(--surface-hi)', zIndex: 1 }}
    >
      <div className="absolute -top-px -left-px w-6 h-6 border-t-2 border-l-2" style={{ borderColor: 'var(--accent-bright)' }} />
      <div className="absolute -bottom-px -right-px w-6 h-6 border-b-2 border-r-2" style={{ borderColor: 'var(--accent-bright)' }} />
      <div className="px-6 md:px-10 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--accent-bright)' }}>NEXT_STEP</p>
          <p style={{ fontFamily: "'Orbitron', var(--font-display)", fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', fontWeight: 500, color: 'var(--text)', lineHeight: 1.3, letterSpacing: '0.03em' }}>
            Ready to build<br />something remarkable?
          </p>
        </div>
        <a
          href={SITE.email}
          className="flex items-center gap-2 font-mono text-sm tracking-widest uppercase px-5 py-3 border-2 transition-all duration-200 whitespace-nowrap"
          style={{ borderColor: 'var(--accent)', color: 'var(--accent-bright)', background: 'transparent' }}
          {...btnHover}
        >
          <Mail size={14} /> Get in touch
        </a>
      </div>
    </div>
  );
}
