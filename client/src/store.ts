import { create } from "zustand";

interface ModalStore {
  show: boolean;
  showModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
}
interface LoginStore {
  showLogin: boolean;
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
export const useLoginModal = create<LoginStore>((set) => {
  return {
    showLogin: false,
    showModal: () => set({ showLogin: true }),
    closeModal: () => set({ showLogin: false }),
    toggleModal: () => set((state) => ({ showLogin: !state.showLogin })),
  };
});
// Define the type for your state
type RegisterStore = {
  showRegister: boolean;
  showPassword: boolean;
  showModal: () => void;
  closeModal: () => void;
  togglePassword: () => void;
};
export const useRegisterModal = create<RegisterStore>((set, get) => ({
  showRegister: false,
  showPassword: false,
  showModal: () => {
    set({ showRegister: true });
  },
  closeModal: () => {
    set({ showRegister: false });
  },
  togglePassword: () => {
    const currentState = get();
    set({ showPassword: !currentState.showPassword });
  },
}));
