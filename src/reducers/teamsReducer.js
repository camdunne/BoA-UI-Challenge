import { combineReducers } from 'redux';
import modalHelper from './utils/modalHelper';

const context = 'TEAMS';

const updateTeams = (state = {
  default: 'None Added',
  array: [],
}, action) => {
  const curr = [...state.array];
  switch (action.type) {
    case 'UPDATE_TEAMS':
      Object.keys(action.payload)
        .filter(e => e && Number(e) >= 0)
        .forEach((team, i) => {
          if (action.payload[team]) {
            curr[i] = action.payload[team];
          }
        });
      return {
        ...state,
        array: curr,
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
