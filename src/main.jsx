import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.jsx";
import { ThemeProvider } from "./components/ThemePrvider/ThemeProvider.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
