import { combineReducers } from "redux";

import login from "./login/reducers";
import profile from "./profile/reducers";

const rootReducer = combineReducers({
  login,
  profile
});

export default rootReducer;
