/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */

import {
  createStore, applyMiddleware, combineReducers, compose
} from 'redux';
import thunkMiddleware from 'redux-thunk';
<<<<<<< HEAD
import userData from './reducers/user';
import communityData from './reducers/community';
import ui from './reducers/ui';

const appReducer = combineReducers({
  userData: userData,
  communityData: communityData,
  ui:ui
=======
import user from './reducers/user';
import ui from './reducers/ui';

const appReducer = combineReducers({
  user,
  ui // Import your reducers in this object
>>>>>>> ba4f362765dba8c4d40f212c33ce1e67d2549694
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }
  return appReducer(state, action);
};

let composeEnhancers = compose;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const middleware = composeEnhancers(applyMiddleware(thunkMiddleware));
<<<<<<< HEAD
const store = createStore(rootReducer, middleware);
=======
const store = createStore(rootReducer, {}, middleware);
>>>>>>> ba4f362765dba8c4d40f212c33ce1e67d2549694

export default store;
