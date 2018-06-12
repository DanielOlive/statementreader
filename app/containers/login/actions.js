import * as types from "../../types";

import api from "../../api";

export const userLoggedIn = user => ({
  type: types.USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => ({
  type: types.USER_LOGGED_OUT
});

export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    // Move the below local storage to a utility function
    localStorage.statementReaderJWT = user.token;
    dispatch(userLoggedIn(user));
  });

export const logout = () => dispatch => {
  localStorage.removeItem("statementReaderJWT");
  dispatch(userLoggedOut());
};
