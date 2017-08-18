import { combineReducers } from 'redux';
import modalHelper from './utils/modalHelper';
import updateHelper from './utils/updateHelper';
import tempHelper from './utils/tempHelper';
import displayedHelper from './utils/displayedHelper';

const context = 'NAME';
const initState = {
  firstname: 'Johnny',
  lastname: 'Smith',
};
const updateName = updateHelper(context, initState);
const showModal = modalHelper(context);
const tempState = {
  prevState: initState,
  ...initState,
};
const tempName = tempHelper(context, tempState);
const currentDisplayed = displayedHelper(context);

const rootReducer = combineReducers({
  showModal,
  updateName,
  tempName,
  currentDisplayed,
});
export default rootReducer;
