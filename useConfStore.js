import { create } from "zustand" 

export const useStore = create((set) => ({
  profilePhoto: "",
  setProfilePhoto: (profilePhoto) => set({ profilePhoto }),
  fullName: "",
  setFullName: (fullName) => set({ fullName }),
  email: "",
  setEmail: (email) => set({ email }),
  githubUsername: "",
  setGithubUsername: (githubUsername) => set({ githubUsername }),
}))