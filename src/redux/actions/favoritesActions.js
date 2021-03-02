import axios from 'axios';
import { dummyCurrentWeatherURL } from '../../api/accuWeatherAPI';

export const addToFavorites = (city) => async (dispatch) => {
  dispatch({
    type: "ADD_CITY_TO_FAVORITES",
    payload: {
      favoriteCity: city,
    },
  });
}

export const loadFavoritesWeather = (favoriteCities) => async (dispatch) => {
  const favoriteCitiesWeather = [];
  favoriteCities.forEach(city => {
    const cityWeather = dummyCurrentWeatherURL()[0];
    favoriteCitiesWeather.push(cityWeather);
  })
  dispatch({
    type: "FETCH_FAVORITES_WEATHER",
    payload: {
      favoriteCitiesWeather: favoriteCitiesWeather,
    },
  });
}

export const updateFavorites = (favoriteCities) => async (dispatch) => {
  dispatch({
    type: "UPDATE_FAVORITES",
    payload: {
      favoriteCities: favoriteCities,
    },
  });
}