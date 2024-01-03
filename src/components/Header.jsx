import React from "react";
import { NETFLIXLOGO } from "../utils/constant";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute z-10 flex justify-between items-center w-screen bg-transparent">
      <img className="w-[14rem]" src={NETFLIXLOGO} alt="logo" />
      <button
        className="bg-red-600 p-2 rounded-lg mr-10 text-white"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Header;
