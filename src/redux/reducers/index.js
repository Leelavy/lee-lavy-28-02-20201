import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  weather: weatherReducer,
})

export default rootReducer;