import { persist } from 'zustand/middleware'
import { create } from 'zustand'

import {createHomeSlice, HomeSlice} from "./home.store.ts";

type SharedState = HomeSlice

export const useStore = create<SharedState>()(
    persist(
        (...a) => ({
            ...createHomeSlice(...a)
        }),
        { name: 'home-store' }
    )
)