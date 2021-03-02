import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';
import weatherReducer from './weatherReducer';
import measureUnitReducer from './measureUnitReducer';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  weather: weatherReducer,
  measureUnit: measureUnitReducer,
})

export default rootReducer;