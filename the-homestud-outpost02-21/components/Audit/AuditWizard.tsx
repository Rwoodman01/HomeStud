import React, { useState, useEffect, useRef } from 'react';
import { AUDIT_QUESTIONS } from './AuditData';
import { StarGraph } from './StarGraph';
import { MechanicalButton } from '../ui/MechanicalButton';
import { ButtonVariant, Pillar } from '../../types';
import { ChevronRight, CheckCircle, RefreshCcw } from 'lucide-react';

interface AuditWizardProps {
  onClose: () => void;
}

export const AuditWizard: React.FC<AuditWizardProps> = ({ onClose }) => {
  // State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | string>>({});
  const [scores, setScores] = useState<Record<Pillar, number>>({
    Foundation: 0, Fitness: 0, Finance: 0, Family: 0, Spirit: 0
  });
  const [textInput, setTextInput] = useState('');
  const [harlanMessage, setHarlanMessage] = useState<string | null>(null);
  const [leadForm, setLeadForm] = useState({ name: '', email: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const currentQuestion = AUDIT_QUESTIONS[currentIndex];
  const isLastQuestion = currentIndex === AUDIT_QUESTIONS.length - 1;
  const isFinished = currentIndex >= AUDIT_QUESTIONS.length;

  // --- Logic Helpers ---

  const handleChoice = (value: number) => {
    // Save answer
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: value }));
    
    // Update Score
    setScores(prev => ({
      ...prev,
      [currentQuestion.pillar]: prev[currentQuestion.pillar] + value
    }));

    // Next Question
    setTimeout(() => {
      setCurrentIndex(prev => prev + 1);
    }, 250); // Slight delay for mechanical feel
  };

  const handleTextSubmit = () => {
    if (!textInput.trim()) return;

    setAnswers(prev => ({ ...prev, [currentQuestion.id]: textInput }));
    
    // Harlan's Logic
    setHarlanMessage("Updating ledger...");
    setTimeout(() => {
      setHarlanMessage("Entry logged. Proceed.");
      setTimeout(() => {
        setHarlanMessage(null);
        setTextInput('');
        setCurrentIndex(prev => prev + 1);
      }, 1000);
    }, 800);
  };

  const calculateTotalScore = (): number => {
    return (Object.values(scores) as number[]).reduce((a: number, b: number) => a + b, 0);
  };

  const getBracket = (total: number) => {
    if (total <= 40) return { 
      title: "The Clearing", 
      desc: "The fog is thick, but the foundation is still there. We start with the first hour.",
      color: "text-ink"
    };
    if (total <= 75) return { 
      title: "The Outpost", 
      desc: "You’re on the line, but you’re over-extended. It’s time to move from Laborer to Steward.",
      color: "text-brass-dark"
    };
    return { 
      title: "The Fortress", 
      desc: "The perimeter is secure. Now we lead others and build the legacy.",
      color: "text-leather-dark"
    };
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(leadForm.name && leadForm.email) {
      setFormSubmitted(true);
      // Here you would typically send data to backend
    }
  };

  // Scroll to top on question change
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [currentIndex]);

  // --- Render: Lead Gen Form ---
  if (isFinished && !formSubmitted) {
    return (
      <div className="fixed inset-0 z-50 bg-antique flex items-center justify-center p-4 bg-paper-texture overflow-y-auto">
        <div className="max-w-md w-full border-4 border-double border-ink/20 p-8 shadow-2xl bg-antique-dark relative">
          
          <div className="absolute top-4 right-4 w-12 h-12 border-2 border-brass rounded-full flex items-center justify-center animate-pulse">
            <CheckCircle className="text-brass w-6 h-6" />
          </div>

          <h2 className="font-serif text-3xl font-bold text-ink mb-2">Audit Complete.</h2>
          <p className="font-mono text-sm text-ink/70 mb-8">
            The Master Ledger has been calculated. Enter your details to certify the record and view your perimeter map.
          </p>

          <form onSubmit={handleLeadSubmit} className="space-y-6">
            <div>
              <label className="block font-mono text-xs uppercase tracking-widest text-ink/50 mb-1">Steward Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-antique border-b-2 border-ink/30 focus:border-leather outline-none py-2 font-serif text-lg text-ink placeholder-ink/20"
                placeholder="E.g. John Doe"
                value={leadForm.name}
                onChange={e => setLeadForm({...leadForm, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block font-mono text-xs uppercase tracking-widest text-ink/50 mb-1">Communication Channel (Email)</label>
              <input 
                type="email" 
                required
                className="w-full bg-antique border-b-2 border-ink/30 focus:border-leather outline-none py-2 font-serif text-lg text-ink placeholder-ink/20"
                placeholder="john@example.com"
                value={leadForm.email}
                onChange={e => setLeadForm({...leadForm, email: e.target.value})}
              />
            </div>
            <MechanicalButton 
              type="submit" 
              label="Sign the Ledger" 
              fullWidth 
              variant={ButtonVariant.PRIMARY} 
            />
          </form>
        </div>
      </div>
    );
  }

  // --- Render: Results Page ---
  if (isFinished && formSubmitted) {
    const totalScore = calculateTotalScore();
    const bracket = getBracket(totalScore);

    return (
      <div className="fixed inset-0 z-50 bg-antique flex flex-col items-center justify-start overflow-y-auto pt-12 pb-12 px-4 bg-paper-texture">
         <div className="max-w-2xl w-full space-y-12 animate-fade-in-up">
            
            {/* Header */}
            <div className="text-center space-y-4 border-b-2 border-ink/10 pb-8">
              <div className="inline-block border border-ink p-1 mb-2">
                <div className="border border-ink px-3 py-1 font-mono text-xs tracking-[0.3em] uppercase">
                  Audit Report
                </div>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-black text-ink">Master Ledger Summary</h1>
              <p className="font-mono text-ink/60">Steward: {leadForm.name}</p>
            </div>

            {/* The Chart & Score */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <StarGraph scores={scores} />
              </div>
              <div className="text-center md:text-left space-y-4">
                <div className="font-mono text-xs uppercase tracking-widest text-ink/50">Overall Rating</div>
                <div className={`font-serif text-4xl font-bold ${bracket.color}`}>{bracket.title}</div>
                <div className="font-mono text-3xl text-ink">{totalScore} <span className="text-sm text-ink/40">/ 75</span></div>
                <p className="font-serif italic text-ink/80 leading-relaxed border-l-2 border-leather pl-4">
                  "{bracket.desc}"
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-ink text-antique p-8 shadow-hard relative overflow-hidden">
              <div className="relative z-10 text-center space-y-6">
                <h3 className="font-serif text-2xl font-bold text-leather-light">Reinforce Your Perimeter</h3>
                <p className="font-mono text-sm text-antique/70 max-w-lg mx-auto">
                  Your perimeter is mapped. Now, let’s reinforce the weak points. Join the Tribe to start your 90-day build.
                </p>
                <div className="flex flex-col gap-4 max-w-xs mx-auto">
                  <MechanicalButton 
                    label="Join the Tribe" 
                    variant={ButtonVariant.PRIMARY}
                    onClick={() => alert("Redirecting to Stripe...")}
                  />
                  <button onClick={onClose} className="text-antique/40 hover:text-white font-mono text-xs uppercase tracking-widest underline decoration-dashed">
                    Return to Main Outpost
                  </button>
                </div>
              </div>
              {/* Background Noise */}
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
            </div>

         </div>
      </div>
    );
  }

  // --- Render: Question Interface ---
  const progress = ((currentIndex) / AUDIT_QUESTIONS.length) * 100;

  if (!currentQuestion) return null;

  return (
    <div className="fixed inset-0 z-50 bg-antique flex flex-col bg-paper-texture">
      
      {/* Slide Rule Progress Bar */}
      <div className="h-16 bg-antique-dark border-b-2 border-ink shadow-sm relative flex items-end pb-2 overflow-hidden select-none">
        {/* Ticks */}
        <div className="absolute bottom-0 left-0 w-full h-8 flex justify-between px-4 opacity-30 pointer-events-none">
           {Array.from({length: 40}).map((_, i) => (
             <div key={i} className={`w-[1px] bg-ink ${i % 5 === 0 ? 'h-full' : 'h-1/2 mt-auto'}`}></div>
           ))}
        </div>
        {/* The Cursor */}
        <div 
          className="absolute top-0 bottom-0 w-12 border-l-2 border-r-2 border-brass/50 bg-leather/10 transition-all duration-500 ease-out z-10 flex items-center justify-center backdrop-blur-[1px]"
          style={{ left: `calc(${progress}% - 24px)` }}
        >
          <div className="w-[1px] h-full bg-red-800 opacity-60"></div>
        </div>
        <div className="w-full text-center font-mono text-xs font-bold text-ink/50 relative z-20">
          STATUS: {currentIndex + 1} / {AUDIT_QUESTIONS.length}
        </div>
      </div>

      {/* Main Question Area */}
      <div className="flex-1 overflow-y-auto" ref={scrollRef}>
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-20 space-y-12">
          
          {/* Question Text */}
          <div className="space-y-4 animate-fade-in">
             <div className="inline-block bg-leather text-antique px-2 py-1 font-mono text-xs uppercase tracking-widest font-bold">
               Pillar: {currentQuestion.pillar}
             </div>
             <h2 className="font-serif text-2xl md:text-4xl font-bold text-ink leading-tight">
               {currentQuestion.text}
             </h2>
          </div>

          {/* Interaction Area */}
          <div className="space-y-6">
            
            {/* Multiple Choice */}
            {currentQuestion.type === 'choice' && currentQuestion.options && (
              <div className="grid gap-4">
                {currentQuestion.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleChoice(opt.value)}
                    className="text-left group relative bg-gradient-to-br from-[#e6cfa8] to-[#C2996B] p-1 shadow-hard hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-hard-sm transition-all active:scale-[0.99]"
                  >
                    <div className="bg-antique h-full p-6 border border-ink/10 flex items-center gap-4 group-hover:bg-antique/90">
                      <div className="w-8 h-8 rounded-full border-2 border-brass flex items-center justify-center font-mono font-bold text-brass-dark group-hover:bg-brass group-hover:text-antique transition-colors">
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <span className="font-serif text-lg text-ink font-medium">{opt.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Text Input */}
            {currentQuestion.type === 'text' && (
              <div className="space-y-6">
                <div className="relative">
                  <textarea 
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    placeholder="Type your response here..."
                    className="w-full h-40 bg-antique-dark border-2 border-ink/20 p-6 font-mono text-lg text-ink focus:border-leather focus:outline-none shadow-inner resize-none typewriter-cursor leading-relaxed"
                  />
                  {/* Decorative corner screws */}
                  <div className="absolute top-2 left-2 text-ink/20">+</div>
                  <div className="absolute top-2 right-2 text-ink/20">+</div>
                  <div className="absolute bottom-2 left-2 text-ink/20">+</div>
                  <div className="absolute bottom-2 right-2 text-ink/20">+</div>
                </div>

                {harlanMessage ? (
                  <div className="flex items-center gap-3 text-leather font-mono text-sm animate-pulse">
                     <RefreshCcw className="w-4 h-4 animate-spin" />
                     {harlanMessage}
                  </div>
                ) : (
                  <div className="flex justify-end">
                    <MechanicalButton 
                      label="Submit Entry" 
                      onClick={handleTextSubmit}
                      variant={ButtonVariant.PRIMARY}
                      icon={<ChevronRight className="w-5 h-5" />}
                      disabled={!textInput.trim()}
                      className={!textInput.trim() ? "opacity-50 grayscale" : ""}
                    />
                  </div>
                )}
              </div>
            )}
            
          </div>

        </div>
      </div>

      {/* Footer / Quit */}
      <div className="bg-antique border-t border-ink/10 p-4 text-center">
        <button onClick={onClose} className="text-ink/40 hover:text-red-800 font-mono text-xs uppercase tracking-widest transition-colors">
          Abort Diagnostic
        </button>
      </div>

    </div>
  );
};