import React, { useEffect, useState } from 'react';
import { OutpostStatus } from '../types';

const INITIAL_OUTPOSTS: OutpostStatus[] = [
  { id: '312', location: 'Goshen, IN', status: 'active', timestamp: '08:45 AM' },
  { id: '404', location: 'Atlanta, GA', status: 'active', timestamp: '09:30 AM' },
  { id: '402', location: 'Portland, OR', status: 'active', timestamp: '08:42 AM' },
  { id: '119', location: 'Austin, TX', status: 'auditing', timestamp: '09:15 AM' },
  { id: '882', location: 'London, UK', status: 'active', timestamp: '02:30 PM' },
  { id: '005', location: 'Nashville, TN', status: 'pending', timestamp: '08:10 AM' },
];

export const MusterRoll: React.FC = () => {
  const [outposts, setOutposts] = useState<OutpostStatus[]>(INITIAL_OUTPOSTS);

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setOutposts(prev => {
        const next = [...prev];
        // Randomly update a timestamp or status to make it feel alive
        const idx = Math.floor(Math.random() * next.length);
        next[idx] = {
          ...next[idx],
          timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        };
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Duplicate the list for seamless infinite scroll
  // We double it to ensure the keyframes translate -50% works correctly
  const tickerItems = [...outposts, ...outposts];

  return (
    <div className="bg-ink text-antique font-mono text-xs py-3 border-t border-brass overflow-hidden relative z-20">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">
        {tickerItems.map((op, index) => (
          <div key={`${op.id}-${index}`} className="flex items-center gap-2 opacity-80 mx-8 flex-shrink-0">
            {index === 0 && <span className="text-brass font-bold tracking-widest uppercase mr-4">/// SYSTEM ONLINE ///</span>}
            <span className={`w-2 h-2 rounded-full ${op.status === 'active' ? 'bg-green-500 animate-pulse' : op.status === 'auditing' ? 'bg-yellow-500' : 'bg-gray-500'}`}></span>
            <span className="whitespace-nowrap">OP-{op.id} [{op.location}] :: {op.status.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};