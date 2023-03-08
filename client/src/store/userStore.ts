import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserStore {
  email: string | null;
  name: string | null;
  token: string | null;
  isConnected: boolean;
  setEmail: (email: string) => void;
  setName: (name: string) => void;
  setToken: (token: string) => void;
}

const useUser = create<UserStore>()(
  persist(
    (set, get) => ({
      email: null,
      name: null,
      token: null,
      isConnected: false,
      setEmail: email => set(() => ({ email })),
      setName: name => set(() => ({ name })),
      setToken: token => set(() => ({ token })),
    }),
    {
      name: "doremi-user",
    }
  )
);

export default useUser;
