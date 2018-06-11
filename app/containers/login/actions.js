import * as types from "../../types";

import api from "../../api";

export const userLoggedIn = user => ({
  type: types.USER_LOGGED_IN,
  user
});

export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    // Move the below local storage to a utility function
    localStorage.statementReader = user.token;
    dispatch(userLoggedIn(user));
  });
