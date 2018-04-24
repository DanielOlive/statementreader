import { combineReducers } from "redux";
import * as types from "../../types";

const transactionInitialState = {
  fetching: true,
  error: null
};

const transactionlist = (state = transactionInitialState, action) => {
  switch (action.type) {
    case types.API_CALL_REQUEST:
      console.log("API_TRANSACTIONS_REQUEST");
      return state;
      break;
    case types.API_CALL_SUCCESS:
      console.log("API_CALL_SUCCESS");
      return {
        transactions: action.transactions,
        fetching: null
      };
      break;
    case types.API_CALL_FAILURE:
      console.log("API_TRANSACTIONS_FAILURE");
      return state;
      break;
    default:
      return state;
  }
};

const sumInitialState = 0.0;

const totalAmount = (state = sumInitialState, action) => {
  switch (action.type) {
    case types.INCREMENT_AMOUNT:
      return action.amount;
      break;
    case types.DECREMENT_AMOUNT:
      return state;
      break;
    default:
      return state;
  }
};
const dashboard = combineReducers({
  transactionlist,
  totalAmount
});

export default dashboard;
