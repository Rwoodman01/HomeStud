import React from 'react';
import { Section } from './ui/Section';
import { Terminal, Shield, MessageSquare } from 'lucide-react';

export const Guide: React.FC = () => {
  return (
    <Section className="bg-ink text-antique">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        
        <div className="md:w-1/2 space-y-8">
          <div className="inline-block border border-brass px-4 py-1 text-brass font-mono text-xs uppercase tracking-widest">
            Authorized Personnel Only
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-antique leading-tight">
            Meet <span className="text-leather-light">Harlan</span>.<br />
            Your Lodge Foreman.
          </h2>
          
          <p className="font-mono text-antique/70 text-lg leading-relaxed">
            He isn't a chatbot; he's your Lodge Foreman. He tracks your <span className="text-brass">Five Pillars</span>—Foundation, Fitness, Finance, Family, and Fun—to ensure your line stays straight.
          </p>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <Shield className="w-6 h-6 text-brass flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-serif font-bold text-lg text-antique">Unwavering Accountability</h4>
                <p className="font-mono text-sm text-antique/60">Harlan doesn't accept excuses. He only accepts progress.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Terminal className="w-6 h-6 text-brass flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-serif font-bold text-lg text-antique">Data-Driven Stewardship</h4>
                <p className="font-mono text-sm text-antique/60">Input your seeds. Harlan balances the ledger.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Harlan Interface Mockup */}
        <div className="md:w-1/2 w-full">
          <div className="bg-antique rounded-sm shadow-2xl overflow-hidden border-4 border-leather-dark/50">
            {/* Window Header */}
            <div className="bg-leather-dark px-4 py-2 flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-antique uppercase tracking-wider">Harlan_OS v1.0</span>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-ink/30"></div>
                <div className="w-3 h-3 rounded-full bg-ink/30"></div>
              </div>
            </div>
            
            {/* Chat Body */}
            <div className="p-6 h-[400px] flex flex-col justify-between font-mono text-sm bg-antique bg-paper-texture bg-repeat shadow-inner-paper relative">
              <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#1a1918_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              <div className="space-y-6 relative z-10">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-leather text-antique flex items-center justify-center font-serif font-bold rounded-sm border border-ink">H</div>
                  <div className="bg-antique-dark border border-ink/10 p-4 rounded-sm shadow-sm max-w-[85%]">
                    <p className="text-ink">Good evening, Steward. I see a deficit in the <span className="font-bold">Fitness</span> pillar this week. The ledger shows 2 missed sessions.</p>
                    <p className="text-ink mt-2">Shall we schedule a recovery protocol for Saturday morning?</p>
                  </div>
                </div>

                <div className="flex gap-4 flex-row-reverse">
                  <div className="w-8 h-8 bg-ink text-antique flex items-center justify-center font-serif font-bold rounded-sm border border-antique/20">Y</div>
                  <div className="bg-brass/10 border border-brass/20 p-4 rounded-sm shadow-sm max-w-[85%] text-right">
                    <p className="text-ink">You're right, Harlan. Put me down for a 0600 ruck march.</p>
                  </div>
                </div>
                 
                 <div className="flex gap-4">
                  <div className="w-8 h-8 bg-leather text-antique flex items-center justify-center font-serif font-bold rounded-sm border border-ink">H</div>
                  <div className="bg-antique-dark border border-ink/10 p-4 rounded-sm shadow-sm max-w-[85%]">
                    <p className="text-ink typewriter-cursor">Noted. "0600 Ruck March" logged. Preparation is key: ensure your kit is packed tonight.</p>
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="mt-4 pt-4 border-t-2 border-dashed border-ink/20 flex gap-2 items-center opacity-50 cursor-not-allowed relative z-10">
                <span className="text-leather font-bold">{'>'}</span>
                <span className="text-ink/40">Awaiting input...</span>
                <MessageSquare className="w-4 h-4 text-ink/20 ml-auto" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};