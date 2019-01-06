import * as Models from './TaskStore';
import { TaskStoreState } from "./TaskStore";

export type AppState = {
	taskData: TaskStoreState
};

export default Models;