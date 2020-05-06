import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import uireducer from './reducers/uiReducer';

const initialState = {};

const middleWare = [thunk];

const rootReducers = combineReducers({
  uireducer
});

// eslint-disable-next-line max-len
const store = createStore(rootReducers, initialState, composeWithDevTools(applyMiddleware(...middleWare)));

export default store;
