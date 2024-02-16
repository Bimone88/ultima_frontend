import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSongs, selectSong, toggleLikeSong } from "../redux/actions";
import AlbumCard from "./AlbumCard";
import MusicPlayer from "./MusicPlayer";
import axios from "axios";

const HomePage = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);
  const likedSongs = useSelector((state) => state.likedSongs);
  const currentSong = useSelector((state) => state.currentSong);

  useEffect(() => {
    const fetchSongs = async (artistName) => {
      try {
        const response = await axios.get(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`
        );
        dispatch(setSongs(response.data.data));
      } catch (error) {
        console.error("Error in fetching songs", error);
      }
    };

    fetchSongs("queen");
  }, [dispatch]);

  console.log("Songs:", songs);

  const handleSelect = (song) => {
    dispatch(selectSong(song));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {songs.map((song) => (
          <AlbumCard
            key={song.id}
            song={song}
            isLiked={likedSongs[song.id]}
            onLike={() => dispatch(toggleLikeSong(song.id))}
            onSelect={() => handleSelect(song)}
            isCurrent={currentSong && currentSong.id === song.id}
          />
        ))}
      </div>
      <MusicPlayer />
    </div>
  );
};

export default HomePage;
