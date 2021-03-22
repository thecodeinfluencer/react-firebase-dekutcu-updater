import React from "react";
import { useHistory, Link } from "react-router-dom";

import firebase from "../config/Firebase";
import Screen from "../layout/Screen";

export default function Home() {
  const history = useHistory();
  !firebase.auth().currentUser && history.push("/login");

  return (
    <Screen>
      <h4 className="h4">Welcome</h4>
      <p class="lead">DekutCU App Notifications and Devotionals Editor</p>
      <Link to="/devotionals" type="button" class="btn btn-success mr-2">
        Devotionals
      </Link>
      <Link to="/notifications" type="button" class="btn btn-success mr-2">
        Notifications
      </Link>
      <Link to="/library" type="button" class="btn btn-success">
        Library
      </Link>
    </Screen>
  );
}
