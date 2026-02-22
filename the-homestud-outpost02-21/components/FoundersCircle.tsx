import React from 'react';
import { Section } from './ui/Section';
import { MechanicalButton } from './ui/MechanicalButton';
import { ButtonVariant } from '../types';
import { Crown, Key } from 'lucide-react';

export const FoundersCircle: React.FC = () => {
  return (
    <Section className="bg-antique-dark" gridBackground>
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#EBE9E4] p-1 border-2 border-leather shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <div className="bg-antique bg-paper-texture bg-repeat shadow-inner-paper border border-double border-ink/30 p-8 md:p-12 text-center space-y-8 relative overflow-hidden">
            
            {/* Watermark */}
            <Crown className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 text-ink/5 rotate-12 pointer-events-none" />

            <div className="inline-block border-b-2 border-brass pb-1">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.4em] text-ink">Official Decree</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-black text-ink">
              The Founders Circle
            </h2>

            <p className="font-mono text-lg text-ink/80 leading-relaxed">
              The first <span className="text-leather-dark font-bold border-b border-leather-dark">10 men</span> to join the Tribe receive the "Founding Steward" status and direct access to the Master Ledger.
            </p>

            <div className="bg-antique bg-paper-texture bg-repeat p-6 shadow-inner border border-ink/10 max-w-lg mx-auto transform -rotate-1">
              <ul className="text-left font-serif space-y-2 text-ink/90">
                <li className="flex items-start gap-2">
                  <span className="text-brass">✓</span> Lifetime access to Harlan Legacy Mode.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass">✓</span> Priority Fireside Channels.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass">✓</span> The "Golden Compass" Dashboard badge.
                </li>
              </ul>
            </div>

            <div className="pt-6">
               <p className="font-mono text-xs text-ink/50 mb-4 uppercase tracking-widest">Dues required. Fog cleared.</p>
               <MechanicalButton 
                  label="Claim Your Spot in the Tribe" 
                  variant={ButtonVariant.PRIMARY} 
                  fullWidth={false}
                  className="mx-auto text-lg px-12"
                  icon={<Key className="w-5 h-5" />}
                  onClick={() => alert('Initiating Payment Protocol...')}
               />
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
};