import React from 'react';
import { Target } from 'lucide-react';

interface MissionCardProps {
  title: string;
  description: string;
}

const MissionCard: React.FC<MissionCardProps> = ({ title, description }) => (
  <div className="group bg-white/60 p-6 rounded-2xl border border-white shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-center">
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-blue-800 rounded-2xl shadow-lg text-white shrink-0">
        <Target size={24} />
      </div>
      <h3 className="font-extrabold text-xl text-slate-900 uppercase italic tracking-tight">
        {title}
      </h3>
    </div>
    <p className="text-sm text-gray-700 leading-relaxed italic font-medium">
      {description}
    </p>
  </div>
);

export default MissionCard;