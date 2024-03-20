/* eslint-disable react/no-unescaped-entities */
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { TbHomeMove } from "react-icons/tb";
import { signInWithEmail } from "../firebase/firebase";
import GoogleFacebook from "./googleFacebook";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignInForm = async (inputData) => {
    try {
      await signInWithEmail(inputData.email, inputData.password);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <div className="font-Siliguri flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-screen bg-gradient-to-br from-[#E3FFFB] to-[#E8F3F1] shadow-md text-slate-900">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-400">
            সাইন ইন করুন!
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit(handleSignInForm)}
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
                  {...register("email", { required: "Email is required" })}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={`${
                    errors.email ? "focus:ring-red-600" : ""
                  } p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6`}
                />
                {errors && (
                  <p className="text-red-600 text-sm">
                    {errors.email?.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  পাসওয়ার্ড
                </label>
                <div className="text-sm">
                  <NavLink
                    to="/reset"
                    className="font-semibold text-teal-500 hover:text-teal-500"
                  >
                    পাসওয়ার্ড স্মরণ নেই?
                  </NavLink>
                </div>
              </div>
              <div className="mt-2">
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className={`${
                    errors.password ? "focus:ring-red-600" : ""
                  } p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6`}
                />
                {errors && (
                  <p className="text-red-600 text-sm">
                    {errors.password?.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-400 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                সাইন ইন
              </button>
            </div>
          </form>

          <GoogleFacebook />

          <p className="mt-5 text-center text-sm text-gray-500">
            একাউন্ট নেই?{" "}
            <NavLink
              to="/signup"
              href="#"
              className="font-semibold leading-6 text-teal-600 hover:text-teal-400 transition"
            >
              ক্রিয়েট করুন
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

export default SignIn;
