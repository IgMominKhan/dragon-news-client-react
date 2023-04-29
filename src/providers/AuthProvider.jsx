import { createContext, useState, useEffect } from "react";
import auth from "../firebase/firebase.config.jsx";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true);

  // ovserve auth state change
  useEffect(() => {
    const unsubscribeToken = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
      console.log(currentUser);
    });

    return unsubscribeToken();
  }, []);

  // register users
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login users
  function loginUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const authInfo = {
    name: "igmminkhn",
    user,
    isLoading,
    setIsLoading,
    setUser,
    registerUser,
    loginUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
