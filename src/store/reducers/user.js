/* eslint-disable linebreak-style */
<<<<<<< HEAD
import { SET_USER, FETCH_USER_DATA_REQUEST, FETCH_USER_DATA_SUCCESS, FETCH_USER_DATA_FAILURE, SIGN_USER_OUT} from '../actions/actionTypes';

const initialState = {
  loading:'false',
  userData: [],
  error: 'false',
  errorMessage: ''
=======
import { SET_USER } from '../actions/actionTypes';

const initialState = {
  user: {}
>>>>>>> ba4f362765dba8c4d40f212c33ce1e67d2549694
};

export default (state = initialState, action) => {
  switch (action.type) {
<<<<<<< HEAD
    case FETCH_USER_DATA_REQUEST:
      return {
        ...state,
        loading: 'true'
      }
    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        loading: 'done'
      }
    case FETCH_USER_DATA_FAILURE:
      return {
        loading: 'done',
        userData: [],
        error: 'true',
        errorMessage: action.payload
      }
=======
    case SET_USER:
      return {
        ...state,
        user: { ...action.user }
      };
>>>>>>> ba4f362765dba8c4d40f212c33ce1e67d2549694
    default:
      return state;
  }
};
