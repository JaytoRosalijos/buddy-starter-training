import { createContext, useContext, useEffect, useReducer } from "react";
import { AuthService } from "../services";
import { auth } from "../config/firebase";
import { User } from "firebase/auth";
import { errors } from "../constants/errors";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { storageKeys } from "../constants/storage-keys";

interface IUserContextState {
    user: User;
    isLoggedIn: boolean;
};

type UserActionType =
 | { type: "SET_AUTH", user: User }
 | { type: "LOG_OUT" };

interface AuthContextProps {
    state: IUserContextState;
    loginUser: (email: string, password: string) => Promise<void>;
    registerUser: (email: string, password: string) => Promise<void>;
    logoutUser: () => Promise<void>;
}

const initialState: IUserContextState = {
    user: {} as User,
    isLoggedIn: false,
};

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [authStorage, setAuthStorage] = useLocalStorage(storageKeys.AUTH, initialState);
    const [state, dispatch] = useReducer(userReducer, initialState, () => authStorage);
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user != null) {
                dispatch({ type: "SET_AUTH", user});
                setAuthStorage({ isLoggedIn: true, user });
            }
        });

        return () => unsubscribe();
    }, [setAuthStorage]);

    const loginUser = async (email: string, password: string): Promise<void> => {
        try {
            await AuthService.loginUser(email, password);
        } catch (error: any) {
            if (error.code === errors.auth.WRONG_PASSWORD.code)
                throw new Error(errors.auth.WRONG_PASSWORD.message);
            else if (error.code === errors.auth.USER_NOTFOUND.code)
                throw new Error(errors.auth.USER_NOTFOUND.message);
            else
                throw(error);
        }
    };

    const registerUser = async (email: string, password: string): Promise<void> => {
        try {
            await AuthService.registerUser(email, password);
        } catch (error: any) {
            if (error.code === errors.auth.EMAIL_ALREADY_IN_USED.code)
                throw new Error(errors.auth.EMAIL_ALREADY_IN_USED.message);
            else
                throw(error);
        }
    };

    const logoutUser = async () => {
        await AuthService.logoutUser();
        dispatch({ type: "LOG_OUT" });
        setAuthStorage(initialState);
    }

    return (
        <AuthContext.Provider value={{ state, loginUser, registerUser, logoutUser, }}>
            {children}
        </AuthContext.Provider>
    );
};

export const userReducer = (state: IUserContextState, action: UserActionType): IUserContextState => {
    switch (action.type) {
        case "SET_AUTH":
            return { ...state, isLoggedIn: true, user: action.user };
        case "LOG_OUT":
            return { ...state, isLoggedIn: false, user: {} as User };
        default:
            return state;
    }
}
