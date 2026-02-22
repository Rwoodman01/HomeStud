import React from 'react';
import { Compass, ScrollText } from 'lucide-react';
import { MechanicalButton } from './ui/MechanicalButton';
import { ButtonVariant } from '../types';

interface HeaderProps {
  onStartAudit: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onStartAudit }) => {
  return (
    <header className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 pt-20 pb-12 bg-antique bg-paper-texture bg-repeat shadow-inner-paper border-b-4 border-double border-ink/20">
      
      {/* Decorative Top Stamp */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-50">
        <div className="border border-ink p-1">
          <div className="border border-ink px-3 py-1 font-mono text-xs tracking-[0.3em] uppercase">
            Est. 1926
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-8 z-10">
        <div className="inline-flex items-center gap-2 text-brass-dark font-mono text-sm tracking-widest uppercase mb-4">
          <Compass className="w-4 h-4" />
          <span>Navigational Systems Online</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-ink leading-[0.9] tracking-tight">
          Escape the Fog. <br/>
          <span className="text-leather-dark">Reclaim Your Sovereignty.</span>
        </h1>

        <p className="font-mono text-ink/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed border-l-4 border-brass pl-6 text-left md:text-center md:border-l-0 md:pl-0">
          A 1926-style Command Center for the Modern Steward. Lead your home, master your trade, and build a legacy that lasts.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center pt-8">
          <MechanicalButton 
            label="Enter the Outpost" 
            variant={ButtonVariant.PRIMARY}
            icon={<Compass className="w-5 h-5" />}
            onClick={() => alert('Accessing The Outpost...')}
          />
          <MechanicalButton 
            label="Run the Weekly Audit" 
            variant={ButtonVariant.SECONDARY}
            icon={<ScrollText className="w-5 h-5" />}
            onClick={onStartAudit}
          />
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-antique-dark to-transparent pointer-events-none" />
    </header>
  );
};