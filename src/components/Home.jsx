import { useContext } from "react";
import { AuthContex } from "../contex/UserContex";

const Home = () => {
  const { user } = useContext(AuthContex);
  return (
    <div className="home-component my-10 text-center">
      {user?.uid && (
        <h2 className="text-3xl text-bold text-center ">
          User Email: {user.email}
        </h2>
      )}
      {user?.uid && <button className="btn mt-10">Logout</button>}
    </div>
  );
};

export default Home;
