import { create } from "zustand";
export const useUserStore = create((set) => ({
    user: {
        img: "",
        name: "",
        username: "",
        profileUrl: ""
    },
    setUser: (user) => set({ user }),
    
}))
