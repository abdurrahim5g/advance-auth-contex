import { createContext, useState } from "react";

export const AuthContex = createContext({});
// export const useAuthContex = useContext(AuthContex);

// eslint-disable-next-line react/prop-types
const UserContex = ({ children }) => {
  const [user, setUser] = useState({
    name: "Abdur Rahim",
  });
  const AuthInfo = { user, setUser };
  return <AuthContex.Provider value={AuthInfo}>{children}</AuthContex.Provider>;
};

export default UserContex;
