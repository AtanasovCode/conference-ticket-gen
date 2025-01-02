import { create } from "zustand"

export const useConfStore = create((set, get) => ({
  profilePhoto: "",
  setProfilePhoto: (profilePhoto) => set({ profilePhoto }),
  photoTooLarge: false,
  setPhotoTooLarge: (value) => set({ photoTooLarge: value }),

  fullName: "",
  setFullName: (fullName) => set({ fullName }),

  email: "",
  setEmail: (email) => set({ email }),

  githubUsername: "",
  setGithubUsername: (githubUsername) => set({ githubUsername }),

  errors: {
    photo: false,
    name: false,
    email: false,
    invalidEmail: false,
    username: false,
  },

  isEmailInvalid: (email) => {
    // returns true if email is invalid and false if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailRegex.test(email);
  },

  checkInputs: () => {
    const {
      fullName,
      email,
      profilePhoto,
      githubUsername,
      isEmailInvalid,
    } = get();

    const updatedErrors = {
      photo: profilePhoto === "",
      name: fullName === "",
      email: email === "",
      invalidEmail: isEmailInvalid(email),
      username: githubUsername === "",
    };

    set((state) => ({ ...state, errors: updatedErrors }));

    // return true if all inputs are valid
    return Object.values(updatedErrors).every((error) => !error);
  },

  loading: false,
  setLoading: (loading) => set({ loading }),
}))