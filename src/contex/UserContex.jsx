import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContex = createContext({});
// export const useAuthContex = useContext(AuthContex);

// eslint-disable-next-line react/prop-types
const UserContex = ({ children }) => {
  const [user, setUser] = useState({
    name: "Abdur Rahim",
  });

  const auth = getAuth(app);

  const SignUp = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const LoginWithPass = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const loginWithPopup = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Authstate changed", currentUser);
    });

    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const AuthInfo = {
    user,
    setUser,
    auth,
    SignUp,
    LoginWithPass,
    loginWithPopup,
    logOut,
  };

  return <AuthContex.Provider value={AuthInfo}>{children}</AuthContex.Provider>;
};

export default UserContex;
