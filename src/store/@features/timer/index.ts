import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import type { TimerState } from './index.type';

const useTimerStore = create<TimerState>()(
  devtools(
    persist(
      (set, get) => ({
        timer: 0,
        startTimer() {
          set({ timer: new Date().getTime() });
        },
        /** 외부 상태 의존 */
        stopTimer() {
          return new Date().getTime() - get().timer;
        },
      }),
      {
        name: 'timer-storage',
        getStorage: () => sessionStorage,
      },
    ),
  ),
);

export default useTimerStore;
