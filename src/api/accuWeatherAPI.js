const base_url = 'http://dataservice.accuweather.com';
const api_key = 'HxIx6T5ArCVjALKDqoX39NivrUTWJnuo';

//dummyData api
import {
  dummyDataAutocomplete,
  dummyTelAvivWeather,
  dummyTelAvivWeatherWithDetails,
  dunnyTelAvivFiveDaysWeather
} from '../dummyData';
export const dummyAutocompleteURL = () => dummyDataAutocomplete;
export const dummyCurrentWeatherURL = () => dummyTelAvivWeather;
export const dummyFiveDaysWeatherURL = () => dunnyTelAvivFiveDaysWeather;

//Real api
export const autocompleteURL = (q) => `${base_url}/locations/v1/cities/autocomplete?apikey=${api_key}&q=${q}`;
export const currentWeatherURL = (locationKey, isWithDetails = false) => `${base_url}/currentconditions/v1/${locationKey}?apikey=${api_key}&details=${isWithDetails}`;
export const fiveDaysWeatherURL = (locationKey, isWithDetails = false, isMetric = true) => `${base_url}/forecasts/v1/daily/5day/${locationKey}?apikey=${api_key}&details=${isWithDetails}&metric=${isMetric}`;
