import { Mail, ChevronDown } from 'lucide-react';
import { Button, BrandIcon } from './ui/Atoms';

export const Hero = () => (
  <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 py-20 relative max-w-4xl mx-auto">
    <div className="w-32 h-32 rounded-full overflow-hidden mb-8 border-4 border-white shadow-2xl transition-transform hover:rotate-3 duration-500">
      <img src="/assets/profile.jpg" alt="Simone Micalizzi" className="w-full h-full object-cover" />
    </div>
    <h1 className="text-5xl md:text-7xl font-black mb-2 tracking-tighter text-slate-900 italic uppercase leading-none">Simone Micalizzi</h1>
    <p className="text-blue-800 font-bold mb-6 text-xl md:text-2xl tracking-widest uppercase">Software Engineer</p>
    <p className="max-w-xl text-gray-700 mb-10 text-lg leading-relaxed font-medium">
      Computer Engineering Graduate from <span className="font-bold border-b-2 border-blue-800">Aarhus University</span>.
      Specialized in Software Engineering with a focus on ML and High-Performance Systems.
    </p>
    <div className="flex flex-wrap justify-center gap-4 mb-16">
      <Button href="https://github.com/PandoraQS" target="_blank"><BrandIcon name="github" /> GitHub</Button>
      <Button href="https://linkedin.com/in/simone-micalizzi" target="_blank" variant="secondary"><BrandIcon name="linkedin" /> LinkedIn</Button>
      <Button href="mailto:simonemicalizzi@pm.me" variant="secondary"><Mail size={20} /> Contact</Button>
    </div>
    <a href="#about" className="text-blue-800 animate-bounce hover:text-blue-600 transition-colors"><ChevronDown size={40} /></a>
  </section>
);

export const Quotes = {
  dijkstra: {
    text: "Simplicity is a prerequisite for reliability.",
    author: "Edsger W. Dijkstra"
  },
  knuth: {
    text: "Software is a variable cost; programming is a fixed cost.",
    author: "Donald Knuth"
  }
};

export const CTA = () => (
  <div className="max-w-xl mx-auto text-center mt-32 bg-white/20 py-16 px-8 rounded-[3rem] border border-white/30 backdrop-blur-sm shadow-xl flex flex-col items-center">
    <p className="text-2xl text-gray-700 mb-8 font-black tracking-widest uppercase italic leading-tight">
      Ready to build<br/>the future?
    </p>
    <div className="flex justify-center w-full">
      <Button href="mailto:simonemicalizzi@pm.me">Let's Talk</Button>
    </div>
  </div>
);

export const Footer = () => (
  <footer className="py-16 text-center text-gray-500 text-[10px] font-bold uppercase tracking-[0.5em] border-t border-gray-300/50">
    © 2026 Simone Micalizzi • Aarhus University
  </footer>
);