import { combineReducers } from 'redux';
import address from './addressReducer';
import name from './nameReducer';
import teams from './teamsReducer';

const rootReducer = combineReducers({
  name,
  address,
  teams,
});

export default rootReducer;
