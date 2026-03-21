interface Props {
  description: string;
}

export default function MissionCard({ description }: Props) {
  return (
    <div
      className="relative border p-8"
      style={{ borderColor: 'var(--border-hi)', background: 'var(--accent-dim)', zIndex: 1 }}
    >
      <div className="absolute -top-px -left-px w-5 h-5 border-t-2 border-l-2" style={{ borderColor: 'var(--accent-bright)' }} />
      <div className="absolute -bottom-px -right-px w-5 h-5 border-b-2 border-r-2" style={{ borderColor: 'var(--accent-bright)' }} />
      <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--accent-bright)' }}>
        MISSION_STMT
      </p>
      <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, lineHeight: 1.7, color: 'var(--text)', fontStyle: 'italic' }}>
        "{description}"
      </p>
    </div>
  );
}
