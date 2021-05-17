import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
  } from "../actions/types";
  
  const user = JSON.parse(localStorage.getItem("user"));
  
  const initialState = user
    ? { success: true, user }
    : { success: false, user: null };
  
  const myauth = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          success: true,
          user: payload.user,
        };
      case LOGIN_FAIL:
        return {
          ...state,
          success: false,
          user: null,
        };
      case LOGOUT:
        return {
          ...state,
          success: false,
          user: null,
        };
      default:
        return state;
    }
  }
  
  export default myauth;