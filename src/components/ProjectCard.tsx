import React from 'react';
import { Tag, ImageFrame, Button, BrandIcon } from './ui/Atoms';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group bg-white/50 rounded-3xl p-6 shadow-xl border border-white/40 flex flex-col md:flex-row gap-10 hover:bg-white/80 transition-all duration-300 transform hover:-translate-y-1 h-full items-center">
    <ImageFrame src={project.image} alt={project.title} />

    <div className="flex flex-col grow pt-2 w-full">
      <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
        <div className="p-2.5 bg-blue-100 text-blue-800 rounded-xl shadow-sm">{project.icon}</div>
        <h4 className="font-black text-2xl tracking-tight text-slate-800 uppercase italic leading-none">{project.title}</h4>
      </div>
      
      <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium italic underline decoration-gray-300 underline-offset-8 text-center md:text-left">
        {project.desc}
      </p>

      <div className="mt-auto flex flex-col items-center">
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {project.tags.map(t => <Tag key={t}>{t}</Tag>)}
        </div>
        
        <div className="flex justify-center w-full">
          <Button href={project.repo} target="_blank">
            <BrandIcon name="github" /> VIEW REPOSITORY
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;