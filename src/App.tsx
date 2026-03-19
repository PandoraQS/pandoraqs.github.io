import { GraduationCap, Code2, BrainCircuit, Cpu, LineChart } from 'lucide-react';
import { useState } from 'react';
import AboutCard from './components/AboutCard';
import ProjectCard from './components/ProjectCard';
import MissionCard from './components/MissionCard';
import { Hero, CTA, Footer, Quotes } from './components/Organisms';
import Terminal from './components/Terminal';
import ModeToggle from './components/ModeToggle';
import CRTBackground from './components/CRTBackground';
import type { Project } from './types';
import './App.css';

const projects: Project[] = [
  {
    title: "INTO-CPS Application",
    desc: "A cross-platform desktop app built with Electron and React that modernizes co-simulation execution via the Maestro Engine, featuring live graph rendering and automated CI/CD pipelines.",
    tags: ["React", "TypeScript", "Electron", "GitHub Actions", "Maestro Engine"],
    icon: <Cpu size={16} />,
    repo: "https://github.com/INTO-CPS-Association/into-cps-application/",
    image: "/assets/projects/intocps.png"
  },
  {
    title: "Crypto Arbitrage Stealth Engine",
    desc: "A high-frequency Real-Time ETL pipeline monitoring arbitrage opportunities across exchanges using WebSockets, Redis, and Docker microservices.",
    tags: ["Python", "Asyncio", "Redis", "Docker", "WebSockets"],
    icon: <Cpu size={16} />,
    repo: "https://github.com/PandoraQS/Crypto-Arbitrage-Stealth",
    image: "/assets/projects/arbitrage.png"
  },
  {
    title: "Sentiment Alpha AI",
    desc: "AI pipeline for real-time crypto market narrative tracking. Correlates FinBERT sentiment analysis with live exchange spreads via Llama 3.",
    tags: ["NLP", "PyTorch", "Llama 3", "FinBERT", "Streamlit"],
    icon: <BrainCircuit size={16} />,
    repo: "https://github.com/PandoraQS/News-Sentiment-Alpha",
    image: "/assets/projects/sentiment.png"
  },
  {
    title: "Behavioral Analytics Platform",
    desc: "End-to-end data engineering project for processing complex clickstream patterns to identify user anomalies and risk insights.",
    tags: ["Data Engineering", "Pandas", "SQL", "Pydantic", "ETL"],
    icon: <LineChart size={16} />,
    repo: "https://github.com/PandoraQS/ecommerce-behavior-analytics",
    image: "/assets/projects/analytics.png"
  },
  {
    title: "Aarhus Terrain Engine",
    desc: "A high-performance GIS web app built with React and OpenLayers that maps and analyzes Aarhus green infrastructure for flood risk and urban water management.",
    tags: ["React", "TypeScript", "OpenLayers", "Vite", "Overpass API"],
    icon: <LineChart size={16} />,
    repo: "https://github.com/PandoraQS/terrain-aarhus-demo/",
    image: "/assets/projects/terrain-engine.png"
  },
];

const PageWidth = ({ children }: { children: React.ReactNode }) => (
  <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
    {children}
  </div>
);

const Section = ({ id, children, label }: { id: string; children: React.ReactNode; label: string }) => (
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

const QuoteStrip = ({ text, author }: { text: string; author: string }) => (
  <div className="relative mt-20 py-10 px-8 border-l-4"
       style={{ borderColor: 'var(--accent)', background: 'var(--accent-dim)' }}>
    <p style={{ fontFamily: "'Orbitron', var(--font-display)", fontSize: '1rem', fontWeight: 400,
                color: 'var(--text)', fontStyle: 'italic', lineHeight: 1.8, letterSpacing: '0.03em' }}>
      "{text}"
    </p>
    <p className="font-mono text-sm mt-3" style={{ color: 'var(--accent-bright)' }}>— {author}</p>
  </div>
);

const AboutGrid = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '16px' }}>
    <div style={{ gridColumn: '1 / 6', gridRow: '1 / 3' }}>
      <AboutCard index="01" icon={GraduationCap} title="Education"
        subtitle="MSc Computer Engineering" details="Aarhus University · 2024 — 2026"
        description="Focus on Software Engineering & ML. Designing high-performance systems and scalable architectures."
        variant="tall" />
    </div>
    <div style={{ gridColumn: '6 / 13', gridRow: '1 / 2' }}>
      <AboutCard index="02" icon={Code2} title="Software Engineering"
        description="Expertise in Distributed Systems, Real-Time DSP, and Cross-platform development with Electron and React. High-performance specialist." />
    </div>
    <div style={{ gridColumn: '6 / 13', gridRow: '2 / 3' }}>
      <MissionCard title="Mission"
        description="I bridge the gap between complex backend architectures and intelligent data processing, leveraging my engineering background to build efficient, reliable systems." />
    </div>
    <div style={{ gridColumn: '1 / 7', gridRow: '3 / 4' }}>
      <AboutCard index="03" icon={BrainCircuit} title="ML & Data"
        description="Specialist in NLP (FinBERT), ETL Pipelines, and Redis. Transforming noise into actionable real-time market intelligence." />
    </div>
    <div style={{ gridColumn: '7 / 13', gridRow: '3 / 4' }}>
      <AboutCard index="04" icon={Cpu} title="Systems"
        description="High-performance requirements, real-time constraints, distributed architectures. Building systems that scale under pressure." />
    </div>
  </div>
);

const ProjectsGrid = ({ projects }: { projects: Project[] }) => {
  const isOdd = projects.length % 2 !== 0;

  if (isOdd) {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        <div style={{ gridColumn: '1 / 3' }}>
          <ProjectCard project={projects[0]} index={1} featured />
        </div>
        {projects.slice(1).map((p, i) => (
          <ProjectCard key={i + 1} project={p} index={i + 2} />
        ))}
      </div>
    );
  }
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
      {projects.map((p, i) => (
        <ProjectCard key={i} project={p} index={i + 1} />
      ))}
    </div>
  );
};

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
            <QuoteStrip text={Quotes.dijkstra.text} author={Quotes.dijkstra.author} />
          </Section>

          <Section id="projects" label="02 // FEATURED PROJECTS">
            <ProjectsGrid projects={projects} />
            <CTA />
          </Section>

          <Footer />
        </div>
      )}
    </>
  );
}