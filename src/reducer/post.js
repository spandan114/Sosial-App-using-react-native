import {SET_POST,ERROR_POST} from '../action/actionType'

const initialState = {
    posts: null,
    loding: true,
    error: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_POST:
      return {
        ...state,
        posts: action.payload,
        loding: false,
        error: false
      };
    case ERROR_POST:
      return {
        ...state,
        error: true
      };
     
    default:
      return state;
  }
}