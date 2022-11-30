import type { LeasonResultType } from '@/store/@features/leason/index.type';

export type AnswerType = {
  type: LeasonResultType;
  title: string;
};
export type LeasonType = {
  id: string;
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  answerList: AnswerType[];
  incorrect_answers: string[];
};

export type GetLeasonsPayload = {
  amount: number;
  category: number;
  type: 'multiple';
};
