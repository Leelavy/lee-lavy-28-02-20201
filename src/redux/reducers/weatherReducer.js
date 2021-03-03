const initState = {
  autocomplete: [],
  currentCity: {},
  currentWeather: [],
  fiveDaysWeather: [],
}

const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_AUTOCOMPLETE":
      return {
        ...state,
        autocomplete: action.payload.autocomplete,
      };
    case "FETCH_CURRENT_WEATHER":
      return {
        ...state,
        currentWeather: action.payload.currentWeather,
        fiveDaysWeather: action.payload.fiveDaysWeather,
        currentCity: action.payload.currentCity,
      };
    case "FETCH_FIVE_DAYS_WEATHER":
      return {
        ...state,
        fiveDaysWeather: action.payload.fiveDaysWeather,
      };
    case "UPDATE_CURRENT_CITY":
      return {
        ...state,
        currentCity: action.payload.currentCity,
      }
    case "FETCH_WEATHER_BY_LOCATION":
      return {
        ...state,
        currentCity: action.payload.locationData,
        currentWeather: action.payload.weatherByLocation,
        fiveDaysWeather: action.payload.fiveDaysWeather,
      }
    default:
      return { ...state };
  }
}

export default weatherReducer;