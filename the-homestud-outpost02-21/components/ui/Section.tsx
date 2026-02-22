import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  gridBackground?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, gridBackground = false }) => {
  return (
    <section id={id} className={`relative py-24 px-6 md:px-12 overflow-hidden ${className}`}>
      {gridBackground && (
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ 
               backgroundImage: 'linear-gradient(#1F1E1D 1px, transparent 1px), linear-gradient(90deg, #1F1E1D 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }} 
        />
      )}
      <div className="max-w-6xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};