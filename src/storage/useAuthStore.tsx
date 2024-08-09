import create from "zustand";

import { persist } from "zustand/middleware";

export type UserData = {
    id?: number;
    nickname?: string;
    email?: string;
    profile?: string;
    role?: string;
    registerType?: string;
};

type AuthStore = {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
    userData: UserData;
    setUserData: (userData: Partial<UserData>) => void;
    setUserDataValue: (key: keyof UserData, value: any) => void;
    accessToken?: string;
    setAccessToken: (accessToken: string) => void;
    refreshToken?: string;
    setRefreshToken: (refreshToken: string) => void;
};

const useAuthStore = create(
    persist<AuthStore>(
        (set) => ({
            isLoggedIn: false,
            login: () => set({ isLoggedIn: true }),
            logout: () =>
                set({
                    isLoggedIn: false,
                    userData: {},
                    accessToken: "",
                    refreshToken: "",
                }),
            userData: {},
            setUserData: (userData) => set({ userData }),
            setUserDataValue: (key, value) =>
                set((state) => ({
                    userData: {
                        ...state.userData,
                        [key]: value,
                    },
                })),
            accessToken: "",
            setAccessToken: (accessToken) => set({ accessToken }),
            refreshToken: "",
            setRefreshToken: (refreshToken) => set({ refreshToken }),
        }),
        {
            name: "userInfoStorage",
        }
    )
);

export default useAuthStore;
