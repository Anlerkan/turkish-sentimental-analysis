import "@hipo/react-ui-toolkit/dist/main.css";
// Defaults
import "./core/ui/style/_font.scss";
import "./core/ui/style/reference/_color.scss";
import "./core/ui/style/util/_helper.scss";

import "./components/input/_input.scss";
import "./components/button/_button.scss";

import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import RootApp from "./core/root-app/RootApp";

ReactDOM.render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
