import { combineReducers } from 'redux';
import modalHelper from './utils/modalHelper';
import updateHelper from './utils/updateHelper';

const context = 'NAME';
const initState = {
  firstname: 'Johnny',
  lastname: 'Smith',
};
const updateName = updateHelper(context, initState);
const showModal = modalHelper(context);


const rootReducer = combineReducers({
  showModal,
  updateName,
});
export default rootReducer;
