import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routes.jsx";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.js";
import store from "./store/configStore";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <RouterProvider router={router} />
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
