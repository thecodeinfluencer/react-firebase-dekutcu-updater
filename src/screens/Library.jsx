import React, { useState, useEffect } from "react";

import Screen from "../layout/Screen";
import { cards, tabs } from "../db/library";
import "../styles/dashboard.css";
import firebase from "../config/Firebase";
import All from "../fragments/All";
import { useHistory } from "react-router";

export default function Library() {
  const [fragment, setFragment] = useState(<All />);
  const history = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (!user) {
        history.push("/login");
      }
    });
  }, [history]);

  return (
    <Screen>
      <div className="row">
        <div className="col mb-3 mt-0">
          <h4>Dashboard</h4>
        </div>
      </div>
      <div className="row">
        {cards.map((card) => (
          <div key={card.title} className="col-lg-4 my-2">
            <div className="card border-left-primary shadow h-100 py-0">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      {card.title}
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      {card.value}
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className={`fas ${card.icon} fa-2x text-gray-300`}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col mt-5">
          <ul className="nav nav-tabs sub-tabs">
            {tabs.map((tab, index) => (
              <li key={tab.title} className="nav-item">
                <div
                  className={`nav-link ${!index && "active"}`}
                  aria-current="page"
                  role="button"
                  href="#"
                  onClick={(event) => {
                    document
                      .querySelector(".sub-tabs")
                      .querySelectorAll(".nav-link")
                      .forEach((item) => {
                        item.classList.remove("active");
                      });

                    event.target.classList.add("active");
                    setFragment(tab.component);
                  }}
                >
                  {tab.title}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col my-5">{fragment}</div>
      </div>
    </Screen>
  );
}
