import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { auth, db, googleProvider } from "../config";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import ForgotPassword from "./ForgotPassword";

function LoginPage({ switchToSignup, switchToForgot }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function onChange(e) {
    setFormData((previous) => ({
      ...previous,
      [e.target.id]: e.target.value,
    }));
  }
  const { email, password } = formData;
  const [formVisible, setFormVisible] = useState(false);
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log(user);
      const userData = {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        timestamp: serverTimestamp(),
      };

      await setDoc(doc(db, "users", user.uid), userData);
    } catch (error) {
      console.error(error);
      setError("Failed to sign in with Google.");
    }
  };
  // Onsign in function
  async function OnSignInClick(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Signed in user:", userCredential.user);

      if (userCredential.user) {
        console.log("calling toast");
        toast.success("Sign in successful");
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      toast.error("something went wrong", error);
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setFormVisible(true);
    }, 1000);
  }, []);

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
        <form onSubmit={OnSignInClick} className=" space-y-6">
          <div>
            <label
              htmlFor="email"
              className=" block text-gray-100 font-medium mb-1"
            >
              Email Address
            </label>
            <input
              onChange={onChange}
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
              onChange={onChange}
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
              className="w-full bg-gradient-to-r cursor-pointer from-cyan-500 paddingMrgin to-blue-500 text-white py-2 rounded-lg hover:bg-gradient-to-l hover:from-cyan-600 hover:to-blue-600 transition-all  duration-300 focus:outline-none focus:ring focus:ring-cyan-300 focus:ring-opacity-50 shadow-md hover:shadow-lg"
              type="submit"
            >
              Login
            </button>
            <div className=" flex justify-end">
              <button
                type="button"
                onClick={switchToForgot}
                className="text-white  bg-red-500 hover:bg-red-600 buttongoogle cursor-pointer  rounded text-sm font-medium "
              >
                Forgot Password?
              </button>
            </div>

            {/* Diveder */}
            <div className="mt-8 flex items-center justify-between ">
              <span className=" border-b w-1/4 border-gray-600 "></span>
              <span className=" text-gray-400 text-sm ">Or</span>
              <span className="border-b w-1/4 border-gray-600"></span>
            </div>
            {/* Google Button */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className=" buttongoogle gap-1 flex  cursor-pointer justify-center text-center mt-6 w-full items-center bg-gray-700 border border-gray-600 hover:shadow-lg transition-all duration-300 focus:ring focus:ring-cyan-300 focus:outline-none  "
            >
              <FcGoogle className=" text-center h-6 w-6 mr-3" />
              continue with Google
            </button>
            <p className="text-center text-gray-400 text-sm mt-6 buttongoogle ">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={switchToSignup}
                className="text-cyan-400 hover:underline font-medium  cursor-pointer"
              >
                Signup Now
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
