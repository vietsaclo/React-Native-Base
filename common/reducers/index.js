import { combineReducers } from "redux";
import authReducer from './auth';
import exampleReducer from "./exampleReducer";

export default combineReducers({
  auth: authReducer,
  example: exampleReducer,
});
