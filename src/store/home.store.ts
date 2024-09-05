import { StateCreator } from "zustand";

export interface HomeSlice {
    counter: number;
    count(): void;
    discount(): void;
}

export const createHomeSlice: StateCreator<HomeSlice> = (set) => ({
    counter: 0,
    count() {
        set(state => ({ counter: state.counter + 1 }));
    },
    discount() {
        set(state => ({ counter: state.counter - 1 }));
    }
})