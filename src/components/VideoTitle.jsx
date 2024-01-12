import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute text-white w-1/3 px-4 bg-gray-900 bg-opacity-5 rounded-md transition duration-700 hover:bg-opacity-40 bottom-40 left-10">
      <div className=" ">
        <h2 className="text-5xl font-bold my-2">{title}</h2>
        <p className="text-lg font-semibold">{overview}</p>
        <div className="my-4 text-xl font-bold">
          <button className="px-12 py-4 w-18 bg-gray-100 text-gray-900 rounded-md opacity-40 hover:opacity-90 duration-300">
            ▶️ Play
          </button>
          <button className="px-12 py-4 w-18 bg-gray-900 ml-2 rounded-md opacity-50 hover:opacity-95 duration-300">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
