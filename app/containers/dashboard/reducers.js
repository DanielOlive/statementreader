import { combineReducers } from "redux";
import * as types from "../../types";

/* const transactionlist = (state = {
  fetching: true,
  error: null
}, action) => {
  switch (action.type) {
    case types.API_CALL_REQUEST:
      console.log(types.API_CALL_REQUEST);
      return state;
      break;
    case types.API_CALL_SUCCESS:
      console.log(types.API_CALL_SUCCESS);
      return {
        transactions: action.transactions,
        fetching: null
      };
      break;
    case types.API_CALL_FAILURE:
      console.log(types.API_CALL_FAILURE);
      return state;
      break;
    default:
      return state;
  }
}; */
const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.API_CALL_REQUEST:
      return true;
    case types.API_CALL_SUCCESS:
      return false;
    default:
      return state;
  }
};

const transactions = (state = [], action) => {
  switch (action.type) {
    case types.API_CALL_SUCCESS:
      return action.transactions;
    default:
      return state;
  }
};

const totalAmount = (state = "0.00", action) => {
  switch (action.type) {
    case types.INCREMENT_AMOUNT:
      return action.amount;
      break;
    case types.DECREMENT_AMOUNT:
      return action.amount;
      break;
    default:
      return state;
  }
};

const transactionToggle = (state = false, action) => {
  switch (action.type) {
    case types.TRANSACTION_TOGGLE:
      return action.toggle;
      break;
    default:
      return state;
  }
};

const dashboard = combineReducers({
  transactions,
  isFetching,
  totalAmount,
  transactionToggle
});

export default dashboard;
