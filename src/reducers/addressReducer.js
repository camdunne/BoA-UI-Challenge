import { combineReducers } from 'redux';
import modalHelper from './utils/modalHelper';
import updateHelper from './utils/updateHelper';
import tempHelper from './utils/tempHelper';
import displayedHelper from './utils/displayedHelper';

const context = 'ADDRESS';

const initState = {
  street: '123 Bowl Lane',
  city: 'New York',
  state: 'NY',
  zipcode: '10021',
};
const updateAddress = updateHelper(context, initState);

const showModal = modalHelper(context);

const tempState = {
  prevState: initState,
  ...initState,
};
const tempAddress = tempHelper(context, tempState);

const currentDisplayed = displayedHelper(context);

const rootReducer = combineReducers({
  showModal,
  updateAddress,
  tempAddress,
  currentDisplayed,
});

export default rootReducer;
