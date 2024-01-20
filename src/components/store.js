import {create} from 'zustand';

// define the store
export const useStore = create((set) => ({
  inputText: '', // Initial state for the input text
  setInputText: (text) => set((state) => ({ inputText: text })),
}));

 