import { createUserWithEmailAndPassword, UserCredential,  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const loginUser = (email: string, password: string): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email, password);
}

const registerUser = (email: string, password: string): Promise<UserCredential> => {
    return createUserWithEmailAndPassword (auth, email, password);
}

const logoutUser = async () => {
    return auth.signOut();
}

export const AuthService = {
    loginUser,
    registerUser,
    logoutUser,
}
