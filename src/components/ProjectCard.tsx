import { ExternalLink } from 'lucide-react';
import type { Project } from '../types';
import GithubIcon from './icons/GithubIcon';
import { hoverHandlers } from '../hooks/useHover';

interface Props {
  project: Project;
  index: number;
  featured?: boolean;
}

const scanlines = {
  background: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.1) 2px,rgba(0,0,0,0.1) 4px)',
};

const imageOverlay = (featured: boolean) => ({
  background: `linear-gradient(${featured ? '135' : '160'}deg, rgba(124,58,237,${featured ? '0.14' : '0.12'}) 0%, rgba(9,9,15,${featured ? '0.5' : '0.55'}) 100%)`,
});

const repoHover = hoverHandlers(
  { color: 'var(--accent-bright)' },
  { color: 'var(--text-muted)' },
);

const cardHover = hoverHandlers(
  { borderColor: 'var(--border-hi)', boxShadow: '0 0 30px rgba(124,58,237,0.12)' },
  { borderColor: 'var(--border)', boxShadow: 'none' },
);

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map(t => (
        <span
          key={t}
          className="font-mono tracking-wider uppercase"
          style={{ fontSize: '10px', padding: '2px 8px', border: '1px solid var(--border)', color: 'var(--text-muted)', background: 'var(--surface-hi)' }}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function RepoLink({ href, compact }: { href: string; compact?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase transition-colors duration-200"
      style={{ color: 'var(--text-muted)' }}
      {...repoHover}
    >
      <GithubIcon size={compact ? 14 : 14} />
      {compact ? 'Repo' : 'View Repo'}
      <ExternalLink size={compact ? 9 : 10} />
    </a>
  );
}

function ProjectLabel({ index, featured }: { index: number; featured?: boolean }) {
  return (
    <div
      className="absolute top-3 left-3 font-mono text-xs px-2 py-1"
      style={{ background: 'rgba(9,9,15,0.88)', color: 'var(--accent-bright)', border: '1px solid var(--border-hi)' }}
    >
      P_{String(index).padStart(2, '0')}{featured ? ' · FEATURED' : ''}
    </div>
  );
}

function ProjectMeta({ index }: { index: number }) {
  return (
    <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--text-dim)' }}>
      PROJECT · {String(index).padStart(2, '0')}
    </p>
  );
}

export default function ProjectCard({ project, index, featured = false }: Props) {
  return (
    <div
      className="group relative border transition-all duration-300 h-full"
      style={{ borderColor: 'var(--border)', background: 'var(--surface)', zIndex: 1 }}
      {...cardHover}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(90deg, var(--accent), transparent)' }}
      />

      {featured ? (
        <div className="flex flex-col lg:flex-row h-full">
          <div
            className="relative lg:w-80 xl:w-96 shrink-0 overflow-hidden"
            style={{ minHeight: '220px', borderBottom: '1px solid var(--border)' }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              style={{ minHeight: '220px', filter: 'grayscale(20%) contrast(1.05) brightness(0.8)' }}
            />
            <div className="absolute inset-0 pointer-events-none" style={imageOverlay(true)} />
            <div className="absolute inset-0 pointer-events-none" style={scanlines} />
            <ProjectLabel index={index} featured />
          </div>
          <div className="flex flex-col justify-between p-6 lg:p-8 flex-1">
            <div>
              <ProjectMeta index={index} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em', marginBottom: '0.8rem' }}>
                {project.title}
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>{project.desc}</p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-5" style={{ borderTop: '1px solid var(--border)' }}>
              <TagList tags={project.tags} />
              <RepoLink href={project.repo} />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-full">
          <div
            className="relative overflow-hidden shrink-0"
            style={{ height: 'clamp(140px, 20vw, 180px)', borderBottom: '1px solid var(--border)' }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              style={{ filter: 'grayscale(25%) contrast(1.05) brightness(0.75)' }}
            />
            <div className="absolute inset-0 pointer-events-none" style={imageOverlay(false)} />
            <div className="absolute inset-0 pointer-events-none" style={scanlines} />
            <ProjectLabel index={index} />
          </div>
          <div className="flex flex-col justify-between p-5 flex-1">
            <div>
              <ProjectMeta index={index} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.01em', marginBottom: '0.6rem' }}>
                {project.title}
              </h3>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: 'var(--text-muted)' }}>{project.desc}</p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 mt-5 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
              <TagList tags={project.tags} />
              <RepoLink href={project.repo} compact />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
