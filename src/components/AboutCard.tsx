import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface AboutCardProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  details?: string;
  description: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ icon: Icon, title, subtitle, details, description }) => (
  <div className="group bg-white/60 p-6 rounded-2xl border border-white shadow-sm hover:shadow-md transition-all h-full flex flex-col">
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-blue-800 rounded-2xl shadow-lg text-white">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="font-extrabold text-xl text-slate-900">{title}</h3>
        {subtitle && <p className="text-blue-900 font-bold text-sm">{subtitle}</p>}
        {details && <p className="text-gray-500 text-xs italic">{details}</p>}
      </div>
    </div>
    <p className="text-sm text-gray-700 leading-relaxed grow">{description}</p>
  </div>
);

export default AboutCard;