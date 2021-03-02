import axios from 'axios';
//should import real api urls after setting up the app
import {
  dummyAutocompleteURL,
  dummyCurrentWeatherURL,
  dummyFiveDaysWeatherURL,
  dummyWeatherByLocationURL,
} from '../../api/accuWeatherAPI';

export const loadAutoComplete = (q) => async (dispatch) => {
  //SHOULD BE FETCH AXIOS
  let autocompleteData = [];
  if (q === 'te') {
    autocompleteData = dummyAutocompleteURL();
  }
  dispatch({
    type: "FETCH_AUTOCOMPLETE",
    payload: {
      autocomplete: autocompleteData,
    },
  });
};

export const loadCurrentWeather = (city) => async (dispatch) => {
  //SHOULD BE FETCH AXIOS
  const currentWeatherData = dummyCurrentWeatherURL();
  dispatch({
    type: "FETCH_CURRENT_WEATHER",
    payload: {
      currentWeather: currentWeatherData,
    },
  });
  dispatch({
    type: "UPDATE_CURRENT_CITY",
    payload: {
      currentCity: city,
    }
  });
};

export const loadFiveDaysWeather = () => async (dispatch) => {
  //SHOULD BE FETCH AXIOS
  const fiveDaysWeatherData = dummyFiveDaysWeatherURL();
  dispatch({
    type: "FETCH_FIVE_DAYS_WEATHER",
    payload: {
      fiveDaysWeather: fiveDaysWeatherData,
    },
  });
};

export const loadWeatherByLocation = (lat, lon) => async (dispatch) => {
  //SHOULD BE FETCH AXIOS
  const locationData = dummyWeatherByLocationURL();
  const weatherByLocationData = dummyCurrentWeatherURL();
  dispatch({
    type: "FETCH_WEATHER_BY_LOCATION",
    payload: {
      locationData: locationData,
      weatherByLocation: weatherByLocationData,
    },
  });
};