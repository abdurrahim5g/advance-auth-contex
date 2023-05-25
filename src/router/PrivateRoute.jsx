import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContex } from "../contex/UserContex";
import Loading from "../components/Loading";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContex);

  if (loading) {
    return <Loading></Loading>;
  }

  if (user && user?.uid) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
