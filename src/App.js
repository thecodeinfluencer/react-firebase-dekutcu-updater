import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Screen from "./layout/Screen";
import Notifications from "./screens/Notifications";
import Devotionals from "./screens/Devotionals";
import { fetchDevotionals } from "./redux/actions/devotionalsActions";
import { fetchNotifications } from "./redux/actions/notificationsActions";

export default function App() {
  const dispatch = useDispatch();
  dispatch(fetchDevotionals());
  dispatch(fetchNotifications());

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Screen>
              <h4 className="h4">Welcome</h4>
              <p class="lead">
                DekutCU App Notifications and Devotionals Editor
              </p>
              <Link
                to="/devotionals"
                type="button"
                class="btn btn-success mr-2"
              >
                Devotionals
              </Link>
              <Link to="/notifications" type="button" class="btn btn-success">
                Notifications
              </Link>
            </Screen>
          )}
        />
        <Route path="/devotionals" component={Devotionals} />
        <Route path="/notifications" component={Notifications} />
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
