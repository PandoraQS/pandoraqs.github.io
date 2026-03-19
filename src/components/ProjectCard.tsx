import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../types';

const GithubIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

interface Props { project: Project; index: number; featured?: boolean; }

const ProjectCard: React.FC<Props> = ({ project, index, featured = false }) => (
  <div className="group relative border transition-all duration-300 h-full"
    style={{ borderColor: 'var(--border)', background: 'var(--surface)', zIndex: 1 }}
    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border-hi)'; el.style.boxShadow = '0 0 30px rgba(124,58,237,0.12)'; }}
    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border)'; el.style.boxShadow = 'none'; }}>

    <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{ background: 'linear-gradient(90deg, var(--accent), transparent)' }} />

    {featured ? (
      <div className="flex flex-col lg:flex-row h-full">
        <div className="relative lg:w-80 xl:w-96 shrink-0 overflow-hidden"
          style={{ minHeight: '220px', borderBottom: '1px solid var(--border)' }}
        >
          <img src={project.image} alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            style={{ minHeight: '220px', filter: 'grayscale(20%) contrast(1.05) brightness(0.8)' }} />
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.14) 0%, rgba(9,9,15,0.5) 100%)' }} />
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.1) 2px,rgba(0,0,0,0.1) 4px)' }} />
          <div className="absolute top-3 left-3 font-mono text-xs px-2 py-1"
            style={{ background: 'rgba(9,9,15,0.88)', color: 'var(--accent-bright)', border: '1px solid var(--border-hi)' }}>
            P_{String(index).padStart(2, '0')} · FEATURED
          </div>
        </div>
        <div className="flex flex-col justify-between p-6 lg:p-8 flex-1">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--text-dim)' }}>
              PROJECT · {String(index).padStart(2, '0')}
            </p>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
              fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em', marginBottom: '0.8rem'
            }}>
              {project.title}
            </h3>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
              {project.desc}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-5"
            style={{ borderTop: '1px solid var(--border)' }}>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map(t => (
                <span key={t} className="font-mono text-[10px] px-2 py-0.5 tracking-wider uppercase"
                  style={{ border: '1px solid var(--border)', color: 'var(--text-muted)', background: 'var(--surface-hi)' }}>
                  {t}
                </span>
              ))}
            </div>
            <a href={project.repo} target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase transition-colors duration-200"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--accent-bright)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')}>
              <GithubIcon /> View Repo <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>
    ) : (
      <div className="flex flex-col h-full">
        <div className="relative overflow-hidden shrink-0"
          style={{ height: 'clamp(140px, 20vw, 180px)', borderBottom: '1px solid var(--border)' }}>
          <img src={project.image} alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            style={{ filter: 'grayscale(25%) contrast(1.05) brightness(0.75)' }} />
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(160deg, rgba(124,58,237,0.12) 0%, rgba(9,9,15,0.55) 100%)' }} />
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.1) 2px,rgba(0,0,0,0.1) 4px)' }} />
          <div className="absolute top-3 left-3 font-mono text-xs px-2 py-1"
            style={{ background: 'rgba(9,9,15,0.88)', color: 'var(--accent-bright)', border: '1px solid var(--border-hi)' }}>
            P_{String(index).padStart(2, '0')}
          </div>
        </div>
        <div className="flex flex-col justify-between p-5 flex-1">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--text-dim)' }}>
              PROJECT · {String(index).padStart(2, '0')}
            </p>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
              fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.01em', marginBottom: '0.6rem'
            }}>
              {project.title}
            </h3>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: 'var(--text-muted)' }}>
              {project.desc}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 mt-5 pt-4"
            style={{ borderTop: '1px solid var(--border)' }}>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map(t => (
                <span key={t} className="font-mono text-[10px] px-2 py-0.5 tracking-wider uppercase"
                  style={{ border: '1px solid var(--border)', color: 'var(--text-muted)', background: 'var(--surface-hi)' }}>
                  {t}
                </span>
              ))}
            </div>
            <a href={project.repo} target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase transition-colors duration-200"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--accent-bright)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')}>
              <GithubIcon /> Repo <ExternalLink size={9} />
            </a>
          </div>
        </div>
      </div>
    )}
  </div>
);

export default ProjectCard;