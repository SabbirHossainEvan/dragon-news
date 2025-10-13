// import React, { useEffect, useState } from 'react';
// import { createContext } from 'react';
// import app from '../firebase/firebase.config';
// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// export const AuthContext = createContext();


// const auth = getAuth(app);
// const AuthProvider = ({ children }) => {
//     const [user, SetUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     console.log(loading, user);


//     const createUser = (email, password) => {
//         setLoading(true)
//         return createUserWithEmailAndPassword(auth, email, password);
//     };

//     const signIn = (email, password) =>{
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password);
//     } 

//     const logOut = () => {
//         return signOut(auth);
//     }

//     useEffect(() => {
//         const unsubscride = onAuthStateChanged(auth, (currentUser) => {
//             SetUser(currentUser);
//             setLoading(false);
//         });
//         return () => {
//             unsubscride();
//         };
//     },[]);

//     const authData = {
//         user,
//         SetUser,
//         createUser,
//         logOut,
//         signIn,
//         loading,
//         setLoading,
//     };


//     return (
//         <AuthContext.Provider value={authData}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;


import React, { useEffect, useState, createContext } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut, updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(loading, user);

  // ✅ Register
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ✅ Login
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  }

  // ✅ Logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // ✅ Track user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // ✅ Context value
  const authData = {
    user,
    setUser,
    createUser,
    signIn,
    logOut,
    loading,
    setLoading,
    updateUser,
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
