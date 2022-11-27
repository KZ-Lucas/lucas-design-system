import api from './_http';

export type LeasonType = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

/**
 * 레슨 더미 조회
 * @methods GET
 */
export const getLeasons = () => {
  return api<{ results: LeasonType[] }>(`https://opentdb.com/api.php?amount=10`);
};
