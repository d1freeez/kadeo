import { create } from "zustand";

type ChooseStore = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useChoose = create<ChooseStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));
