import { combineReducers } from 'redux';
import modalHelper from './utils/modalHelper';
import tempHelper from './utils/tempHelper';
import displayedHelper from './utils/displayedHelper';

const context = 'TEAMS';

const initState = {
  default: 'None Added',
  displayedTeams: [],
};

const updateTeams = (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_TEAMS':
      console.log(action.payload.displayedTeams, state.displayedTeams, state);
      const array = [...action.payload.displayedTeams];

      console.log('ayyy', Array.from({ ...array, length: Object.keys(array).length }));
      console.log('array', array);

      const displayedTeams = array.filter(e => e !== undefined);
      console.log('REDUCER UPDATED TEAMS', displayedTeams, array);
      return {
        ...state,
        displayedTeams,
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
// const tempTeams = tempHelper(context, tempState);

// const tempTeams = (state = tempState, action) => {
//   switch (action.type) {
//     case 'CLOSE_TEAMS_MODAL':
//       console.log(action.payload);
//       return state;
//     case 'UPDATE_TEMP_TEAMS':
//       console.log('UPDATE', state, action.payload);
//       return { ...state, ...action.payload };
//     case 'UPDATE_TEAMS':
//       return { prevState: { ...state, ...action.payload }, ...action.payload, ...state };
//     case 'RESET_TEMP_TEAMS':
//       return { ...state.prevState, prevState: state.prevState };
//     case 'OPEN_TEAMS_MODAL':
//       return { ...action.payload };
//     default:
//       return state;
//   }
// };
const tempTeams = (state = tempState, action) => {
  switch (action.type) {
    case 'UPDATE_TEMP_TEAMS':
      console.log('ssss', state, action.payload);
      return { ...state, displayedTeams: [...action.payload.displayedTeams] };
    // case 'UPDATE_TEAMS':
    //   return { prevState: { ...state, displayedTeams: [...state.displayedTeams] }, ...state, displayedTeams: [...state.displayedTeams] };
    // // case 'CLOSE_TEAMS_MODAL':
    case 'RESET_TEMP_TEAMS':
      return { ...state.prevState, prevState: { ...state.prevState } };
    case 'OPEN_TEAMS_MODAL':
      console.log(action.payload);
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
