import { BUY_CAKE } from '../type';

const initialState = {
  numberOfCakes: 20
};

const UiReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1
      };

    default:
      return state;
  }
};

export default UiReducer;
