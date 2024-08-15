import { create } from 'zustand';

type UserAuthStoreType = null | {};

type UserAuthTokenType = null | string;

type AuthStoreType = {
    token: UserAuthTokenType;
    user: UserAuthStoreType;
    isUserLoggedIn: boolean;
    logIn: (data: UserAuthStoreType) => void;
    logOut: () => void;
};

const tokenInitialValues: UserAuthTokenType = null;

const userInitialValues: UserAuthStoreType = null;

//https://starter.obytes.com/guides/authentication/

const useAuthStore = create<AuthStoreType>()((set, get) => ({
    token: tokenInitialValues,
    user: userInitialValues,
    isUserLoggedIn: false,
    logIn: (data) => {
        set({ token: 'abc123', user: { name: 'bob' }, isUserLoggedIn: true });
    },
    logOut: () => {
        set({ token: null, user: null, isUserLoggedIn: false });
    }
}));

export default useAuthStore;
