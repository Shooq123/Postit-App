import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./Store/store";
import { Provider } from "react-redux";
import Register from "./Components/Register";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Register />
    </React.StrictMode>
  </Provider>
);
