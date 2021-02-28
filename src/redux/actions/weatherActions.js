import axios from 'axios';
//should import real api urls after setting up the app
import { dummyAutocompleteURL, dummyCurrentWeatherURL, dummyFiveDaysWeatherURL } from '../../api/accuWeatherAPI';

export const loadAutoComplete = () => async (dispatch) => {
  //FETCH AXIOS
  const autocompleteData = await axios.get(dummyAutocompleteURL());
  dispatch({
    type: "FETCH_AUTOCOMPLETE",
    payload: {
      autocomplete: autocompleteData,
    },
  });
};

export const loadCurrentWeather = () => async (dispatch) => {
  //FETCH AXIOS
  const currentWeatherData = await axios.get(dummyCurrentWeatherURL());
  dispatch({
    type: "FETCH_CURRENT_WEATHER",
    payload: {
      currentWeather: currentWeatherData,
    },
  });
};

export const loadFiveDaysWeather = () => async (dispatch) => {
  const fiveDaysWeatherData = await axios.get(dummyFiveDaysWeatherURL());
  dispatch({
    type: "FETCH_FIVE_DAYS_WEATHER",
    payload: {
      fiveDaysWeather: fiveDaysWeatherData,
    },
  });
};
