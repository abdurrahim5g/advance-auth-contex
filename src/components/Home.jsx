import { useContext } from "react";
import { AuthContex } from "../contex/UserContex";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user, logOut } = useContext(AuthContex);

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => navigate("/login"))
      .catch(() => console.log("Logout failed ⚠"));
  };

  return (
    <div className="home-component my-10 text-center">
      {user?.uid && (
        <h2 className="text-3xl text-bold text-center ">
          User Email: {user.email}
        </h2>
      )}
      {user?.uid && (
        <button className="btn mt-10" onClick={handleLogOut}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Home;
