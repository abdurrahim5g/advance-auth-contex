import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../contex/UserContex";

const Register = () => {
  const { SignUp, setUser } = useContext(AuthContex);

  const [error, setError] = useState();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const pass = form.pass.value;
    const cPass = form.cPass.value;

    if (!name) {
      setError("Please input your name");
    } else if (!email) {
      setError("Please input a valide email address!");
    } else if (!pass || pass.length <= 5) {
      setError("Password at least contain 6 cherecter!");
    } else if (!cPass || cPass.length <= 5) {
      setError("Confirm password at least contain 6 cherecter!");
    } else if (pass !== cPass) {
      setError("Password & Confirm Password  dosen't  metch!");
    } else if (name && email && pass && cPass) {
      // all validation  was passed
      setError();
      SignUp(email, pass)
        .then((result) => setUser(result.user))
        .catch((error) => setError(error.code));
    }
  };

  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-700">
          Sign Up
        </h1>
        <form className="space-y-4" onSubmit={handleRegister}>
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
              <span className="text-base label-text">Name</span>
            </label>
            <input
              // required
              name="name"
              type="text"
              placeholder="Name"
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              // required
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
              // required
              name="pass"
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              // required
              name="cPass"
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <button className="btn btn-block">Sign Up</button>
          </div>
          <span>
            Already have an account ?
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
