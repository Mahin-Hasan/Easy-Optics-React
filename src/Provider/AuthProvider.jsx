import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import auth from "../config/firebaseConfig";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {
    //google login 
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    //sign up
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const user = 'Mahin'
    const authentications = {
        googleLogin,
        createUser
    }





    return (
        <AuthContext.Provider value={authentications}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;