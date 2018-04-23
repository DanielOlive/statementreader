import { combineReducers } from "redux";

import * as types from "../types";

const initialState = {
  fetching: true,
  error: null
};

const transactionlist = (state = initialState, action) => {
  switch (action.type) {
    case types.API_CALL_REQUEST:
      console.log("API_TRANSACTIONS_REQUEST");
      return state; /* { ...state,
        fetching: true,
        error: null
      }; */
      break;
    case types.API_CALL_SUCCESS:
      console.log("API_CALL_SUCCESS");

      return {
        transactions: action.transactions,
        fetching: null
      }; /* ({ ...state,
        fetching: false,
        transactions: action.transaction
      }) */
      break;
    case types.API_CALL_FAILURE:
      console.log("API_TRANSACTIONS_FAILURE");
      return state; /* { ...state,
        fetching: false,
        dog: null,
        error: action.error
      }; */
      break;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  transactionlist,
  user: () => ({})
});

export default rootReducer;
