import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Button } from './ui/Base';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20 relative max-w-4xl mx-auto">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-8 border-4 border-white shadow-2xl transition-transform hover:rotate-3 duration-500">
        <img src="/assets/profile.jpg" alt="Simone Micalizzi" className="w-full h-full object-cover" />
      </div>
      
      <h1 className="text-5xl md:text-6xl font-black mb-2 tracking-tighter text-slate-900 italic uppercase">Simone Micalizzi</h1>
      <p className="text-blue-800 font-bold mb-6 text-xl md:text-2xl tracking-widest uppercase">Software Engineer</p>
      
      <p className="max-w-xl text-gray-700 mb-10 text-lg leading-relaxed font-medium">
        Computer Engineering Graduate from <span className="font-bold border-b-2 border-blue-800">Aarhus University</span>.
        Specialized in Software Engineering with a focus on ML and High-Performance Systems.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <Button href="https://github.com/PandoraQS" target="_blank"><Github size={18} /> GitHub</Button>
        <Button href="https://linkedin.com/in/simone-micalizzi" target="_blank" variant="secondary"><Linkedin size={18} /> LinkedIn</Button>
        <Button href="mailto:simonemicalizzi@pm.me" variant="secondary"><Mail size={18} /> Contact</Button>
      </div>

      <a href="#about" className="text-blue-800 animate-bounce hover:text-blue-600 transition-colors">
        <ChevronDown size={40} />
      </a>
    </section>
  );
};

export default Hero;