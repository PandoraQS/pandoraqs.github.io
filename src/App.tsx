import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Code2,
  ChevronDown,
  Cpu,
  LineChart,
  Music,
  BrainCircuit
} from 'lucide-react';

interface Project {
  title: string;
  desc: string;
  tags: string[];
  icon: React.ReactNode;
  repo: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Crypto Arbitrage Stealth Engine",
    desc: "A high-frequency Real-Time ETL pipeline monitoring arbitrage opportunities across exchanges using WebSockets, Redis, and Docker microservices.",
    tags: ["Python", "Asyncio", "Redis", "Docker", "WebSockets"],
    icon: <Cpu size={20} />,
    repo: "https://github.com/PandoraQS/Crypto-Arbitrage-Stealth",
    image: "assets/projects/arbitrage.png"
  },
  {
    title: "Sentiment Alpha AI",
    desc: "AI pipeline for real-time crypto market narrative tracking. Correlates FinBERT sentiment analysis with live exchange spreads via Llama 3.",
    tags: ["NLP", "PyTorch", "Llama 3", "FinBERT", "Streamlit"],
    icon: <BrainCircuit size={20} />,
    repo: "https://github.com/PandoraQS/News-Sentiment-Alpha",
    image: "assets/projects/sentiment.png"
  },
  {
    title: "Nightcore Desktop Player",
    desc: "High-performance cross-platform audio engine for real-time DSP. Transforms music using Web Audio API and Electron hardware acceleration.",
    tags: ["Electron", "TypeScript", "React", "Web Audio API"],
    icon: <Music size={20} />,
    repo: "https://github.com/PandoraQS/nightcore-desktop-player",
    image: "assets/projects/nightcore.png"
  },
  {
    title: "Behavioral Analytics Platform",
    desc: "End-to-end data engineering project for processing complex clickstream patterns to identify user anomalies and risk insights.",
    tags: ["Data Engineering", "Pandas", "SQL", "Pydantic", "ETL"],
    icon: <LineChart size={20} />,
    repo: "https://github.com/PandoraQS/ecommerce-behavior-analytics",
    image: "assets/projects/analytics.png"
  }
];

export default function App() {
  return (
    <div className="bg-[#d1d5db] min-h-screen font-sans text-slate-900 scroll-smooth">

      {/* HERO SECTION */}
      <section className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="w-28 h-28 rounded-full overflow-hidden mb-6 border-4 border-white shadow-2xl transition-transform hover:scale-105 duration-300">
          <img src="assets/profile.jpg" alt="Simone Micalizzi" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-5xl font-extrabold mb-2 tracking-tight">Simone Micalizzi</h1>
        <p className="text-blue-800 font-semibold mb-4 text-xl tracking-wide uppercase">Software Engineer</p>
        <p className="max-w-2xl text-gray-700 mb-8 text-lg leading-relaxed">
          Computer Engineering Graduate from <span className="font-bold">Aarhus University</span>.
          Specialized in Software Engineering with a strong focus on Machine Learning and High-Performance Systems.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://github.com/PandoraQS" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2.5 bg-[#1e293b] text-white rounded-lg hover:bg-slate-800 transition shadow-lg"><Github size={18} /> GitHub</a>
          <a href="https://www.linkedin.com/in/simone-micalizzi" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2.5 border border-slate-400 bg-white/70 rounded-lg hover:bg-white transition shadow-md"><Linkedin size={18} /> LinkedIn</a>
          <a href="mailto:simonemicalizzi@pm.me" className="flex items-center gap-2 px-6 py-2.5 border border-slate-400 bg-white/70 rounded-lg hover:bg-white transition shadow-md"><Mail size={18} /> Contact</a>
        </div>

        <a href="#about" className="mt-12 text-blue-800 animate-bounce hover:text-blue-600 transition-colors">
          <ChevronDown size={32} />
        </a>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="max-w-6xl mx-auto py-24 px-8 bg-white/30 rounded-4xl shadow-inner backdrop-blur-sm">
        <h2 className="text-4xl font-black text-center mb-20 uppercase tracking-tighter">About Me</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="p-3 bg-blue-800 rounded-2xl shadow-lg">
                <GraduationCap className="text-white" size={32} />
              </div>
              <div>
                <h3 className="font-extrabold text-2xl">Education</h3>
                <p className="text-blue-900 font-bold mt-1">MSc in Computer Engineering</p>
                <p className="text-gray-700 font-medium">Aarhus University, Denmark</p>
                <p className="text-sm text-gray-500 italic mt-1 underline decoration-blue-400">Specialization: Software Engineering & Machine Learning</p>
              </div>
            </div>
            <p className="text-lg text-gray-800 leading-relaxed font-medium">
              I am a results-driven engineer with a solid background in designing scalable architectures.
              My expertise lies at the intersection of <span className="text-blue-800">robust backend engineering</span> and
              <span className="text-blue-800"> intelligent data processing</span>, gained through rigorous academic training at Aarhus University.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <h3 className="font-extrabold text-2xl mb-2">Technical Core</h3>
            <div className="space-y-4">
              <div className="group bg-white/60 p-5 rounded-2xl border border-white shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-4">
                  <Code2 className="text-blue-800" size={24} />
                  <div>
                    <p className="font-black text-slate-900">Software Engineering</p>
                    <p className="text-sm text-gray-600 italic font-semibold">Distributed Systems, Real-Time DSP, Electron, React</p>
                  </div>
                </div>
              </div>
              <div className="group bg-white/60 p-5 rounded-2xl border border-white shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-4">
                  <BrainCircuit className="text-blue-800" size={24} />
                  <div>
                    <p className="font-black text-slate-900">Machine Learning & Data</p>
                    <p className="text-sm text-gray-600 italic font-semibold">FinBERT NLP, ETL Pipelines, Feature Engineering, Redis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="max-w-7xl mx-auto py-28 px-8">
        <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-tighter">Featured Projects</h2>
        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <div key={i} className="...">
              <div className="w-full md:w-48 h-48 bg-slate-300 rounded-2xl shrink-0 overflow-hidden shadow-md">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col grow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="p-2 bg-blue-100 text-blue-800 rounded-xl">{p.icon}</span>
                  <h4 className="font-black text-xl tracking-tight">{p.title}</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 font-medium italic underline decoration-gray-300 underline-offset-4">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {p.tags.map(t => (
                    <span key={t} className="text-[10px] px-3 py-1 bg-white text-blue-900 border border-blue-200 rounded-full font-black uppercase shadow-sm tracking-tighter">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={p.repo} target="_blank" className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#1e293b] text-white rounded-xl text-xs font-bold hover:bg-black transition-colors shadow-lg">
                    <Github size={14} /> VIEW REPOSITORY
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-24">
          <p className="text-sm text-gray-700 mb-6 font-bold tracking-widest uppercase">Looking for collaboration?</p>
          <button className="px-12 py-4 bg-[#1e293b] text-white rounded-2xl font-black text-sm tracking-widest hover:shadow-[0_0_30px_rgba(30,41,59,0.4)] transition-all uppercase">
            Start a Conversation
          </button>
        </div>
      </section>

      <footer className="py-16 text-center text-gray-500 text-xs font-bold uppercase tracking-[0.3em] border-t border-gray-300/50">
        © 2026 Simone Micalizzi • Computer Engineer @ Aarhus
      </footer>
    </div>
  );
}