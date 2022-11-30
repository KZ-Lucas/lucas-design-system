import type { LeasonType } from '@/types/leason';

export type LeasonResultType = 'correct' | 'incorrect';

export type LeasonVariableState = {
  leasonList: LeasonType[];
  resultList: Record<string, LeasonResultType>;
  answerList: Record<string, string>;
  sequence: number;
  currentLeason?: LeasonType;
};

export type LeasonMethodState = {
  nextStep: () => number;
  fetchLeasonList: () => Promise<void>;
  submitUserAnswer: (id: string, answer: string) => void;
};

export type LeasonState = LeasonVariableState & LeasonMethodState;
