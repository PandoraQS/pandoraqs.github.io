import DeathRider from './DeathRider';
import { HUD } from '../constants/site';

export default function HudFrame() {
  return (
    <div className="shrink-0 animate-fade-in delay-500 flex justify-center lg:block mt-10 lg:mt-0">
      <div
        className="relative"
        style={{
          width: 'min(340px, 90vw)',
          height: 'min(304px, 80.5vw)',
        }}
      >
        <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2" style={{ borderColor: 'var(--accent-bright)' }} />
        <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2" style={{ borderColor: 'var(--accent-bright)' }} />
        <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2" style={{ borderColor: 'var(--accent-bright)' }} />
        <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2" style={{ borderColor: 'var(--accent-bright)' }} />

        <div
          className="absolute -top-6 left-0 font-mono tracking-widest"
          style={{ color: 'var(--text-dim)', letterSpacing: '0.18em', fontSize: '10px' }}
        >
          {HUD.title}
        </div>
        <div
          className="absolute -bottom-6 right-0 font-mono tracking-widest"
          style={{ color: 'var(--text-dim)', letterSpacing: '0.18em', fontSize: '10px' }}
        >
          {HUD.location}
        </div>

        <div
          className="absolute top-0 bottom-0 -left-4"
          style={{ borderLeft: '1px solid var(--border)', opacity: 0.4 }}
        />

        <DeathRider className="w-full h-full" />

        <div
          className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-2 py-1"
          style={{ background: 'rgba(9,9,15,0.7)', borderTop: '1px solid var(--border-hi)' }}
        >
          <span className="font-mono tracking-widest" style={{ color: 'var(--text-dim)', fontSize: '10px' }}>
            {HUD.label}
          </span>
          <span className="font-mono tracking-widest" style={{ color: 'var(--accent-bright)', fontSize: '10px' }}>
            {HUD.mode}
          </span>
        </div>
      </div>
    </div>
  );
}
