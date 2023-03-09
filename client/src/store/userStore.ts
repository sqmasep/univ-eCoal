import { User } from "@/db";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Utils {
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
        console.log("logout!");
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
