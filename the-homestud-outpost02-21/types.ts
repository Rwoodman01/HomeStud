export interface OutpostStatus {
  id: string;
  location: string;
  status: 'active' | 'pending' | 'auditing';
  timestamp: string;
}

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  GHOST = 'ghost'
}

export type Pillar = 'Foundation' | 'Fitness' | 'Finance' | 'Family' | 'Spirit';

export interface Question {
  id: number;
  pillar: Pillar;
  type: 'choice' | 'text';
  text: string;
  options?: { label: string; value: number }[];
}

export interface AuditState {
  currentQuestionIndex: number;
  answers: Record<number, number | string>; // Question ID -> Score (number) or Text (string)
  isComplete: boolean;
  scores: Record<Pillar, number>;
  userEmail?: string;
  userName?: string;
}
