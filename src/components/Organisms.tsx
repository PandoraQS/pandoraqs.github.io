import { Mail, ArrowDown, Terminal } from 'lucide-react';

const GithubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

interface HeroProps { onTerminalSwitch: () => void; }

export const Hero = ({ onTerminalSwitch }: HeroProps) => (
  <section className="relative min-h-screen flex flex-col justify-center overflow-hidden"
           style={{ zIndex: 1 }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', padding: '0 clamp(1rem, 4vw, 2rem)' }}>

      <div className="font-mono text-xs mb-8 animate-fade-in"
           style={{ color: 'var(--text-dim)', letterSpacing: '0.12em' }}>
        56.1629° N · 10.2039° E · AARHUS, DK
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20">
        <div className="flex-1 min-w-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-7 border animate-fade-up"
               style={{ borderColor: 'var(--border-hi)', background: 'var(--accent-dim)' }}>
            <span className="w-1.5 h-1.5 rounded-full"
                  style={{ background: 'var(--accent-bright)', animation: 'pulseDot 2s ease infinite' }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--accent-bright)' }}>
              Available · MSc 2026
            </span>
          </div>
          <div className="animate-fade-up delay-100">
            <h1 style={{
              fontFamily: "'Orbitron', var(--font-display)",
              fontSize: 'clamp(1.8rem, 7vw, 4.8rem)',
              fontWeight: 500, lineHeight: 1.05, letterSpacing: '0.06em', color: 'var(--text)',
            }}>SIMONE</h1>
            <h1 style={{
              fontFamily: "'Orbitron', var(--font-display)",
              fontSize: 'clamp(1.8rem, 7vw, 4.8rem)',
              fontWeight: 600, lineHeight: 1.05, letterSpacing: '0.06em',
              color: 'var(--accent-bright)', textShadow: '0 0 30px rgba(157,101,255,0.5)',
            }}>MICALIZZI</h1>
          </div>
          <div className="h-line mt-5 mb-5 animate-fade-in delay-200" style={{ maxWidth: '320px' }} />
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 animate-fade-up delay-300">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase mb-1" style={{ color: 'var(--accent-bright)' }}>ROLE</p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 3vw, 1.2rem)', fontWeight: 700, color: 'var(--text)' }}>
                Software Engineer
              </p>
              <p className="font-mono text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                Aarhus University · MSc CE
              </p>
            </div>
            <div style={{ maxWidth: '340px' }}>
              <p className="font-mono text-xs tracking-widest uppercase mb-1" style={{ color: 'var(--accent-bright)' }}>FOCUS</p>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                Distributed systems, ML pipelines, and high-performance architectures.
                Bridging backend engineering with intelligent data processing.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-7 animate-fade-up delay-400">
            {[
              { href: 'https://github.com/PandoraQS', label: 'GitHub', icon: <GithubIcon />, blank: true },
              { href: 'https://linkedin.com/in/simone-micalizzi', label: 'LinkedIn', icon: <LinkedinIcon />, blank: true },
              { href: 'mailto:simonemicalizzi@pm.me', label: 'Contact', icon: <Mail size={14} /> },
            ].map(({ href, label, icon, blank }) => (
              <a key={label} href={href} target={blank ? '_blank' : undefined} rel="noreferrer"
                 className="flex items-center gap-2 font-mono text-xs tracking-wider uppercase px-4 py-2.5 border transition-all duration-200"
                 style={{ borderColor: 'var(--border-hi)', color: 'var(--text-muted)', background: 'var(--surface)' }}
                 onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--accent-bright)'; el.style.color = 'var(--accent-bright)'; el.style.background = 'var(--accent-dim)'; }}
                 onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border-hi)'; el.style.color = 'var(--text-muted)'; el.style.background = 'var(--surface)'; }}>
                {icon} {label}
              </a>
            ))}
          </div>

          <div className="mt-8 animate-fade-up delay-500">
            <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--text-dim)' }}>
              // ALTERNATIVE_INTERFACE
            </p>
            <button onClick={onTerminalSwitch}
              className="group flex items-center gap-3 border-2 px-5 py-3 transition-all duration-200 font-mono text-sm tracking-widest uppercase"
              style={{ borderColor: 'var(--accent)', color: 'var(--accent-bright)', background: 'transparent' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--accent)'; el.style.color = '#fff'; el.style.boxShadow = '0 0 32px rgba(124,58,237,0.5)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.color = 'var(--accent-bright)'; el.style.boxShadow = 'none'; }}>
              <Terminal size={15} />
              Launch Terminal Mode
              <span style={{ animation: 'pulseDot 1.5s ease infinite' }}>_</span>
            </button>
            <p className="font-mono text-xs mt-1.5" style={{ color: 'var(--text-dim)' }}>
              Interactive CLI — type commands to explore
            </p>
          </div>
        </div>

        <div className="hidden lg:block shrink-0 animate-fade-in delay-500">
          <div className="relative" style={{ width: '240px', height: '300px' }}>
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2" style={{ borderColor: 'var(--accent-bright)' }} />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2" style={{ borderColor: 'var(--accent-bright)' }} />
            <img src="/assets/profile.jpg" alt="Simone Micalizzi"
                 className="w-full h-full object-cover object-top"
                 style={{ filter: 'grayscale(40%) contrast(1.1) brightness(0.85)' }} />
            <div className="absolute inset-0"
                 style={{ background: 'linear-gradient(160deg, rgba(124,58,237,0.15) 0%, rgba(9,9,15,0.35) 100%)' }} />
            <div className="absolute inset-0 pointer-events-none"
                 style={{ background: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.12) 2px,rgba(0,0,0,0.12) 4px)' }} />
            <div className="absolute bottom-0 left-0 right-0 px-3 py-2"
                 style={{ background: 'rgba(9,9,15,0.75)', borderTop: '1px solid var(--border-hi)' }}>
              <p className="font-mono text-[10px] tracking-widest" style={{ color: 'var(--accent-bright)' }}>
                SM_01 · AARHUS 2025
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <a href="#about"
       className="absolute bottom-8 left-4 md:left-8 flex items-center gap-2 font-mono text-xs tracking-widest uppercase animate-fade-in delay-700"
       style={{ color: 'var(--text-dim)', zIndex: 1 }}>
      <ArrowDown size={12} /> scroll
    </a>
    <div className="absolute bottom-8 right-4 md:right-8 font-mono text-xs hidden sm:block"
         style={{ color: 'var(--text-dim)', zIndex: 1, letterSpacing: '0.15em' }}>
      SEC — 00
    </div>
  </section>
);

export const Quotes = {
  dijkstra: { text: "Simplicity is a prerequisite for reliability.", author: "Edsger W. Dijkstra" },
};

export const CTA = () => (
  <div className="relative mt-16 md:mt-28 border"
       style={{ borderColor: 'var(--border-hi)', background: 'var(--surface-hi)', zIndex: 1 }}>
    <div className="absolute -top-px -left-px w-6 h-6 border-t-2 border-l-2" style={{ borderColor: 'var(--accent-bright)' }} />
    <div className="absolute -bottom-px -right-px w-6 h-6 border-b-2 border-r-2" style={{ borderColor: 'var(--accent-bright)' }} />
    <div className="px-6 md:px-10 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div>
        <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--accent-bright)' }}>NEXT_STEP</p>
        <p style={{ fontFamily: "'Orbitron', var(--font-display)", fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
                    fontWeight: 500, color: 'var(--text)', lineHeight: 1.3, letterSpacing: '0.03em' }}>
          Ready to build<br />something remarkable?
        </p>
      </div>
      <a href="mailto:simonemicalizzi@pm.me"
         className="flex items-center gap-2 font-mono text-sm tracking-widest uppercase px-5 py-3 border-2 transition-all duration-200 whitespace-nowrap"
         style={{ borderColor: 'var(--accent)', color: 'var(--accent-bright)', background: 'transparent' }}
         onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--accent)'; el.style.color = '#fff'; el.style.boxShadow = '0 0 24px rgba(124,58,237,0.4)'; }}
         onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.color = 'var(--accent-bright)'; el.style.boxShadow = 'none'; }}>
        <Mail size={14} /> Get in touch
      </a>
    </div>
  </div>
);

export const Footer = () => (
  <footer className="relative py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-center"
          style={{ borderTop: '1px solid var(--border)', zIndex: 1,
                   maxWidth: '1100px', margin: '0 auto', padding: '1.5rem clamp(1rem, 4vw, 2rem)' }}>
    <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--text-dim)' }}>© 2026 SIMONE MICALIZZI</span>
    <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--text-dim)' }}>56.1629° N · 10.2039° E</span>
  </footer>
);