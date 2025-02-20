import { createStore } from "zustand/vanilla";

export interface CounterState {
  count: number;
}

export type CounterActions = {
  decrementCount: () => void;
  incrementCount: () => void;
};

export type CounterStore = CounterState & CounterActions;

export const initialCounterState: CounterState = {
  count: 0,
};

export const createCounterStore = (
  initialState: CounterState = initialCounterState
) => {
  return createStore<CounterState>()((set) => ({
    ...initialState,
    decrementCount: () => set((state) => ({ count: state.count - 1 })),
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
  }));
};
