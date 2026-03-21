import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { hoverHandlers } from '../hooks/useHover';

interface Props {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  details?: string;
  description: string;
  index: string;
  variant?: 'default' | 'wide' | 'tall' | 'accent';
}

const AboutCard: React.FC<Props> = ({ icon: Icon, title, subtitle, details, description, index, variant = 'default' }) => {
  const isAccent = variant === 'accent';

  return (
    <div
      className="group relative h-full flex flex-col transition-all duration-300"
      style={{
        border: '1px solid',
        borderColor: isAccent ? 'var(--accent)' : 'var(--border)',
        background: isAccent ? 'var(--accent-dim)' : 'var(--surface)',
        padding: variant === 'tall' ? '2.5rem' : '1.75rem',
        zIndex: 1,
      }}
      {...hoverHandlers(
        {
          borderColor: 'var(--accent-bright)',
          background: isAccent ? '' : 'var(--surface-hi)',
          boxShadow: '0 0 24px rgba(124,58,237,0.12)',
        },
        {
          borderColor: isAccent ? 'var(--accent)' : 'var(--border)',
          background: isAccent ? '' : 'var(--surface)',
          boxShadow: 'none',
        },
      )}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(90deg, var(--accent-bright), transparent)' }}
      />

      <span
        className="absolute top-4 right-5 font-mono select-none pointer-events-none"
        style={{
          fontSize: variant === 'tall' ? '5rem' : '3.5rem',
          fontWeight: 700,
          lineHeight: 1,
          color: isAccent ? 'rgba(157,101,255,0.2)' : 'rgba(124,58,237,0.08)',
          letterSpacing: '-0.05em',
        }}
      >
        {index}
      </span>

      <div className="flex items-center gap-2 mb-4">
        <div
          className="p-2 border shrink-0"
          style={{ borderColor: 'var(--border-hi)', color: 'var(--accent-bright)', background: 'rgba(124,58,237,0.08)' }}
        >
          <Icon size={15} />
        </div>
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--accent-bright)' }}>
          [{title}]
        </span>
      </div>

      {subtitle && (
        <p className="font-mono text-sm mb-1" style={{ color: 'var(--text)', fontWeight: 500 }}>{subtitle}</p>
      )}
      {details && (
        <p className="font-mono text-xs mb-4" style={{ color: 'var(--text-muted)' }}>{details}</p>
      )}
      <p className="mt-auto" style={{ fontSize: '0.88rem', lineHeight: 1.8, color: 'var(--text-muted)', fontWeight: 400 }}>
        {description}
      </p>
    </div>
  );
};

export default AboutCard;
