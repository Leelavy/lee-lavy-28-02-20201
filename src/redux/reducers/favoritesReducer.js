const initState = {
  favoriteCities: [],
  favoriteCitiesWeather: [],
}

const favoritesReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_CITY_TO_FAVORITES":
      return {
        ...state,
        favoriteCities: [...state.favoriteCities, action.payload.favoriteCity],
      };
    case "FETCH_FAVORITES_WEATHER":
      return {
        ...state,
        favoriteCitiesWeather: action.payload.favoriteCitiesWeather,
      }
    case "UPDATE_FAVORITES":
      return {
        ...state,
        favoriteCities: action.payload.favoriteCities,
      }
    default:
      return { ...state }
  }
}

export default favoritesReducer;