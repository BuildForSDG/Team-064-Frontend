<<<<<<< HEAD
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-unresolved */
import {
  createStore, combineReducers, applyMiddleware, compose
} from 'redux';
import thunk from 'redux-thunk';
import uireducer from './reducers/UiReducer';
=======
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import uireducer from './reducers/uiReducer';
>>>>>>> a54a6da238a40b5eed1815eb741c0f14cea667fd

const initialState = {};

const middleWare = [thunk];

const rootReducers = combineReducers({
  uireducer
});

<<<<<<< HEAD
const store = createStore(
  rootReducers,
  initialState,
  compose(applyMiddleware(...middleWare), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
=======
// eslint-disable-next-line max-len
const store = createStore(rootReducers, initialState, composeWithDevTools(applyMiddleware(...middleWare)));
>>>>>>> a54a6da238a40b5eed1815eb741c0f14cea667fd

export default store;
