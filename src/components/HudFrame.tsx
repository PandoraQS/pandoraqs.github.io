import DeathRider from './DeathRider';
import { HUD } from '../constants/site';
import FrescoFrame from './FrescoFrame';

export default function HudFrame() {
  return (
    <div className="animate-fade-in delay-500 mt-10 lg:mt-0">
      <FrescoFrame
        width="min(340px, 90vw)"
        height="min(304px, 80.5vw)"
        topLabel={HUD.titleEn}
        bottomLeftLabel={HUD.title}
        bottomRightLabel={HUD.location}
        statusLabel={HUD.label}
        modeLabel={HUD.mode}
        cornerVariant="all"
        showLeftRail
      >
        <DeathRider className="w-full h-full" />
      </FrescoFrame>
    </div>
  );
}
