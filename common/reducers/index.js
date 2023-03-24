import { combineReducers } from "redux";
import authReducer from './auth';
import exampleReducer from "./exampleReducer";
import chatGptReducer from './chatGPT';

export default combineReducers({
  auth: authReducer,
  example: exampleReducer,
  chatGPT: chatGptReducer,
});
