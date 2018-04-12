import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga'";
import reducer from "./reducers/reducers";
import rootSaga from "./sagas/sagas";

//create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
