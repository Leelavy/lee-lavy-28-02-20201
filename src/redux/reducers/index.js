import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';
import weatherReducer from './weatherReducer';
import measureUnitReducer from './measureUnitReducer';
import appStatusReducer from './appStatusReducer';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  weather: weatherReducer,
  measureUnit: measureUnitReducer,
  appStatus: appStatusReducer,
})

export default rootReducer;