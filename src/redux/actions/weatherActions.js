import axios from 'axios';
import {
  autocompleteURL,
  currentWeatherURL,
  fiveDaysWeatherURL,
  getCityByLocation,
} from '../../api/accuWeatherAPI';

export const loadAutoComplete = (q) => async (dispatch) => {
  if (q) {
    try {
      const autocompleteRes = await axios.get(autocompleteURL(q));
      dispatch({
        type: "FETCH_AUTOCOMPLETE",
        payload: {
          autocomplete: autocompleteRes.data,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }
};

export const loadCurrentWeather = (city) => async (dispatch) => {
  if (city) {
    const currentWeatherRes = await axios.get(currentWeatherURL(city.Key, true));
    const fiveDaysWeatherRes = await axios.get(fiveDaysWeatherURL(city.Key, false, true));
    dispatch({
      type: "FETCH_CURRENT_WEATHER",
      payload: {
        currentWeather: currentWeatherRes.data,
        fiveDaysWeather: fiveDaysWeatherRes.data,
        currentCity: city,
      },
    });
  }
};

export const loadFiveDaysWeather = (city) => async (dispatch) => {
  if (city) {
    const fiveDaysWeatherRes = await axios.get(fiveDaysWeatherURL(city.Key, false, true));
    dispatch({
      type: "FETCH_FIVE_DAYS_WEATHER",
      payload: {
        fiveDaysWeather: fiveDaysWeatherRes.data,
      },
    });
  }
};

export const loadWeatherByLocation = (lat, lon) => async (dispatch) => {

  const locationRes = await getCityByLocation(lat, lon);

  let [weatherByLocationRes, fiveDaysWeatherRes] = await
    Promise.all([
      axios.get(currentWeatherURL(locationRes.data.Key, true)),
      axios.get(fiveDaysWeatherURL(locationRes.data.Key, false, true))
    ]);

  dispatch({
    type: "FETCH_WEATHER_BY_LOCATION",
    payload: {
      locationData: locationRes.data,
      weatherByLocation: weatherByLocationRes.data,
      fiveDaysWeather: fiveDaysWeatherRes.data,
    },
  });
};

