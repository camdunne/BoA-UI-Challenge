import { combineReducers } from 'redux';
import modalHelper from './utils/modalHelper';
import displayedHelper from './utils/displayedHelper';

const context = 'TEAMS';

const initState = {
  default: 'None Added',
  displayedTeams: [],
};

const updateTeams = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_TEAMS':
      return {
        ...state,
        displayedTeams: [...action.payload.displayedTeams].filter(e => e !== undefined),
      };
    default:
      return state;
  }
};

const inputLength = (state = 3, action) => {
  switch (action.type) {
    case 'ADD_INPUT_LENGTH':
      return state + 1;
    case 'NEG_INPUT_LENGTH':
      return (state > 3) ? state - 1 : 3;
    case 'RESET_NUM':
      return action.payload;
    default:
      return state;
  }
};

const showModal = modalHelper(context);

const tempState = {
  prevState: {
    default: 'None Added',
    displayedTeams: [],
  },
  default: 'None Added',
  displayedTeams: [],
};

const tempTeams = (state = tempState, action) => {
  switch (action.type) {
    case 'UPDATE_TEMP_TEAMS':
      return { ...state, displayedTeams: [...action.payload.displayedTeams] };
    case 'RESET_TEMP_TEAMS':
      return { ...state.prevState, prevState: { ...state.prevState } };
    case 'OPEN_TEAMS_MODAL':
      return { ...action.payload };
    default:
      return state;
  }
};

const currentDisplayed = displayedHelper(context);

const rootReducer = combineReducers({
  showModal,
  updateTeams,
  inputLength,
  tempTeams,
  currentDisplayed,
});

export default rootReducer;
