/* eslint-disable linebreak-style */
import { SET_USER } from './actionTypes';
import { userUiStartLoading, userUiStopLoading } from './ui';

export const setUser = (user) => ({
  type: SET_USER,
  user
});

export const getUser = () => async (dispatch) => {
  try {
    // Make UI start loading was request started
    dispatch(userUiStartLoading());
    // Make necessary request to get the user, e.g
    // const res = await axios.get(`/user`);

    // Stop UI loading after response has been gotten
    dispatch(userUiStopLoading());
    // Performs necessary request after user has been gotten, e.g
    // Success:
    // if (res.success) {
    //   dispatch(setUser(res.body));
    //   return null;
    // }
    // Failure, Unauthorized:
    // if (res.status === 401) {
    //   dispatch(resetApp());
    //   return 0;
    // }
  } catch (error) {
    dispatch(userUiStopLoading());
    // If error occurs in getting user, e.g
    // return 'Something went wrong. Check your connection.';
  }
};
