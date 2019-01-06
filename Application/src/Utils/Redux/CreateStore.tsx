import { applyMiddleware, createStore } from "redux";
import GlobalReducer from "../../GlobalReducer";
import { History } from "../React-Router";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from 'redux-saga';
import { AppSagas } from "../../sections/App/Sagas";
import { persistStore } from "redux-persist";
import { persistedReducer } from "../Redux-Persist";

const SagaMiddleware = createSagaMiddleware();

// Middleware declaration
const Middlewares = [
	routerMiddleware(History),
	SagaMiddleware
];

const persistedGlobalReducer = persistedReducer(GlobalReducer(History));

const toPersistStore = createStore(
		persistedGlobalReducer,
		composeWithDevTools(
				applyMiddleware(...Middlewares)
		)
);

SagaMiddleware.run(AppSagas);

export default () => {
	let store = toPersistStore;
	let persistor = persistStore(store);
	return { store, persistor };
};