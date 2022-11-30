import produce from 'immer';
import { v4 as uuidv4 } from 'uuid';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { getLeasons } from '@/services/leasons';

import { initialState } from './index.const';
import { getAnswerList } from './index.util';

import type { LeasonState } from './index.type';

const useLeasonStore = create<LeasonState>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,

        nextStep: () => {
          const nextSequence = get().sequence + 1;

          set({ sequence: nextSequence });

          return nextSequence;
        },
        fetchLeasonList: async () => {
          const { results } = await getLeasons({
            amount: 10,
            category: 12,
            type: 'multiple',
          });

          set({
            ...initialState,
            leasonList: results.map((result) => ({
              ...result,
              answerList: getAnswerList(result),
              id: uuidv4(),
            })),
          });
        },
        submitUserAnswer: (id, answer) => {
          set((state) =>
            produce(state, (draftState) => {
              const correctType =
                state.leasonList[state.sequence].correct_answer === answer
                  ? 'correct'
                  : 'incorrect';

              draftState.answerList[id] = answer;
              draftState.resultList[id] = correctType;
            }),
          );
        },
      }),
      {
        name: 'leason-storage',
        getStorage: () => sessionStorage,
      },
    ),
  ),
);

export default useLeasonStore;
