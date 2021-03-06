import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import configureStore from "store/configure";
import App from "components/App";

// const store = configureStore({}, { api: api.create() });
render(
  // <Provider store={store}>
  <BrowserRouter basename={__ISDEV__ ? "/" : "/react-scratch"}>
    <App />
  </BrowserRouter>,
  // </Provider>,
  document.getElementById("app")
);
