import { create } from "zustand";

export type ChatRoomStore = {
  username: string;
  roomId: string;
  setUsername: (newUsername: string) => void;
  setRoomId: (roomId: string) => void;
};

export const useChatRoomStore = create<ChatRoomStore>((set) => ({
  username: "",
  roomId: "",
  setUsername: (newUsername: string) => set({ username: newUsername }),
  setRoomId: (roomId: string) => set({ roomId: roomId }),
}));
