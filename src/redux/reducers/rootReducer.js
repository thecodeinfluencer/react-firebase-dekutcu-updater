import { combineReducers } from "redux";

import devotionalsReducer from "../reducers/devotionalsReducer";
import notificationsReducer from "../reducers/notificationsReducer";
import authReducer from "../reducers/authReducer";

const rootReducer = combineReducers({
  devotionals: devotionalsReducer,
  notifications: notificationsReducer,
  auth: authReducer,
});

export default rootReducer;
