import React from "react";
import { useDispatch } from "react-redux";
import { toggleLikeSong } from "../redux/actions";

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill={isLiked ? "red" : "white"}
          className="bi bi-heart"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 1.314c2.21-3.166 7.497 2.228 0 5.312-7.497-3.084-2.21-8.478 0-5.312zm0 1.414c-1.21-1.737-4.668-.098-4.668 2.657C3.332 7.893 5.299 9.905 8 12c2.701-2.095 4.668-4.107 4.668-6.615 0-2.755-3.458-4.394-4.668-2.657z"
          />
        </svg>
      </button>
    </div>
  );
};

export default AlbumCard;
