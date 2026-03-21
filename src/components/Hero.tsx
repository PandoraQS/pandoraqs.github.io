import { Mail, ArrowDown, Terminal } from 'lucide-react';
import { SITE } from '../constants/site';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import HudFrame from './HudFrame';
import { hoverHandlers } from '../hooks/useHover';

interface Props {
  onTerminalSwitch: () => void;
}

const NAV_LINKS = [
  { href: SITE.github,   label: 'GitHub',  icon: <GithubIcon size={14} />,  blank: true },
  { href: SITE.linkedin, label: 'LinkedIn', icon: <LinkedinIcon size={14} />, blank: true },
  { href: SITE.email,    label: 'Contact',  icon: <Mail size={14} />,         blank: false },
];

const linkBase = hoverHandlers(
  { borderColor: 'var(--accent-bright)', color: 'var(--accent-bright)', background: 'var(--accent-dim)' },
  { borderColor: 'var(--border-hi)',     color: 'var(--text-muted)',    background: 'var(--surface)' },
);

const termHover = hoverHandlers(
  { background: 'var(--accent)', color: '#fff', boxShadow: '0 0 32px rgba(124,58,237,0.5)' },
  { background: 'transparent',   color: 'var(--accent-bright)', boxShadow: 'none' },
);

export default function Hero({ onTerminalSwitch }: Props) {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ zIndex: 1 }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', padding: '0 clamp(1rem, 4vw, 2rem)' }}>

        <div className="font-mono text-xs mb-8 animate-fade-in" style={{ color: 'var(--text-dim)', letterSpacing: '0.12em' }}>
          {SITE.coords}
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">

          <div className="flex-1 min-w-0">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-7 border animate-fade-up"
              style={{ borderColor: 'var(--border-hi)', background: 'var(--accent-dim)' }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: 'var(--accent-bright)', animation: 'pulseDot 2s ease infinite' }}
              />
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--accent-bright)' }}>
                {SITE.available}
              </span>
            </div>

            <div className="animate-fade-up delay-100">
              <h1 style={{ fontFamily: "'Orbitron', var(--font-display)", fontSize: 'clamp(1.8rem, 7vw, 4.8rem)', fontWeight: 500, lineHeight: 1.05, letterSpacing: '0.06em', color: 'var(--text)' }}>
                SIMONE
              </h1>
              <h1 style={{ fontFamily: "'Orbitron', var(--font-display)", fontSize: 'clamp(1.8rem, 7vw, 4.8rem)', fontWeight: 600, lineHeight: 1.05, letterSpacing: '0.06em', color: 'var(--accent-bright)', textShadow: '0 0 30px rgba(157,101,255,0.5)' }}>
                MICALIZZI
              </h1>
            </div>

            <div className="h-line mt-5 mb-5 animate-fade-in delay-200" style={{ maxWidth: '320px' }} />

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 animate-fade-up delay-300">
              <div>
                <p className="font-mono text-xs tracking-widest uppercase mb-1" style={{ color: 'var(--accent-bright)' }}>ROLE</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 3vw, 1.2rem)', fontWeight: 700, color: 'var(--text)' }}>
                  {SITE.role}
                </p>
                <p className="font-mono text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                  {SITE.university}
                </p>
              </div>
              <div style={{ maxWidth: '340px' }}>
                <p className="font-mono text-xs tracking-widest uppercase mb-1" style={{ color: 'var(--accent-bright)' }}>FOCUS</p>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                  {SITE.focus}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-7 animate-fade-up delay-400">
              {NAV_LINKS.map(({ href, label, icon, blank }) => (
                <a
                  key={label}
                  href={href}
                  target={blank ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-2 font-mono text-xs tracking-wider uppercase px-4 py-2.5 border transition-all duration-200"
                  style={{ borderColor: 'var(--border-hi)', color: 'var(--text-muted)', background: 'var(--surface)' }}
                  {...linkBase}
                >
                  {icon} {label}
                </a>
              ))}
            </div>

            <div className="mt-8 animate-fade-up delay-500">
              <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--text-dim)' }}>
                // ALTERNATIVE_INTERFACE
              </p>
              <button
                onClick={onTerminalSwitch}
                className="group flex items-center gap-3 border-2 px-5 py-3 transition-all duration-200 font-mono text-sm tracking-widest uppercase"
                style={{ borderColor: 'var(--accent)', color: 'var(--accent-bright)', background: 'transparent' }}
                {...termHover}
              >
                <Terminal size={15} />
                Launch Terminal Mode
                <span style={{ animation: 'pulseDot 1.5s ease infinite' }}>_</span>
              </button>
              <p className="font-mono text-xs mt-2" style={{ color: 'var(--text-dim)', letterSpacing: '0.1em' }}>
                Interactive CLI — type commands to explore
              </p>
            </div>
          </div>

          <HudFrame />

        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-4 md:left-8 flex items-center gap-2 font-mono text-xs tracking-widest uppercase animate-fade-in delay-700"
        style={{ color: 'var(--text-dim)', zIndex: 1 }}
      >
        <ArrowDown size={12} /> scroll
      </a>

      <div
        className="absolute bottom-8 right-4 md:right-8 font-mono text-xs hidden sm:block"
        style={{ color: 'var(--text-dim)', zIndex: 1, letterSpacing: '0.15em' }}
      >
        SEC — 00
      </div>
    </section>
  );
}
