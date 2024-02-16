import React from "react";
import { useDispatch } from "react-redux";
import { toggleLikeSong } from "../redux/actions";
import "bootstrap/dist/css/bootstrap.min.css";

const AlbumCard = ({ song, isLiked, onSelect, isCurrent }) => {
  const dispatch = useDispatch();

  const handleLikeClick = () => {
    dispatch(toggleLikeSong(song.id));
  };

  return (
    <div className="col text-center">
      <img
        className="img-fluid"
        src={song.album.cover_medium}
        alt="track"
        onClick={() => onSelect(song)}
        style={{ cursor: "pointer" }}
      />
      <p style={{ color: isCurrent ? "#00FF00" : "#FFFFFF" }}>
        Track: "{song.title}"<br />
        Artist: {song.artist.name}
      </p>
      <button onClick={handleLikeClick}>
        <i
          className={isLiked ? "bi bi-suit-heart-fill" : "bi bi-suit-heart"}
        ></i>
      </button>
    </div>
  );
};

export default AlbumCard;
