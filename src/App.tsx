import { useState } from 'react';
import Hero from './components/Hero';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AboutCard from './components/AboutCard';
import MissionCard from './components/MissionCard';
import ProjectCard from './components/ProjectCard';
import GoalCard from './components/GoalCard';
import AfflictedFrame from './components/AfflictedFrame';
import Terminal from './components/Terminal';
import ModeToggle from './components/ModeToggle';
import { PROJECTS } from './constants/projects';
import { ABOUT_CARDS } from './constants/about';
import { QUOTES, SITE } from './constants/site';
import type { Project } from './types';
import './App.css';

function PageWidth({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
      {children}
    </div>
  );
}

function Section({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ zIndex: 1, padding: 'clamp(3rem, 8vw, 7rem) clamp(1rem, 4vw, 2rem)', position: 'relative' }}>
      <PageWidth>
        <div className="flex items-center gap-5 mb-16">
          <span className="font-mono text-sm tracking-widest uppercase" style={{ color: 'var(--accent-bright)' }}>
            {label}
          </span>
          <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
        </div>
        {children}
      </PageWidth>
    </section>
  );
}

function QuoteStrip({ text, author }: { text: string; author: string }) {
  return (
    <div
      className="relative mt-20 py-10 px-8 border-l-4"
      style={{ borderColor: 'var(--accent)', background: 'var(--accent-dim)' }}
    >
      <p style={{ fontFamily: "'Orbitron', var(--font-display)", fontSize: '1rem', fontWeight: 400, color: 'var(--text)', fontStyle: 'italic', lineHeight: 1.8, letterSpacing: '0.03em' }}>
        "{text}"
      </p>
      <p className="font-mono text-sm mt-3" style={{ color: 'var(--accent-bright)' }}>— {author}</p>
    </div>
  );
}

function FrescoStrip() {
  return (
    <section style={{ zIndex: 1, position: 'relative', padding: '0 clamp(1rem, 4vw, 2rem)', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
      <PageWidth>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">

          <AfflictedFrame />

          <div className="flex-1 flex flex-col gap-4 justify-center" style={{ paddingTop: '1rem' }}>
            <div
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: 'var(--text-dim)', letterSpacing: '0.15em' }}
            >
              // TRIONFO DELLA MORTE · FRAGMENT II
            </div>
            <GoalCard />
            <p className="font-mono text-xs" style={{ color: 'var(--text-dim)', lineHeight: 1.7 }}>
              The afflicted figures in the fresco implore Death — the engineer implores the system.<br />
              Both know the answer depends entirely on the architecture.
            </p>
          </div>

        </div>
      </PageWidth>
    </section>
  );
}

function AboutGrid() {
  return (
    <>
      <div className="flex flex-col gap-4 md:hidden">
        <AboutCard {...ABOUT_CARDS[0]} />
        <AboutCard {...ABOUT_CARDS[1]} />
        <MissionCard description={SITE.mission} />
        <AboutCard {...ABOUT_CARDS[2]} />
        <AboutCard {...ABOUT_CARDS[3]} />
      </div>
      <div className="hidden md:grid" style={{ gridTemplateColumns: 'repeat(12, 1fr)', gap: '16px' }}>
        <div style={{ gridColumn: '1 / 6', gridRow: '1 / 3' }}>
          <AboutCard {...ABOUT_CARDS[0]} />
        </div>
        <div style={{ gridColumn: '6 / 13', gridRow: '1 / 2' }}>
          <AboutCard {...ABOUT_CARDS[1]} />
        </div>
        <div style={{ gridColumn: '6 / 13', gridRow: '2 / 3' }}>
          <MissionCard description={SITE.mission} />
        </div>
        <div style={{ gridColumn: '1 / 7', gridRow: '3 / 4' }}>
          <AboutCard {...ABOUT_CARDS[2]} />
        </div>
        <div style={{ gridColumn: '7 / 13', gridRow: '3 / 4' }}>
          <AboutCard {...ABOUT_CARDS[3]} />
        </div>
      </div>
    </>
  );
}

function ProjectsGrid({ projects }: { projects: Project[] }) {
  const isOdd = projects.length % 2 !== 0;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {isOdd && (
        <div className="col-span-1 md:col-span-2">
          <ProjectCard project={projects[0]} index={1} featured />
        </div>
      )}
      {(isOdd ? projects.slice(1) : projects).map((p, i) => (
        <ProjectCard key={p.title} project={p} index={isOdd ? i + 2 : i + 1} />
      ))}
    </div>
  );
}

export default function App() {
  const [mode, setMode] = useState<'gui' | 'terminal'>('gui');

  return (
    <>
      <ModeToggle mode={mode} onToggle={() => setMode(m => m === 'gui' ? 'terminal' : 'gui')} />

      {mode === 'terminal' ? (
        <Terminal onGuiSwitch={() => setMode('gui')} />
      ) : (
        <div style={{ background: 'var(--bg)', minHeight: '100vh', position: 'relative' }}>
          <Hero onTerminalSwitch={() => setMode('terminal')} />

          <FrescoStrip />

          <Section id="about" label="01 // ABOUT">
            <AboutGrid />
            <QuoteStrip text={QUOTES.dijkstra.text} author={QUOTES.dijkstra.author} />
          </Section>

          <Section id="projects" label="02 // FEATURED PROJECTS">
            <ProjectsGrid projects={PROJECTS} />
            <CTA />
          </Section>

          <Footer />
        </div>
      )}
    </>
  );
}
