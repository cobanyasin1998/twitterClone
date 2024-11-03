import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/index.jsx";
import "./assets/css/tailwind.css";
import { Provider } from "react-redux";
import store from "./store/index.js";
import MainLayout from "./layouts/main/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routes}>
      <MainLayout />
    </RouterProvider>
  </Provider>
);
