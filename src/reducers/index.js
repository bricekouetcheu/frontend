import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import blog from "./blog";
import album from "./album";


export default combineReducers({
  auth,
  message,
  blog,
  album,
});