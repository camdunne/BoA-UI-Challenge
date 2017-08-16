import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import address from './addressReducer';
import name from './nameReducer';
import teams from './teamsReducer';

const rootReducer = combineReducers({
  form: formReducer,
  name,
  address,
  teams,
});

export default rootReducer;
