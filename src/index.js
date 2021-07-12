import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ExchangeRate } from "./components/ExchangeRate";
import { getInitialRates } from "./store/rates";
import "./style.css";

// kick start AJAX call for exchange rates
store.dispatch(getInitialRates);

ReactDOM.render(
  <Provider store={store}>
    <ExchangeRate />
  </Provider>,

  document.getElementById("root")
);
