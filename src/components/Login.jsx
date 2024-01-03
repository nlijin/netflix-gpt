import React, { useState, useRef } from "react";
import Header from "./Header";
import { LOGINBACKGROUNDIMAGE } from "../utils/constant";
import { validateData } from "../utils/validate";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const toggleLoginForm = () => {
    setIsSignIn(!isSignIn);
  };

  const name = useRef();
  const email = useRef();
  const password = useRef();

  const handleButtonClick = () => {
    // Validate the form data
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
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
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            className="w-full rounded-md outline-none text-white bg-neutral-700 my-2 p-3"
            placeholder="Name"
          />
        )}
        <input
          className="w-full rounded-md outline-none text-white bg-neutral-700 my-2 p-3"
          placeholder="enter your Email"
          type="email"
          ref={email}
        />
        <input
          className="w-full rounded-md outline-none text-white bg-neutral-700 my-2 p-3"
          placeholder="Password"
          type="password"
          ref={password}
        />
        <p className="text-md text-red-600 font-semibold">{errorMessage}</p>
        <button
          className="w-full rounded-md p-3 mt-8 border border-gray-700 bg-red-700 text-white"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="mt-16 text-white cursor-pointer"
          onClick={toggleLoginForm}
        >
          {isSignIn
            ? "New to Netflix? Sign Up now "
            : "Already a member! Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
