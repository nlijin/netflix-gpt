import React from "react";
import { NETFLIXLOGO } from "../utils/constant";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user);
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
      {user && (
        <div className="flex gap-2 mr-4">
          <img
            src={user.photoURL}
            alt="profile picture"
            className="w-12 h-12"
          />
          <p>{user ? user.displayName : "No displayName"}</p>
          <button
            className="bg-red-600 p-2 rounded-lg mr-10 text-white"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
