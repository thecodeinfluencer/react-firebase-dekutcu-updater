import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Notifications from "./screens/Notifications";
import Devotionals from "./screens/Devotionals";
import LogIn from "./screens/LogIn";
import Home from "./screens/Home";
import Library from "./screens/Library";
import { fetchDevotionals } from "./redux/actions/devotionalsActions";
import { fetchNotifications } from "./redux/actions/notificationsActions";

export default function App() {
  const dispatch = useDispatch();
  dispatch(fetchDevotionals());
  dispatch(fetchNotifications());

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/devotionals" component={Devotionals} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/library" component={Library} />
        <Route path="/login" component={LogIn} />
        <Route
          path="*"
          component={() => (
            <div
              style={{ height: window.innerHeight }}
              className="d-flex justify-content-center align-items-center"
            >
              <h2 className="h2">404 Not Found</h2>
            </div>
          )}
        />
      </Switch>
    </Router>
  );
}
