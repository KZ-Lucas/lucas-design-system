import { shuffleArray } from '@/utils/array';

import type { LeasonType } from '@/types/leason';
import type { LeasonResultType } from './index.type';

/** 다소 복잡할 수 있는 비즈니스 로직은 명령형으로 작성해 How에 치중 */
export const getAnswerList = (leason: LeasonType) => {
  const answerList: { title: string; type: LeasonResultType }[] = [];

  [leason.correct_answer].forEach((answer) => {
    answerList.push({ title: answer, type: 'correct' });
  });
  leason.incorrect_answers.forEach((answer) => {
    answerList.push({ title: answer, type: 'incorrect' });
  });

  return shuffleArray(answerList);
};
