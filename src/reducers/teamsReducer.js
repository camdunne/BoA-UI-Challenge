import { combineReducers } from 'redux';
import modalHelper from './utils/modalHelper';

const context = 'TEAMS';
const initState = {
  default: '',
};
const updateTeams = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_TEAMS':
      if (action.payload) {
        return [...action.payload];
      }
      return initState;
    default:
      return state;
  }
};
const showModal = modalHelper(context);


const rootReducer = combineReducers({
  showModal,
  updateTeams,
});
export default rootReducer;
