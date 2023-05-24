import { useContext, useState } from "react";
import { AuthContex } from "../contex/UserContex";
import { Link } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");

  const { LoginWithPass, setUser } = useContext(AuthContex);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;

    if (!email) {
      setError("Please enter your email!");
    } else if (!pass) {
      setError("Please enter your password!");
    } else if (email && pass) {
      // After passed all the condetion
      setError();
      LoginWithPass(email, pass)
        .then((result) => {
          console.log(result);
          setUser(result.user);
        })
        .catch((error) => {
          setError(error.code);
          console.log(error.code);
        });
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-700">
          Login
        </h1>
        <form className="space-y-4" onSubmit={handleLogin}>
          {error && (
            <div className="error mt-4">
              <div className="alert alert-warning shadow-lg">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <span>{error}</span>
                </div>
              </div>
            </div>
          )}

          <div>
            <label className="label">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              name="pass"
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered"
            />
          </div>
          <a
            href="#"
            className="text-xs text-gray-600 hover:underline hover:text-blue-600"
          >
            Forget Password?
          </a>
          <div>
            <button className="btn btn-block">Login</button>
          </div>

          <span>
            Do not have account?{" "}
            <Link
              to="/register"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Create an account
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
