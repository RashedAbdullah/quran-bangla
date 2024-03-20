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
      <div className="font-Siliguri flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-screen bg-gradient-to-br from-[#E3FFFB] to-[#E8F3F1] shadow-md text-slate-900">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-400">
            পাসওয়ার্ড রিসেট করুন
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSignInForm}
            className="space-y-5 bg-gradient-to-bl bg-blur-lg shadow-lg p-10 rounded-lg"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                ইমেইল
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition"
              >
                রিসেট
              </button>
            </div>
          </form>
          <p className="mt-5 text-center text-sm text-gray-500">
            একাউন্ট নেই?{" "}
            <NavLink
              to="/signup"
              href="#"
              className="font-semibold leading-6 text-teal-600 hover:text-teal-500"
            >
              ক্রিয়েট করুন!
            </NavLink>
          </p>
        </div>

        <div className="flex justify-center gap-3 pt-2">
          <button
            onClick={() => navigate(-1)}
            className=" border border-teal-600 text-teal-900 py-1 px-4 rounded"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={() => navigate("/")}
            className=" border border-teal-600 text-teal-900 py-1 px-4 rounded"
          >
            <TbHomeMove />
          </button>
        </div>
      </div>
    </>
  );
};

export default Reset;
