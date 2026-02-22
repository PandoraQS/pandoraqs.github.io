import { GraduationCap, Code2, Cpu, LineChart, Music, BrainCircuit } from 'lucide-react';
import Section from './components/Section';
import AboutCard from './components/AboutCard';
import ProjectCard from './components/ProjectCard';
import { Hero, CTA, Footer, Quotes } from './components/Organisms';
import type { Project } from './types';
import './App.css';
import { QuoteBox } from './components/ui/Atoms';
import MissionCard from './components/MissionCard';

const projects: Project[] = [
  {
    title: "Crypto Arbitrage Stealth Engine",
    desc: "A high-frequency Real-Time ETL pipeline monitoring arbitrage opportunities across exchanges using WebSockets, Redis, and Docker microservices.",
    tags: ["Python", "Asyncio", "Redis", "Docker", "WebSockets"],
    icon: <Cpu size={20} />,
    repo: "https://github.com/PandoraQS/Crypto-Arbitrage-Stealth",
    image: "/assets/projects/arbitrage.png"
  },
  {
    title: "Sentiment Alpha AI",
    desc: "AI pipeline for real-time crypto market narrative tracking. Correlates FinBERT sentiment analysis with live exchange spreads via Llama 3.",
    tags: ["NLP", "PyTorch", "Llama 3", "FinBERT", "Streamlit"],
    icon: <BrainCircuit size={20} />,
    repo: "https://github.com/PandoraQS/News-Sentiment-Alpha",
    image: "/assets/projects/sentiment.png"
  },
  {
    title: "Nightcore Desktop Player",
    desc: "High-performance cross-platform audio engine for real-time DSP. Transforms music using Web Audio API and Electron hardware acceleration.",
    tags: ["Electron", "TypeScript", "React", "Web Audio API"],
    icon: <Music size={20} />,
    repo: "https://github.com/PandoraQS/nightcore-desktop-player",
    image: "/assets/projects/nightcore.png"
  },
  {
    title: "Behavioral Analytics Platform",
    desc: "End-to-end data engineering project for processing complex clickstream patterns to identify user anomalies and risk insights.",
    tags: ["Data Engineering", "Pandas", "SQL", "Pydantic", "ETL"],
    icon: <LineChart size={20} />,
    repo: "https://github.com/PandoraQS/ecommerce-behavior-analytics",
    image: "/assets/projects/analytics.png"
  }
];

export default function App() {
  return (
    <div className="bg-[#d1d5db] min-h-screen font-sans text-slate-900 scroll-smooth pb-20">
      <Hero />

      <Section id="about" maxWidth="4xl" className="bg-white/30 rounded-[3rem] shadow-inner backdrop-blur-md border border-white/20">
        <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-tighter text-slate-800 italic">About Me</h2>
        
        <div className="grid md:grid-cols-2 md:grid-rows-2 gap-8 items-stretch">
          
          <div className="h-full">
            <AboutCard 
              icon={GraduationCap}
              title="Education"
              subtitle="MSc Computer Engineering"
              details="Aarhus University | 2024 - 2026"
              description="Focus on Software Engineering & ML. Designing high-performance systems and scalable architectures."
            />
          </div>

          <div className="h-full">
            <AboutCard 
              icon={Code2} 
              title="Software Engineering" 
              description="Expertise in Distributed Systems, Real-Time DSP, and Cross-platform development with Electron and React. High-performance requirements specialist." 
            />
          </div>

          <div className="h-full">
            <MissionCard 
              title="Mission"
              description="I bridge the gap between complex backend architectures and intelligent data processing, leveraging my engineering background to build efficient systems."
            />
          </div>

          <div className="h-full">
            <AboutCard 
              icon={BrainCircuit} 
              title="ML & Data" 
              description="Specialist in NLP (FinBERT), ETL Pipelines, and Redis. Transforming noise into actionable real-time market intelligence and insights." 
            />
          </div>

        </div>

        <QuoteBox text={Quotes.dijkstra.text} author={Quotes.dijkstra.author} />
      </Section>

      <Section id="projects" maxWidth="4xl">
        <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-tighter text-slate-800 italic">Featured Projects</h2>
        <div className="flex flex-col gap-12">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
        <CTA />
      </Section>

      <Footer />
    </div>
  );
}