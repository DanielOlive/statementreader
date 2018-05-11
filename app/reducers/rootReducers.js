import { combineReducers } from "redux";

import dashboard from "../containers/dashboard/reducers";
import user from "../containers/login/reducers";

const rootReducer = combineReducers({
  dashboard,
  user,
  account: () => ({})
});

export default rootReducer;
