import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../App.css";

const MusicPlayer = () => {
  const currentSong = useSelector((state) => state.currentSong);
  const [isPlaying, setIsPlaying] = useState(false); // Stato per tenere traccia della riproduzione

  if (!currentSong) return null;

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying); // Inverte lo stato di isPlaying
    if (!isPlaying) {
      console.log("Play");
      // Logica per avviare la riproduzione della musica
    } else {
      console.log("Pause");
      // Logica per mettere in pausa la musica
    }
  };

  const handlePrev = () => {
    console.log("Previous song");
    // Logica per la canzone precedente
  };

  const handleNext = () => {
    console.log("Next song");
    // Logica per la prossima canzone
  };

  return (
    <div className="music-player">
      <div className="container-fluid fixed-bottom bg-container pt-1">
        <div className="row h-100">
          <div className="col-lg-10 offset-lg-2">
            <div className="row h-100 flex-column justify-content-center align-items-center">
              <div className="col-6 col-md-4 playerControls">
                <div className="d-flex justify-content-center align-items-center">
                  {/* Pulsante precedente */}
                  <button onClick={handlePrev} className="btn-control">
                    <i className="bi bi-caret-left"></i>
                  </button>
                  {/* Pulsante play/pause */}
                  <button
                    onClick={togglePlayPause}
                    className="btn-control centrale"
                  >
                    {isPlaying ? (
                      <i className="bi bi-pause-fill"></i>
                    ) : (
                      <i className="bi bi-play"></i>
                    )}
                  </button>
                  {/* Pulsante successivo */}
                  <button onClick={handleNext} className="btn-control">
                    <i className="bi bi-caret-right"></i>
                  </button>
                </div>
                <div className="progress mt-3">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "50%" }}
                  ></div>
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
