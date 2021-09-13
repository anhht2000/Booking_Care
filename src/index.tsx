import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { persistor, store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Initial from "./features/initialApp/Initial";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Initial>
          <BrowserRouter>
            <CssBaseline />
            <App />
          </BrowserRouter>
        </Initial>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
