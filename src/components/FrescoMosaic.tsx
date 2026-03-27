import DeathRider from './DeathRider';
import Afflicted from './Afflicted';
import GoalCard from './GoalCard';

function HudLabel({ top, bottom, left, right, children }: {
  top?: string; bottom?: string; left?: string; right?: string; children: string;
}) {
  return (
    <div
      className="absolute font-mono tracking-widest"
      style={{ top, bottom, left, right, color: 'var(--text-dim)', fontSize: '9px', letterSpacing: '0.18em', zIndex: 2 }}
    >
      {children}
    </div>
  );
}

function Corner({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const classes = {
    tl: 'absolute -top-2 -left-2 border-t-2 border-l-2',
    tr: 'absolute -top-2 -right-2 border-t-2 border-r-2',
    bl: 'absolute -bottom-2 -left-2 border-b-2 border-l-2',
    br: 'absolute -bottom-2 -right-2 border-b-2 border-r-2',
  }[pos];
  return <div className={`${classes} w-4 h-4`} style={{ borderColor: 'var(--accent-bright)' }} />;
}

function StatusBar({ left, right }: { left: string; right: string }) {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-2 py-1"
      style={{ background: 'rgba(9,9,15,0.75)', borderTop: '1px solid var(--border-hi)' }}
    >
      <span className="font-mono tracking-widest" style={{ color: 'var(--text-dim)', fontSize: '9px' }}>{left}</span>
      <span className="font-mono tracking-widest" style={{ color: 'var(--accent-bright)', fontSize: '9px' }}>{right}</span>
    </div>
  );
}

export default function FrescoMosaic() {
  return (
    <div className="shrink-0 animate-fade-in delay-500 w-full lg:w-auto">

      {/* Outer frame label */}
      <div className="font-mono text-[9px] tracking-widest mb-6 text-center lg:text-left" style={{ color: 'var(--text-dim)', letterSpacing: '0.2em' }}>
        TRIONFO DELLA MORTE · 1446 · PALERMO
      </div>

      {/* Mosaic grid: 2 columns */}
      <div
        className="grid gap-6"
        style={{ gridTemplateColumns: 'auto 1fr', gridTemplateRows: 'auto auto' }}
      >

        {/* Col 1 Row 1+2: Crowd — tall portrait spanning both rows */}
        <div
          className="relative"
          style={{ gridColumn: '1', gridRow: '1 / 3', width: 'min(140px, 35vw)', height: 'min(370px, 93vw)' }}
        >
          <Corner pos="tl" /><Corner pos="bl" />
          <HudLabel top="-20px" left="0">SUPPLICANTI</HudLabel>
          <HudLabel bottom="-18px" right="0">FOLLA</HudLabel>
          <div
            className="absolute top-0 bottom-0 -right-3"
            style={{ borderRight: '1px solid var(--border)', opacity: 0.3 }}
          />
          <Afflicted className="w-full h-full" />
          <StatusBar left="CROWD_FRAG" right="HALFTONE" />
        </div>

        {/* Col 2 Row 1: DeathRider */}
        <div
          className="relative"
          style={{ gridColumn: '2', gridRow: '1', width: 'min(260px, 65vw)', height: 'min(200px, 50vw)' }}
        >
          <Corner pos="tl" /><Corner pos="tr" /><Corner pos="br" />
          <HudLabel top="-20px" left="0">CAVALIERE · MORTE</HudLabel>
          <HudLabel bottom="-18px" right="0">SICILIA</HudLabel>
          <DeathRider className="w-full h-full" />
          <StatusBar left="DEATH_RIDER" right="HALFTONE" />
        </div>

        {/* Col 2 Row 2: Goal card */}
        <div
          className="relative flex flex-col"
          style={{ gridColumn: '2', gridRow: '2' }}
        >
          <GoalCard />
        </div>

      </div>

      {/* Bottom coord line */}
      <div className="font-mono text-[9px] mt-6 text-right" style={{ color: 'var(--text-dim)', letterSpacing: '0.15em' }}>
        38.1157° N · 13.3615° E
      </div>

    </div>
  );
}
