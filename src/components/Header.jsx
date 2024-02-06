import React, { useEffect } from "react";
import { NETFLIXLOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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

  const handleGPTSearchClick = () => {
    //toggle gpt search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute z-10 flex justify-between items-center w-screen bg-transparent">
      <img className="w-[14rem]" src={NETFLIXLOGO} alt="logo" />
      {user && (
        <div className="flex gap-2 mr-4 items-center">
          {showGptSearch && (
            <select
              className="p-3 m-3 bg-slate-600 font-semibold text-gray-100 rounded-md"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-white font-semibold bg-red-700 px-2 py-3 rounded-md"
            onClick={handleGPTSearchClick}
          >
            {showGptSearch ? "Home page" : "GPT Search"}
          </button>
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
