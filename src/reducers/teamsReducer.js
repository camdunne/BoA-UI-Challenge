import { combineReducers } from 'redux';
import modalHelper from './utils/modalHelper';
import displayedHelper from './utils/displayedHelper';

const context = 'TEAMS';

const initState = {
  default: 'None Added',
  displayedTeams: [],
};
// all arrays are spread into new arrays to avoid arrays pointing to the same one in memory
const updateTeams = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_TEAMS':
      return {
        ...state,
        // filtering out array that has undefined values
        displayedTeams: [...action.payload.displayedTeams]
          .filter(e => e !== undefined),
      };
    default:
      return state;
  }
};
// input length is to know how many inputs there should be in teams modal
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
// rather than copying initState, wrote it out to avoid same array reference
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
      return {
        ...state,
        displayedTeams: [...action.payload.displayedTeams],
      };
    case 'RESET_TEMP_TEAMS':
      return {
        ...state.prevState,
        displayedTeams: [...state.prevState.displayedTeams],
        prevState: {
          ...state.prevState,
          displayedTeams: [...state.prevState.displayedTeams],
        },
      };
    case 'OPEN_TEAMS_MODAL':
      return {
        ...action.payload,
        displayedTeams: [...action.payload.displayedTeams],
        prevState: {
          ...action.payload,
          displayedTeams: [...action.payload.displayedTeams],
        },
      };
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
