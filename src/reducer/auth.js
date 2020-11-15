import {IS_AUTHONTICATED,SET_USER} from '../action/actionType'

const initialState = {
    user: null,
    loding: true,
    isAuthonticated: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        loding: false,
      };
    case IS_AUTHONTICATED:
      return {
        ...state,
        loding: false,
        isAuthonticated: action.payload
      };
     
    default:
      return state;
  }
}