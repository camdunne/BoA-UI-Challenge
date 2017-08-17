import { combineReducers } from 'redux';
import modalHelper from './utils/modalHelper';

const context = 'TEAMS';

const updateTeams = (state = {
  default: 'None Added',
  array: [],
}, action) => {
  switch (action.type) {
    case 'UPDATE_TEAMS':
      return {
        ...state,
        array: Object.keys(action.payload)
          .filter(e => e && Number(e) >= 0)
          .map(team => action.payload[team]),
      };
    default:
      return state;
  }
};

const inputLength = (state = 3, action) => {
  switch (action.type) {
    case 'ADD_INPUT_LENGTH':
      return state + action.payload;
    case 'NEG_INPUT_LENGTH':
      return (state > 3) ? state - action.payload : 3;
    case 'RESET_NUM':
      return action.payload;
    default:
      return state;
  }
};

const showModal = modalHelper(context);


const rootReducer = combineReducers({
  showModal,
  updateTeams,
  inputLength,
});
export default rootReducer;
