import React from 'react';
import { Section } from './ui/Section';
import { CloudFog, Anchor } from 'lucide-react';

export const Stakes: React.FC = () => {
  return (
    <Section className="bg-antique-dark bg-paper-texture">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        <div className="relative order-2 md:order-1">
          {/* Decorative Card */}
          <div className="bg-antique bg-paper-texture bg-repeat shadow-inner-paper p-8 border border-ink shadow-hard rotate-1 max-w-md mx-auto relative">
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-brass"></div>
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-brass"></div>
            
            <h3 className="font-mono text-xs uppercase tracking-widest text-ink/50 mb-4 border-b border-ink/10 pb-2">
              Status Report: Critical
            </h3>
            <p className="font-serif text-xl italic leading-loose text-ink/80">
              "The compass spins wildly. The map is torn. A man without a heading is not a captain; he is merely drift-wood awaiting the shore."
            </p>
            <div className="mt-6 flex justify-end">
              <span className="font-mono text-sm text-brass-dark">— The Unstewarded Man</span>
            </div>
          </div>
        </div>

        <div className="space-y-6 order-1 md:order-2">
          <div className="flex items-center gap-3 mb-2">
            <CloudFog className="w-8 h-8 text-leather" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink">
              The Modern Drift
            </h2>
          </div>
          
          <p className="font-mono text-lg text-ink/70 leading-relaxed">
            Modern life is a blur of noise and distraction. Most men are drifting, their <span className="font-bold text-ink bg-brass/20 px-1">Field Guides</span> empty and their ledgers unbalanced. 
          </p>
          
          <p className="font-mono text-lg text-ink/70 leading-relaxed">
            You aren't lazy; you're just unsupported. The systems of the past have crumbled, leaving you to forge a path through the fog alone.
          </p>

          <div className="pt-4 flex items-center gap-4 text-leather-dark font-bold font-serif">
            <Anchor className="w-6 h-6" />
            <span>It is time to drop anchor.</span>
          </div>
        </div>

      </div>
    </Section>
  );
};