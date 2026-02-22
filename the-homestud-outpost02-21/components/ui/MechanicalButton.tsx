import React from 'react';
import { ButtonVariant } from '../../types';

interface MechanicalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  label: string;
  icon?: React.ReactNode;
}

export const MechanicalButton: React.FC<MechanicalButtonProps> = ({ 
  variant = ButtonVariant.PRIMARY, 
  fullWidth = false, 
  label, 
  icon,
  className = '',
  ...props 
}) => {
  
  const baseStyles = "relative font-mono font-bold uppercase tracking-widest text-sm py-4 px-8 transition-all duration-75 ease-out transform active:translate-y-[2px] active:translate-x-[2px] active:shadow-none flex items-center justify-center gap-3 group";
  
  const variants = {
    [ButtonVariant.PRIMARY]: "bg-leather text-antique border-2 border-ink shadow-hard hover:bg-leather-dark hover:shadow-[6px_6px_0px_0px_rgba(31,30,29,0.3)]",
    [ButtonVariant.SECONDARY]: "bg-transparent text-ink border-2 border-brass shadow-hard hover:bg-brass/10 hover:border-brass-dark",
    [ButtonVariant.GHOST]: "bg-transparent text-ink/70 border-b-2 border-transparent hover:border-leather hover:text-ink pb-1 px-0 py-2 shadow-none active:translate-y-0"
  };

  const widthClass = fullWidth ? 'w-full' : '';

  // Simulate stitching for primary leather buttons
  const Stitching = () => (
    <div className="absolute inset-[3px] border border-dashed border-antique/30 pointer-events-none" />
  );

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {variant === ButtonVariant.PRIMARY && <Stitching />}
      {icon && <span className="group-hover:rotate-12 transition-transform duration-200">{icon}</span>}
      <span className="relative z-10">{label}</span>
    </button>
  );
};