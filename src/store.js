import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';

// set up redux store
// thunk middleware for async calls
// redux logger for debugging

const middleware = applyMiddleware(thunk, ReduxLogger);
const store = createStore(reducer, composeWithDevTools(middleware));

export default store;
