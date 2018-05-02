import { createSelector } from "reselect";

const getTransactionList = state => state.dashboard;
export const getTransactions = createSelector(
  [getTransactionList],
  dashboard => dashboard.transactions
);

export const getTotalAmount = createSelector(
  [getTransactionList],
  dashboard => dashboard.totalAmount
);

export const getTransactionToggle = createSelector(
  [getTransactionList],
  dashboard => dashboard.transactionToggle
);
