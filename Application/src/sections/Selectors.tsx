import { createSelector } from "reselect";
import { GlobalState } from "../GlobalReducer";

const taskSelector = (state: GlobalState) => state.app.taskData;

export const getTasks = createSelector(
		taskSelector,
		taskState => taskState.tasks
);

export const getColumns = createSelector(
		taskSelector,
		taskState => taskState.columns
);