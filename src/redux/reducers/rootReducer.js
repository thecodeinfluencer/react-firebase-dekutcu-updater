import { combineReducers } from "redux";

import devotionalsReducer from "../reducers/devotionalsReducer";
import notificationsReducer from "../reducers/notificationsReducer";
import ebooksReducer from "./ebookReducer";
import authReducer from "../reducers/authReducer";

const rootReducer = combineReducers({
  devotionals: devotionalsReducer,
  notifications: notificationsReducer,
  ebooks: ebooksReducer,
  auth: authReducer,
});

export default rootReducer;
