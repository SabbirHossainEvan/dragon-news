import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
export const AuthContext = createContext();


const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, SetUser] = useState(null);



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    } 

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscride = onAuthStateChanged(auth, (currentUser) => {
            SetUser(currentUser);
        });
        return () => {
            unsubscride();
        };
    },[]);

    const authData = {
        user,
        SetUser,
        createUser,
        logOut,
        signIn,
    };

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;