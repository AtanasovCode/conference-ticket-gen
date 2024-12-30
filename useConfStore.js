import { create } from "zustand" 

export const useConfStore = create((set) => ({
  profilePhoto: "",
  setProfilePhoto: (profilePhoto) => set({ profilePhoto }),
  photoErr: false,
  setPhotoErr: (value) => set({ photoErr: value }),

  fullName: "",
  setFullName: (fullName) => set({ fullName }),
  nameErr: false,
  setNameErr: (value) => set({ nameErr: value }),

  email: "",
  setEmail: (email) => set({ email }),
  emailErr: false,
  setEmailErr: (value) => set({ emailErr: value }),
  
  githubUsername: "",
  setGithubUsername: (githubUsername) => set({ githubUsername }),
  githubErr: false,
  setGithubErr: (value) => set({ githubErr: value }),

  loading: false,
  setLoading: (loading) => set({ loading }),
}))