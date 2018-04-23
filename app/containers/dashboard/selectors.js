import { createSelector } from "reselect";

const getTransactionList = state => state.transactionlist;

const getTransactions = createSelector(
  [getTransactionList],
  transactions => transactions.transactions
);

export default getTransactions;
