import React from "react";
import ReactPlayer from "react-player";
import "./index.css";

const Video = () => {
  return (
    <div className="video-container">
      <ReactPlayer
        url="https://youtu.be/S2Y4lshuqAc"
        style={{ marginTop: "20px", marginLeft: "10px", marginRight: "10px" }}
      />
    </div>
  );
};

export default Video;
