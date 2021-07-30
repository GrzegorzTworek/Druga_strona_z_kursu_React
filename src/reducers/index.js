import {
  ADD_ITEM,
  REMOVE_ITEM_REQUEST,
  REMOVE_ITEM_SUCCESS,
  AUTHENTICATE_SUCCESS,
  FETCH_REQUEST,
  FETCH_SUCCESS,
} from 'actions';
import { ADD_ITEM_REQUEST, ADD_ITEM_SUCCESS } from '../actions';

const initialState = {
  userID: '6101bdf0f486656044767853',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
      };

    case AUTHENTICATE_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
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
          ...state[action.payload.itemType].filter(item => item._id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
