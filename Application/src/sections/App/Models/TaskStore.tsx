export enum STATUS {
	NOT_COMPLETED = "Not Completed", COMPLETED = "Completed"
}

export interface NewTask {
	name: string;
}

export interface Task {
	name: string;
	created: number;
	status: STATUS;
	uuid: string;
}

export interface TaskStoreState {
	tasks: Task[];
	columns: string[];
	uid: string;
	// isFetching: boolean;
	hasSent: boolean;
	hasSucceeded: boolean;
	hasErrored: boolean;
}