import { NavLink, useNavigate } from "react-router-dom";
import { signupWithEmailAndPassword } from "../firebase/firebase";
import GoogleFacebook from "./googleFacebook";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSubmitForm = async (formData) => {
    try {
      await signupWithEmailAndPassword(formData.email, formData.password);
      navigate("/signin");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="h-screen font-Siliguri flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8 bg-gradient-to-br from-[#E3FFFB] to-[#E8F3F1] shadow-md text-slate-900">
        <GoogleFacebook />

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-500">
            একাউন্ট তৈরি করুন
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit(handleSubmitForm)}
            className="space-y-5 bg-gradient-to-bl bg-blur-lg shadow-lg p-10 rounded-lg"
          >
            <div>
              <label
                htmlFor="fname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                নামের প্রথমাংশ
              </label>

              <input
                {...register("fname", { required: "First Name is required" })}
                id="fname"
                name="fname"
                type="text"
                autoComplete="fname"
                placeholder="নামের প্রথমাংশ"
                className={`${
                  errors.fname ? "focus:ring-red-600" : ""
                } p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6`}
              />
              {errors && (
                <p className="text-red-600 text-sm">{errors.fname?.message}</p>
              )}
              <label
                htmlFor="lname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                নামের শেষাংশ
              </label>

              <input
                {...register("lname", { required: "Last Name is required" })}
                id="lname"
                name="lname"
                type="text"
                autoComplete="lname"
                placeholder="নামের শেষাংশ"
                className={`${
                  errors.lname ? "focus:ring-red-600" : ""
                } p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6`}
              />
              {errors && (
                <p className="text-red-600 text-sm">{errors.lname?.message}</p>
              )}
            </div>
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
                  placeholder="ইমেইল"
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
              </div>
              <div className="mt-1">
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
                  placeholder="পাসওয়ার্ড"
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
                className="flex w-full justify-center rounded-md bg-teal-600 px-1 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition"
              >
                সাইন আপ
              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-sm text-gray-500">
            অলরেডি একাউন্ট আছে?{" "}
            <NavLink
              to="/signin"
              href="#"
              className="font-semibold leading-6 text-teal-600 hover:text-teal-500 transition"
            >
              সাইন ইন
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
