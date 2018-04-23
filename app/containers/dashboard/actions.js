import { TRANSACTIONLIST_PATH } from "../../config";
import * as types from "../../types";

export function transactionFailure(bool) {
  return { type: types.API_CALL_FAILURE, hasFailed: bool };
}
export function transactionRequest(bool) {
  return { type: types.API_CALL_REQUEST, isLoading: bool };
}
export function transactionSuccess(transactions) {
  return { type: types.API_CALL_SUCCESS, transactions };
}

export const fetchTransactions = () => dispatch => {
  dispatch(transactionRequest(true));
  fetch(TRANSACTIONLIST_PATH)
    .then(response => response.json())
    .then(transactions => {
      console.log(transactions.list);
      dispatch(transactionSuccess(transactions.list));
    })
    .catch(() => dispatch(transactionFailure(true)));
};
