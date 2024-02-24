/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { TbHomeMove } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";
import { resetPassword } from "../firebase/firebase";

const Reset = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSignInForm = async (e) => {
    e.preventDefault();
    resetPassword(email);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Reset your password
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSignInForm} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Reset
              </button>
            </div>
          </form>
          <p className="mt-5 text-center text-sm text-gray-500">
            Haven't accont?{" "}
            <NavLink
              to="/signup"
              href="#"
              className="font-semibold leading-6 text-green-600 hover:text-indigo-500"
            >
              Create account
            </NavLink>
          </p>
        </div>

        <div className="flex justify-center gap-3 pt-2">
          <button
            onClick={() => navigate(-1)}
            className=" border border-green-600 text-green-900 py-1 px-4 rounded"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={() => navigate("/")}
            className=" border border-green-600 text-green-900 py-1 px-4 rounded"
          >
            <TbHomeMove />
          </button>
        </div>
      </div>
    </>
  );
};

export default Reset;
