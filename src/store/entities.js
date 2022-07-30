import { combineReducers } from '@reduxjs/toolkit';
import dataReducer from './data';
import queryReducer from './query';

export default combineReducers({
  data: dataReducer,
  query: queryReducer,
});
