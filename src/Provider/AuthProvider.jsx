import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../config/firebaseConfig";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();




const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})//can be set null
    const [loading, setLoading] = useState(true);


    //google login 
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }
    //sign up
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //sign in
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleUpdateProfile = (name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL:photo
        })
    }
    //singout 
    const logOut = () => {
        return signOut(auth)
    }

    //hold log in user status || using observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
    }, [])
    console.log(user);


    const authentications = {
        googleLogin,
        createUser,
        signIn,
        logOut,
        user,
        loading,
        githubLogin,
        handleUpdateProfile
    }





    return (
        <AuthContext.Provider value={authentications}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;