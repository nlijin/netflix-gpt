import React, { useEffect } from "react";
import { NETFLIXLOGO } from "../utils/constant";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute z-10 flex justify-between items-center w-screen bg-transparent">
      <img className="w-[14rem]" src={NETFLIXLOGO} alt="logo" />
      {user && (
        <div className="flex gap-2 mr-4 ">
          <img
            src={user.photoURL}
            alt="silhoute of a person"
            className="w-12 h-12 rounded-full"
          />
          {/* <p>{user ? user.displayName : "No displayName"}</p> */}
          <button
            className="p-2 rounded-lg mr-10 text-white"
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
