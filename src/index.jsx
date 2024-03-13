import React from "react";
import ReactDOM from "react-dom/client";

//components
import App from "./App";

//redux
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import store from "./redux/store";

//bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

//css
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
    <ToastContainer />
  </Provider>
);
