import {
  UPDATE_DATA,
} from '../actions';

const initialState = {
  data: [],
};

const rootReducer = (state = initialState, action) => {
  if (action.type === UPDATE_DATA) {
    return {
      ...state,
      data: action.payload,
    };
  }
  return state;
};

export default rootReducer;
