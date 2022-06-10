import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
// whenever new user signUp we usually store to the fireStore
// initialized an array just an empty arrray 
import {doc,setDoc} from 'firebase/firestore'

const AuthContext = createContext();
export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function signUp(email, password) {
     createUserWithEmailAndPassword(auth, email, password);
    //  automatically create in database user and email
    setDoc(doc(db,'users',email),{
      savedShows:[]
    })
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
