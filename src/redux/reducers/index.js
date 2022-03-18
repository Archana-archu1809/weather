import { combineReducers } from "redux";
import data from "./weather";
const rootReducers = combineReducers({
  data: data,
});
export default rootReducers;
