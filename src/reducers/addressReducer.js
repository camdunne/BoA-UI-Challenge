import { combineReducers } from 'redux';
import modalHelper from './utils/modalHelper';
import updateHelper from './utils/updateHelper';

const context = 'ADDRESS';
const initState = {
  street: '123 Bowl Lane',
  city: 'New York',
  state: 'NY',
  zipcode: 10021,
};
const updateAddress = updateHelper(context, initState);
const showModal = modalHelper(context);


const rootReducer = combineReducers({
  showModal,
  updateAddress,
});
export default rootReducer;
