import { combineReducers } from "redux";
import dashboard from "../containers/dashboard/reducers";

const rootReducer = combineReducers({
  dashboard,
  user: () => ({})
});

export default rootReducer;
