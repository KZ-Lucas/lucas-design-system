export type TimerVariableState = {
  timer: number;
};

export type TimerMethodState = {
  startTimer: () => void;
  stopTimer: () => number;
};

export type TimerState = TimerVariableState & TimerMethodState;
