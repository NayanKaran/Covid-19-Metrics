import { combineReducers } from '@reduxjs/toolkit';
import dataReducer from './data';
import continentQueryReducer from './continentQuery';
import countryQueryReducer from './countryQuery';

export default combineReducers({
  data: dataReducer,
  continentQuery: continentQueryReducer,
  countryQuery: countryQueryReducer,
});
