import React from 'react';
import { Pillar } from '../../types';

interface StarGraphProps {
  scores: Record<Pillar, number>;
}

export const StarGraph: React.FC<StarGraphProps> = ({ scores }) => {
  // Max possible score per pillar is 15 (3 questions * 5 points)
  const MAX_SCORE = 15;
  const pillars: Pillar[] = ['Foundation', 'Fitness', 'Finance', 'Family', 'Spirit'];
  
  // Calculate polygon points
  const getCoordinates = (value: number, index: number, total: number, radius: number) => {
    const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
    const normalizedValue = Math.min(value, MAX_SCORE) / MAX_SCORE; // 0 to 1
    const x = Math.cos(angle) * (radius * normalizedValue) + 100;
    const y = Math.sin(angle) * (radius * normalizedValue) + 100;
    return { x, y };
  };

  const points = pillars.map((p, i) => {
    const coords = getCoordinates(scores[p] || 0, i, 5, 80);
    return `${coords.x},${coords.y}`;
  }).join(' ');

  // Background Grid Levels (20%, 40%, 60%, 80%, 100%)
  const gridLevels = [0.2, 0.4, 0.6, 0.8, 1.0].map((level) => {
    return pillars.map((_, i) => {
      const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
      const x = Math.cos(angle) * (80 * level) + 100;
      const y = Math.sin(angle) * (80 * level) + 100;
      return `${x},${y}`;
    }).join(' ');
  });

  return (
    <div className="relative w-full max-w-[300px] mx-auto aspect-square">
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl">
        {/* Background Circle/Grid */}
        <circle cx="100" cy="100" r="80" fill="#FAF9F6" stroke="#C2996B" strokeWidth="1" opacity="0.2" />
        
        {/* Axis Lines */}
        {pillars.map((_, i) => {
          const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
          const x = Math.cos(angle) * 80 + 100;
          const y = Math.sin(angle) * 80 + 100;
          return <line key={i} x1="100" y1="100" x2={x} y2={y} stroke="#1F1E1D" strokeWidth="0.5" opacity="0.3" />;
        })}

        {/* Grid Polygons */}
        {gridLevels.map((poly, i) => (
          <polygon key={i} points={poly} fill="none" stroke="#C2996B" strokeWidth="0.5" strokeDasharray="2,2" />
        ))}

        {/* The Data Polygon */}
        <polygon points={points} fill="rgba(184, 138, 100, 0.4)" stroke="#B88A64" strokeWidth="2" />
        
        {/* Data Points */}
        {pillars.map((p, i) => {
          const coords = getCoordinates(scores[p] || 0, i, 5, 80);
          return (
            <circle key={i} cx={coords.x} cy={coords.y} r="3" fill="#1F1E1D" stroke="#FAF9F6" strokeWidth="1" />
          );
        })}

        {/* Labels */}
        {pillars.map((p, i) => {
          const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
          // Push text out a bit further than radius
          const x = Math.cos(angle) * 95 + 100; 
          const y = Math.sin(angle) * 95 + 100;
          return (
            <text 
              key={i} 
              x={x} 
              y={y} 
              fontSize="8" 
              fontFamily="Courier Prime" 
              textAnchor="middle" 
              alignmentBaseline="middle" 
              fill="#1F1E1D"
              className="uppercase font-bold tracking-wider"
            >
              {p}
            </text>
          );
        })}
      </svg>
    </div>
  );
};
