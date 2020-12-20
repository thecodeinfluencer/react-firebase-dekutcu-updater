import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "bootstrap";

import rootReducer from "./redux/reducers/rootReducer";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//Use Local Storage Persistance
const saveToLocalStorage = state => {
  try {
    let stringState = JSON.stringify(state);
    localStorage.setItem("@CUstate", stringState);
  } catch (err) {
    console.log(err);
  }
};

const loadFromLocalStorage = () => {
  try {
    let stringState = localStorage.getItem("@CUstate");
    if (stringState === null) return undefined;
    return JSON.parse(stringState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

const persistedStorage = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedStorage,
  applyMiddleware(thunk)
);

store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
