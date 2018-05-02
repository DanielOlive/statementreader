import { createPropsSelector } from "reselect-immutable-helpers";
import { TRANSACTIONLIST_PATH } from "../../config";
import * as types from "../../types";
import { getTotalAmount, getTransactions } from "../dashboard/selectors";

const transactionFailure = bool => ({
  type: types.API_CALL_FAILURE,
  hasFailed: bool
});

const transactionRequest = bool => ({
  type: types.API_CALL_REQUEST,
  isLoading: bool
});

const transactionSuccess = transactions => ({
  type: types.API_CALL_SUCCESS,
  transactions
});

export const fetchTransactions = () => dispatch => {
  dispatch(transactionRequest(true));
  fetch(TRANSACTIONLIST_PATH)
    .then(response => response.json())
    .then(transactions => {
      dispatch(transactionSuccess(transactions.list));
    })
    .catch(() => dispatch(transactionFailure(true)));
};

const storeData = createPropsSelector({
  totalAmount: getTotalAmount,
  transactions: getTransactions
});

export const incrementTotalAmount = (val, reference) => (
  dispatch,
  getState
) => {
  const { totalAmount, transactions } = storeData(getState());
  const amount = (Number(totalAmount) + Number(val)).toFixed(2);
  dispatch({ type: types.INCREMENT_AMOUNT, amount });
  const newTransactionList = transactions.map(item => {
    if (item.reference === reference) item.checked = true;
    return item;
  });

  dispatch(transactionSuccess(newTransactionList));
};

export const decrementTotalAmount = (val, reference) => (
  dispatch,
  getState
) => {
  const { totalAmount, transactions } = storeData(getState());
  const amount = (Number(totalAmount) - Number(val)).toFixed(2);
  dispatch({ type: types.DECREMENT_AMOUNT, amount });

  const newTransactionList = transactions.map(item => {
    if (item.reference === reference) item.checked = false;
    return item;
  });

  dispatch(transactionSuccess(newTransactionList));
};

// Toggling the selected transactions
export const transToggle = toggle => dispatch => {
  dispatch({ type: types.TRANSACTION_TOGGLE, toggle });
};
