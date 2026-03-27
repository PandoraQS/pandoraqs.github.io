import Afflicted from './Afflicted';
import FrescoFrame from './FrescoFrame';
import { AFFLICTED } from '../constants/site';

export default function AfflictedFrame() {
  return (
    <FrescoFrame
      width="min(160px, 40vw)"
      height="min(457px, 114vw)"
      topLabel={AFFLICTED.titleEn}
      bottomLeftLabel={AFFLICTED.title}
      modeLabel={AFFLICTED.mode}
      cornerVariant="diagonal"
      topLabelOffsetClass="-top-6"
      bottomLabelOffsetClass="-bottom-7"
    >
      <Afflicted className="w-full h-full" />
    </FrescoFrame>
  );
}
