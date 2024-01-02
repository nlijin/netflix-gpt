import React from "react";
import { NETFLIXLOGO } from "../utils/constant";

const Header = () => {
  return (
    <div className="absolute z-10 ml-4">
      <img className="w-[14rem]" src={NETFLIXLOGO} alt="logo" />
    </div>
  );
};

export default Header;
