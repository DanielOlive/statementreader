import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";
import App from "./app";
import { userLoggedIn } from "./containers/login/actions";

if (localStorage.statementReaderJWT) {
  // reset the token if user refreshes
  const user = {
    token: localStorage.statementReaderJWT
  };
  store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
