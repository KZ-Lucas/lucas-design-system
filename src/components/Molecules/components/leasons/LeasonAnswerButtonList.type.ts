import type { AnswerType } from '@/types/leason';

export type LeasonAnswerListProps = {
  answerList: AnswerType[];
  onSubmit: (answer: string) => void;
  showResult?: boolean;
};
