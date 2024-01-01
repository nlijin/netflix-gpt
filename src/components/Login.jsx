import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signIn, setSignIn] = useState(true);

  const toggleLoginForm = () => {
    setSignIn(!signIn);
  };

  return (
    <div className="relative">
      <Header />
      <div className="brightness-50">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute  w-3/12 h-3/5 mx-auto px-20 py-10 bg-black bg-opacity-70 text-gray-600 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
        <p className="my-2">
          {signIn ? "Already a member! " : "New to Netflix? "}
          <button onClick={toggleLoginForm} className="text-white">
            {signIn ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
