import React from 'react';
import { Flame, Activity, Zap, Shield, Trophy } from 'lucide-react';

interface MarqueeItem {
  icon: React.ReactNode;
  text: string;
}

export const MarqueeTicker: React.FC = () => {
  const items: MarqueeItem[] = [
    { icon: <Flame size={16} color="var(--color-primary)" />, text: 'OVER 100,000+ SETS LOGGED' },
    {
      icon: <Activity size={16} color="var(--color-accent)" />,
      text: 'AUTOMATED 1RM & VOLUME PROJECTIONS',
    },
    { icon: <Zap size={16} color="var(--color-primary)" />, text: 'LIGHTNING-FAST GYM LOGGING' },
    {
      icon: <Shield size={16} color="var(--color-accent)" />,
      text: '100% PRIVATE & OFFLINE-READY',
    },
    {
      icon: <Trophy size={16} color="var(--color-primary)" />,
      text: 'SCIENTIFIC PROGRESSIVE OVERLOAD',
    },
  ];

  // Repeat items for smooth continuous loop
  const displayItems = [...items, ...items, ...items];

  return (
    <div className="ff-marquee-wrapper" aria-hidden="true">
      <div className="ff-marquee-content">
        {displayItems.map((item, idx) => (
          <div key={idx} className="ff-marquee-item">
            {item.icon}
            <span>{item.text}</span>
            <span className="ff-marquee-star">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
