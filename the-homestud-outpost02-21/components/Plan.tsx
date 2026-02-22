import React from 'react';
import { Section } from './ui/Section';
import { PenTool, Flame, Scale } from 'lucide-react';

export const Plan: React.FC = () => {
  return (
    <Section id="plan" className="bg-antique bg-paper-texture bg-repeat shadow-inner-paper">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl font-bold text-ink mb-4">The Operating Procedure</h2>
        <div className="w-24 h-1 bg-brass mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Step 1 */}
        <div className="group relative bg-antique-dark border border-ink/10 p-8 hover:border-leather hover:shadow-hard transition-all duration-300">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-leather text-antique font-mono font-bold text-xl flex items-center justify-center rounded-full border-4 border-antique shadow-sm z-10">
            1
          </div>
          <div className="mt-6 text-center space-y-4">
            <PenTool className="w-10 h-10 mx-auto text-brass" />
            <h3 className="font-serif text-2xl font-bold text-ink">Log Daily Seeds</h3>
            <p className="font-mono text-sm text-ink/70">
              Input the raw materials of your day. The work, the wins, the failures. Honest data is the foundation of sovereignty.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="group relative bg-antique-dark border border-ink/10 p-8 hover:border-leather hover:shadow-hard transition-all duration-300">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-leather text-antique font-mono font-bold text-xl flex items-center justify-center rounded-full border-4 border-antique shadow-sm z-10">
            2
          </div>
          <div className="mt-6 text-center space-y-4">
            <Flame className="w-10 h-10 mx-auto text-brass" />
            <h3 className="font-serif text-2xl font-bold text-ink">The Fireside Chat</h3>
            <p className="font-mono text-sm text-ink/70">
              Gather with Harlan to review the day. Receive wisdom, correction, and encouragement tailored to your specific pillars.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="group relative bg-antique-dark border border-ink/10 p-8 hover:border-leather hover:shadow-hard transition-all duration-300">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-leather text-antique font-mono font-bold text-xl flex items-center justify-center rounded-full border-4 border-antique shadow-sm z-10">
            3
          </div>
          <div className="mt-6 text-center space-y-4">
            <Scale className="w-10 h-10 mx-auto text-brass" />
            <h3 className="font-serif text-2xl font-bold text-ink">The Weekly Audit</h3>
            <p className="font-mono text-sm text-ink/70">
              Face the truth. A comprehensive review of your week to balance the ledger and set the azimuth for the week ahead.
            </p>
          </div>
        </div>

      </div>
    </Section>
  );
};