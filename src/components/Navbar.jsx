import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from "../contex/UserContex";

const Navbar = () => {
  const { user } = useContext(AuthContex);
  const navigate = useNavigate();
  return (
    <div className="navbar bg-neutral">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-600 rounded-box w-52 text-white"
          >
            <li>
              <Link className="hover:bg-blue-500 py-2" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:bg-blue-500 py-2" to="/orders">
                Orders
              </Link>
            </li>
            <li>
              <Link className="hover:bg-blue-500 py-2" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl  text-white">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  text-white">
          <li>
            <Link className="hover:bg-blue-500 py-2" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:bg-blue-500 py-2" to="/orders">
              Orders
            </Link>
          </li>
          <li>
            <Link className="hover:bg-blue-500 py-2" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <a className="btn text-white bg-blue-500 hover:bg-blue-600 py-2">
            Get started
          </a>
        ) : (
          <>
            <button onClick={()=> navigate("/login")} className="btn text-white bg-blue-500 hover:bg-blue-600 py-2">
              Login
            </button>{" "}
            <button onClick={()=> navigate("/register")} className="btn text-white bg-blue-500 hover:bg-blue-600 py-2">
              Sign Up
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
