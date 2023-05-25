import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
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

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        console.log("User signout");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const AuthInfo = { user, setUser, auth, SignUp, LoginWithPass };

  return <AuthContex.Provider value={AuthInfo}>{children}</AuthContex.Provider>;
};

export default UserContex;
