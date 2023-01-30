import { createContext, useContext, useReducer } from "react";

type User = {
    email: "";
    password?: "";
}

interface IUserContextState {
    user: User;
    isLoggedIn: boolean;
};

type UserActionType =
 | { type: "LOG_IN", user: User }
 | { type: "REGISTER", user: User }
 | { type: "LOG_OUT" };

interface UserContextProps {
    state: IUserContextState;
    dispatch: React.Dispatch<UserActionType>;
}

const initialState: IUserContextState = {
    user: {} as User,
    isLoggedIn: false,
};

export const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};

export const userReducer = (state: IUserContextState, action: UserActionType): IUserContextState => {
    switch (action.type) {
        case "LOG_IN":
            // TODO: Implement log in logic
            
            return state;
        case "REGISTER":
            // TODO: Implement register logic

            return state;
        case "LOG_OUT":
            // TODO: Implement delete logic

            return state;
        default:
            return state;
    }
  }
  