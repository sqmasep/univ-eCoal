import { User } from "@/db";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Utils {
  token: string;
}

interface UserStore {
  user: (User & Utils) | null;
  setUser: (user: User & Utils) => void;
  logOut: () => void;
}

const useUser = create<UserStore>()(
  persist(
    (set, get) => ({
      user: null,
      setUser: user =>
        set(() => ({
          user,
        })),
      logOut: () => {
        set(() => ({
          user: null,
        }));
      },
    }),
    {
      name: "doremi-user",
    }
  )
);

export default useUser;
