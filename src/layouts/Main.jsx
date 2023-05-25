import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Navbar></Navbar>
      <div className="container">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </main>
  );
};

export default Main;
