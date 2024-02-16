// Azione per selezionare una canzone
export const selectSong = (song) => {
  console.log("Selected song:", song);
  return {
    type: "SELECT_SONG",
    payload: song,
  };
};

// Azione per mettere o togliere il "mi piace" da una canzone
export const toggleLikeSong = (songId) => {
  return {
    type: "TOGGLE_LIKE_SONG",
    payload: songId,
  };
};

// Azione per impostare l'elenco delle canzoni
export const setSongs = (songs) => {
  return {
    type: "SET_SONGS",
    payload: songs,
  };
};
