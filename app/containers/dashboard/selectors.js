import { createSelector } from "reselect";

const getTransactionList = state => state.dashboard;
const getTransactions = createSelector(
  [getTransactionList],
  dashboard => dashboard.transactionlist.transactions
);

export default getTransactions;
