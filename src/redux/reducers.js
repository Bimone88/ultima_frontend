const initialState = {
  currentSong: null,
  likedSongs: {},
  songs: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SELECT_SONG":
      console.log("Selected song:", action.payload);
      return { ...state, currentSong: action.payload };
    case "TOGGLE_LIKE_SONG":
      return {
        ...state,
        likedSongs: {
          ...state.likedSongs,
          [action.payload]: !state.likedSongs[action.payload],
        },
      };
    case "SET_SONGS":
      return { ...state, songs: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
