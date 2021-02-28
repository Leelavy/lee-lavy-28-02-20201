//dummyData api
import {
  dummyDataAutocomplete,
  dummyTelAvivWeather,
  dummyTelAvivWeatherWithDetails,
  dummyTelAvivFiveDaysWeather,
  dummyDataWeatherByLocation,
} from '../dummyData';

const base_url = 'http://dataservice.accuweather.com';
const api_key = 'HxIx6T5ArCVjALKDqoX39NivrUTWJnuo';

export const dummyAutocompleteURL = () => dummyDataAutocomplete;
export const dummyCurrentWeatherURL = () => dummyTelAvivWeatherWithDetails;
export const dummyFiveDaysWeatherURL = () => dummyTelAvivFiveDaysWeather;
export const dummyWeatherByLocationURL = () => dummyDataWeatherByLocation;

//Real api
export const autocompleteURL = (q) => `${base_url}/locations/v1/cities/autocomplete?apikey=${api_key}&q=${q}`;
export const currentWeatherURL = (locationKey, isWithDetails = false) => `${base_url}/currentconditions/v1/${locationKey}?apikey=${api_key}&details=${isWithDetails}`;
export const fiveDaysWeatherURL = (locationKey, isWithDetails = false, isMetric = true) => `${base_url}/forecasts/v1/daily/5day/${locationKey}?apikey=${api_key}&details=${isWithDetails}&metric=${isMetric}`;
export const weatherByLocationURL = (lat, lon) => `${base_url}/locations/v1/cities/geoposition/search?apikey=${api_key}&q=${lat}%2C${lon}`;