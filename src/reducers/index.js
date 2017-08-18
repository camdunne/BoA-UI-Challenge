import { combineReducers } from 'redux';
import address from './addressReducer';
import name from './nameReducer';
import teams from './teamsReducer';

// main reducer, where all the other reducers are connected to
// utils folder as helper functions, as to not repeat code,
//      since many of the reducers repeat behavior
//      pass in context to know which state to change
//      this also helps with testing by decreasing number of tests needed

const rootReducer = combineReducers({
  name,
  address,
  teams,
});

export default rootReducer;
