import {
  ADD_ITEM_SUCCESS,
  REMOVE_ITEM_SUCCESS,
  AUTH_SUCCESS,
  FETCH_SUCCESS,
  REGISTER_SUCCESS,
  LOGOUT,
} from '../actions';

const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.data],
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter((item) => item._id !== action.payload.id),
        ],
      };
    case LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default rootReducer;
