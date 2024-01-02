import React, { useState } from "react";
import Header from "./Header";
import { LOGINBACKGROUNDIMAGE } from "../utils/constant";

const Login = () => {
  const [signIn, setSignIn] = useState(true);

  const toggleLoginForm = () => {
    setSignIn(!signIn);
  };

  return (
    <div className="relative">
      <Header />
      <div className="brightness-50 bg-cover">
        <img src={LOGINBACKGROUNDIMAGE} alt="netflix background" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute  w-[28rem] h-4/6 px-16 py-10 bg-black bg-opacity-80 text-gray-600 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%]"
      >
        <h2 className="text-3xl font-medium my-8 text-white">
          {signIn ? "Sign In" : "Sign Up"}
        </h2>
        {!signIn && (
          <input
            className="w-full rounded-md outline-none text-white bg-neutral-700 my-2 p-3"
            placeholder="Name"
          ></input>
        )}
        <input
          className="w-full rounded-md outline-none text-white bg-neutral-700 my-2 p-3"
          placeholder="Email or phone number"
        ></input>
        <input
          className="w-full rounded-md outline-none text-white bg-neutral-700 my-2 p-3"
          placeholder="Password"
        ></input>
        <button className="w-full rounded-md p-3 mt-8 border border-gray-700 bg-red-700 text-white">
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="mt-16">
          {signIn ? "New to Netflix? " : "Already a member! "}
          <button onClick={toggleLoginForm} className="text-white">
            {signIn ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
