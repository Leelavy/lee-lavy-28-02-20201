import axios from 'axios';

export const addToFavorites = (currentWeather) => async (dispatch) => {
  dispatch({
    type: "ADD_TO_FAVORITES",
    payload: {
      favoriteToAdd: currentWeather,
    },
  });
}