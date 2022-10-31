import create from "zustand";
import { PropertiesData } from "../dummy_data/propertiesData";

// Zustand is a modern state management library I created a example store for store global properties data
// Store properties data (for example)
// read the documentation for more information
// https://github.com/pmndrs/zustand
// A small, fast and scalable bearbones state-management solution using simplified flux principles. Has a comfy api based on hooks, isn't boilerplatey or opinionated.

export const useStore = create((set) => ({
  properties: PropertiesData,
  user: {},
  mentCount: () => set((state) => ({ count: state.count + 1 })),
  setUser: () => set((state) => ({ user: state.user })),
}));
