import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducers";

/* 
import createSagaMiddleware from "redux-saga'";
import rootSaga from "./sagas/sagas";

//create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(rootSaga);

export default store; */

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
/* eslint-enable */

export default store;
