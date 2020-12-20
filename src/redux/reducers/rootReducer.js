import { combineReducers } from "redux";

import devotionalsReducer from "../reducers/devotionalsReducer";
import notificationsReducer from "../reducers/notificationsReducer";

const rootReducer = combineReducers({
  devotionals: devotionalsReducer,
  notifications: notificationsReducer,
});

export default rootReducer;
