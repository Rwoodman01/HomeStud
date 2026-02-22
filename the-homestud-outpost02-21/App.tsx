import React, { useState } from 'react';
import { Header } from './components/Header';
import { Stakes } from './components/Stakes';
import { Guide } from './components/Guide';
import { Plan } from './components/Plan';
import { FoundersCircle } from './components/FoundersCircle';
import { MusterRoll } from './components/MusterRoll';
import { AuditWizard } from './components/Audit/AuditWizard';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'audit'>('home');

  return (
    <main className="min-h-screen flex flex-col antialiased selection:bg-leather selection:text-white">
      {view === 'audit' ? (
        <AuditWizard onClose={() => setView('home')} />
      ) : (
        <>
          <Header onStartAudit={() => setView('audit')} />
          <MusterRoll />
          <Stakes />
          <Guide />
          <Plan />
          <FoundersCircle />
          
          <footer className="bg-ink text-antique/40 py-12 text-center font-mono text-xs">
            <div className="max-w-4xl mx-auto px-6 border-t border-antique/10 pt-8">
              <p className="mb-4">&copy; 1926-2024 The HomeStud Outpost. All Rights Reserved.</p>
              <div className="flex justify-center gap-6">
                <a href="#" className="hover:text-leather transition-colors">Manifesto</a>
                <a href="#" className="hover:text-leather transition-colors">Logbook</a>
                <a href="#" className="hover:text-leather transition-colors">Transmission</a>
              </div>
            </div>
          </footer>
        </>
      )}
    </main>
  );
};

export default App;