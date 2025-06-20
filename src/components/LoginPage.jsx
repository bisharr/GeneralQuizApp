import React, { use, useContext, useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { auth, googleProvider } from "../config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

function LoginPage() {
  const [formVisible, setFormVisible] = useState(false);
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
      setError("Failed to sign in with Google.");
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
      setError("Email/password login failed.");
    }

    e.target.reset();
  };

  useEffect(() => {
    setTimeout(() => {
      setFormVisible(true);
    }, 1000);
  }, []);
  console.log("LoginPage rendered");
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-500 via-gray-700 to-gray-900 px-4 ">
      <div
        className={` relative paddingMrgin bg-gray-800 text-white shadow-lg rounded-lg p-10  max-w-md w-full border border-b-gray-700 hover:shadow-[0_0_25px_5px_rgba(56,140,248,1)] transition duration-300 ${
          formVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 paddingMrgin"
        } transform transition-all duration-500 ease-out`}
      >
        <h2 className="text-[16px] font-bold text-center mb-4">Welcome Back</h2>
        <p className="text-gray-400 text-center mb-6">Login to Your Account</p>
        {error && (
          <p className="bg-red-500 text-center  p-2 rounded mb-4">{error}</p>
        )}
        <form onSubmit={handleEmailLogin} className=" space-y-6">
          <div>
            <label
              htmlFor="email"
              className=" block text-gray-100 font-medium mb-1"
            >
              Email Address
            </label>
            <input
              className="w-full  border border-b border-gray-600 rounded-sm text-white focus:border-cyan-400 focus:outline-none paddingMrgin"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className=" block text-gray-100 font-medium mb-1"
            >
              password
            </label>
            <input
              className="w-full  border border-b border-gray-600  text-white rounded-sm focus:border-cyan-400 focus:outline-none paddingMrgin"
              type={passwordVisible ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter Your Password"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className=" absolute text-2xl right-11 top-8 translate-y-[50%] text-gray-400 hover:text-cyan-400 focus:outline-none"
            >
              {passwordVisible ? (
                <AiOutlineEyeInvisible className="h-5 w-5" />
              ) : (
                <AiOutlineEye className="h-5 w-5" />
              )}
            </button>

            <button
              className="w-full bg-gradient-to-r from-cyan-500 paddingMrgin to-blue-500 text-white py-2 rounded-lg hover:bg-gradient-to-l hover:from-cyan-600 hover:to-blue-600 transition-all  duration-300 focus:outline-none focus:ring focus:ring-cyan-300 focus:ring-opacity-50 shadow-md hover:shadow-lg"
              type="submit"
            >
              Login
            </button>
            {/* Diveder */}
            <div className="mt-8 flex items-center justify-between ">
              <span className=" border-b w-1/4 border-gray-600 "></span>
              <span className=" text-gray-400 text-sm ">Or</span>
              <span className="border-b w-1/4 border-gray-600"></span>
            </div>
            {/* Google Button */}
            <button
              onClick={handleGoogleLogin}
              className=" buttongoogle gap-1 flex justify-center text-center mt-6 w-full items-center bg-gray-700 border border-gray-600 hover:shadow-lg transition-all duration-300 focus:ring focus:ring-cyan-300 focus:outline-none  "
            >
              <FcGoogle className=" text-center h-6 w-6 mr-3" />
              continue with Google
            </button>
            <p className="text-center text-gray-400 text-sm mt-6 buttongoogle ">
              Don't have an account?{" "}
              <a href="#" className="text-cyan-400 hover:underline font-medium">
                Signup Now
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
