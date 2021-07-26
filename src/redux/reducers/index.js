import {
  DELETE_ITEM,
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
  } else if (action.type === DELETE_ITEM) {
    return {
      ...state,
      data: state.data.filter(vessel => vessel.ID !== action.payload)
    }
  }
  return state;
};

export default rootReducer;
