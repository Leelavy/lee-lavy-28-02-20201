const initState = {
  autocomplete: [],
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
      };
    case "FETCH_FIVE_DAYS_WEATHER":
      return {
        ...state,
        fiveDaysWeather: action.payload.fiveDaysWeather,
      };
    default:
      return { ...state };
  }
}

export default weatherReducer;