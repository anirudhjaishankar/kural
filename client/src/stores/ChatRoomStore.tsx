import { create } from "zustand";

export const useChatRoomStore = create((set) => ({
  username: "",
  roomId: "",
  setUsername: (newUsername: string) => set({ username: newUsername }),
  setRoomId: (roomId: string) => set({ roomId: roomId }),
}));
