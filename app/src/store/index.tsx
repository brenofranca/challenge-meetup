import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import { createStore, applyMiddleware } from "redux";
import rootSaga from "./rootSaga";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;
