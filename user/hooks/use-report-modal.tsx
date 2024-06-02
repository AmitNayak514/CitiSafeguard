import { create } from "zustand";

interface useReportModalType {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
export const useReportModal = create<useReportModalType>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
