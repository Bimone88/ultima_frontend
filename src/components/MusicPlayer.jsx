import React from "react";
import { useSelector } from "react-redux";
import "../App.css";

const MusicPlayer = () => {
  const currentSong = useSelector((state) => state.currentSong);

  if (!currentSong) return null;

  return (
    <div className="music-player">
      <div className="container-fluid fixed-bottom bg-container pt-1">
        <div className="row h-100">
          <div className="col-lg-10 offset-lg-2">
            <div className="row h-100 flex-column justify-content-center align-items-center">
              <div className="col-6 col-md-4 playerControls">
                <div className="d-flex"></div>
                <div className="progress mt-3">
                  <div role="progressbar" style={{ width: "50%" }}></div>
                </div>
              </div>
              <div className="col-12 text-center">
                <p>
                  {currentSong.title} by {currentSong.artist.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
