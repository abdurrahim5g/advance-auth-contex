import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContex } from "../contex/UserContex";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContex);

  if (user && user?.uid) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
