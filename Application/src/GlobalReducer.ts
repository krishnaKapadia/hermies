import { combineReducers } from "redux";
import { AppState } from "./sections/App/Models";
import { AppReducer } from "./sections/App/Reducers";
import { connectRouter } from "connected-react-router";

export type GlobalState = {
	app: AppState
};

export default (history) => combineReducers({
	app: AppReducer,
	router: connectRouter(history)
});