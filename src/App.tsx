import { useState } from 'react';
import Hero from './components/Hero';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AboutCard from './components/AboutCard';
import MissionCard from './components/MissionCard';
import ProjectCard from './components/ProjectCard';
import Terminal from './components/Terminal';
import ModeToggle from './components/ModeToggle';
import CRTBackground from './components/CRTBackground';
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
    <section id={id} style={{ zIndex: 1, padding: '7rem 2rem', position: 'relative' }}>
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

function AboutGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '16px' }}>
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
  );
}

function ProjectsGrid({ projects }: { projects: Project[] }) {
  const isOdd = projects.length % 2 !== 0;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
      {isOdd && (
        <div style={{ gridColumn: '1 / 3' }}>
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
          <CRTBackground />
          <Hero onTerminalSwitch={() => setMode('terminal')} />

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
