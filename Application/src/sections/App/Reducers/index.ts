import { combineReducers } from "redux";
import { TasksReducer } from "./Tasks";


export const AppReducer = combineReducers({
	taskData: TasksReducer,
});