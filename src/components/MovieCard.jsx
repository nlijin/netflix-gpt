import React from "react";
import { POSTER_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterpath }) => {
  return (
    <div className="w-48">
      <img src={POSTER_CDN_URL + posterpath} alt="movie poster" />
    </div>
  );
};

export default MovieCard;
