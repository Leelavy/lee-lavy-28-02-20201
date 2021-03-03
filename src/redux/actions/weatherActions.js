import {
  getAutocomplete,
  getCurrentWeather,
  getFiveDaysWeather,
  getCityByLocation,
} from '../../api/accuWeatherAPI';
import {
  showLoader,
  hideLoader,
  showErrorModal,
} from '../actions/appStatusActions';

export const loadAutoComplete = (q) => async (dispatch) => {

  if (q) {
    try {
      const autocompleteRes = await getAutocomplete(q);
      dispatch({
        type: "FETCH_AUTOCOMPLETE",
        payload: {
          autocomplete: autocompleteRes.data,
        },
      });
    } catch (e) {
      console.log(e);
      dispatch(showErrorModal(e.toString()));
    }
  }
};

export const loadCurrentWeather = (city) => async (dispatch) => {

  if (city) {
    dispatch(showLoader());
    try {
      let [currentWeatherRes, fiveDaysWeatherRes] = await
        Promise.all([
          getCurrentWeather(city.Key, true),
          getFiveDaysWeather(city.Key, false, true),
        ]);

      dispatch({
        type: "FETCH_CURRENT_WEATHER",
        payload: {
          currentWeather: currentWeatherRes.data,
          fiveDaysWeather: fiveDaysWeatherRes.data,
          currentCity: city,
        },
      });
    } catch (e) {
      console.log(e);
      dispatch(showErrorModal(e.toString()))
    }
    dispatch(hideLoader());
  }
};

export const loadFiveDaysWeather = (city) => async (dispatch) => {

  if (city) {
    dispatch(showLoader());
    try {
      const fiveDaysWeatherRes = await getFiveDaysWeather(city.Key, false, true);
      dispatch({
        type: "FETCH_FIVE_DAYS_WEATHER",
        payload: {
          fiveDaysWeather: fiveDaysWeatherRes.data,
        },
      });
    } catch (e) {
      console.log(e);
      dispatch(showErrorModal(e.toString()))
    }
    dispatch(hideLoader());
  }
};

export const loadWeatherByLocation = (lat, lon) => async (dispatch) => {

  dispatch(showLoader());
  try {
    const locationRes = await getCityByLocation(lat, lon);
    let [weatherByLocationRes, fiveDaysWeatherRes] = await
      Promise.all([
        getCurrentWeather(locationRes.data.Key, true),
        getFiveDaysWeather(locationRes.data.Key, false, true),
      ]);

    dispatch({
      type: "FETCH_WEATHER_BY_LOCATION",
      payload: {
        locationData: locationRes.data,
        weatherByLocation: weatherByLocationRes.data,
        fiveDaysWeather: fiveDaysWeatherRes.data,
      },
    });
  } catch (e) {
    console.log(e.toString());
    dispatch(showErrorModal(e.toString()));
  }
  dispatch(hideLoader());
};

