import { combineReducers } from 'redux';
import entitiesReducer from './entities';
import historyReducer from './history';

export default combineReducers({
  entities: entitiesReducer,
  route: historyReducer,
});
