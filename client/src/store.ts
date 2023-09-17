import { create } from "zustand";

interface ModalStore {
  show: boolean;
  showModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
}

export const useModal = create<ModalStore>((set) => {
  return {
    show: false,
    showModal: () => set({ show: true }),
    closeModal: () => set({ show: false }),
    toggleModal: () => set((state) => ({ show: !state.show })),
  };
});
