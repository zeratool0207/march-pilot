import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./store/index";

import { RouterProvider } from "react-router-dom";
import { router } from "../src/router/router";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router = { router } />
// )
