import axios from 'axios';
//should import real api urls after setting up the app
import { dummyAutocompleteURL, dummyCurrentWeatherURL, dummyFiveDaysWeatherURL } from '../../api/accuWeatherAPI';

export const loadAutoComplete = (q) => async (dispatch) => {
  //SHOULD BE FETCH AXIOS
  let autocompleteData = [];
  if (q === 'te') {
    autocompleteData = dummyAutocompleteURL();
  }
  console.log(autocompleteData);
  dispatch({
    type: "FETCH_AUTOCOMPLETE",
    payload: {
      autocomplete: autocompleteData,
    },
  });
};

export const loadCurrentWeather = () => async (dispatch) => {
  //SHOULD BE FETCH AXIOS
  const currentWeatherData = dummyCurrentWeatherURL();
  dispatch({
    type: "FETCH_CURRENT_WEATHER",
    payload: {
      currentWeather: currentWeatherData,
    },
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
