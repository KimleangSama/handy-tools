import { create } from "zustand";

export const useFavoriteToolStore = create((set) => ({
    isFavoriteTriggered: false,
    setIsFavoriteTriggered: (value) => set(state => ({...state, isFavoriteTriggered: value})),
}))
