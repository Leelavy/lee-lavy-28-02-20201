import { getCurrentWeather } from '../../api/accuWeatherAPI';
import { showLoader, hideLoader, showErrorModal, hideErrorModal } from '../actions/appStatusActions';

export const addToFavorites = (city) => async (dispatch) => {
  dispatch({
    type: "ADD_CITY_TO_FAVORITES",
    payload: {
      favoriteCity: city,
    },
  });
}

export const loadFavoritesWeather = (favoriteCities) => async (dispatch) => {
  if (favoriteCities.length > 0) {
    dispatch(showLoader());
    try {
      const favoriteCitiesWeather = [];
      for (const city of favoriteCities) {
        const cityWeatherRes = await getCurrentWeather(city.Key, false);
        favoriteCitiesWeather.push(cityWeatherRes.data[0]);
      }
      dispatch({
        type: "FETCH_FAVORITES_WEATHER",
        payload: {
          favoriteCitiesWeather: favoriteCitiesWeather,
        },
      });
    } catch (e) {
      dispatch(showErrorModal(e.response.data.Message))
    }
    dispatch(hideLoader());
  }

}

export const updateFavorites = (favoriteCities) => async (dispatch) => {
  dispatch({
    type: "UPDATE_FAVORITES",
    payload: {
      favoriteCities: favoriteCities,
    },
  });
}