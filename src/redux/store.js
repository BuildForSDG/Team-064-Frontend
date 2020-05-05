import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import uireducer from './reducers/UiReducer';

const initialState = {};

const middleWare = [thunk];

const rootReducers = combineReducers({
  uireducer
});

const store = createStore(
  rootReducers,
  initialState,
  compose(applyMiddleware(...middleWare), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;
