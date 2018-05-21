import { createPropsSelector } from "reselect-immutable-helpers";
import {
  TRANSACTIONLIST_PATH,
  UPDATE_TRANSACTIONLIST_PATH
} from "../../config";
import * as types from "../../types";
import { getTotalAmount, getTransactions } from "../dashboard/selectors";
import api from "../../api";

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
  api.transactions
    .getTransactions()
    .then(transactions => dispatch(transactionSuccess(transactions)))
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

// Mark transactions as paid

export const markTransactionAsPaid = ids => dispatch => {
  api.transactions
    .markAsPaid(ids)
    .catch(error => console.error("Error:", error))
    .then(response => {
      console.log("Success:", response);
      dispatch(fetchTransactions());
    });

  // dispatch({ type: types.MARK_TRANSACTION_AS_PAID, toggle });
};

// File Uploading

/* export const uploadCSV = formData => dispatch => {
  dispatch({type:types.UPLOAD_CSV_REQUEST, uploadStarted:true})
  api.transactions.uploadCSVFile(formData)
  .catch(err => dispatch({ type: types.UPLOAD_CSV_FAILURE}))
  .then(response => {
     console.log("Success:", response);
     dispatch(fetchTransactions());
    dispatch({ type: types.UPLOAD_CSV_SUCCESS, uploadComplete:true })
  })
} */

export const uploadCSV = formData => dispatch =>
  api.transactions
    .uploadCSVFile(formData)
    .then(() => dispatch(fetchTransactions()));
