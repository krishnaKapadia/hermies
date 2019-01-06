import { reducerWithInitialState } from "typescript-fsa-reducers";
import { reducerUpdate } from "../../../Utils/Redux/reducerUpdate";
import { CompleteTask, CreateTaskFailure, CreateTaskStarted, CreateTaskSuccess } from "../Actions";
import { STATUS, Task, TaskStoreState } from "../Models/TaskStore";
import moment from 'moment';

const HeaderData: string[] = [
	'Task', 'Created', 'Status', 'Options'
];

const TaskData: Task[] = [
	{ name: 'Create Task App!', created: moment().unix(), status: STATUS.COMPLETED, uuid: 'rqygausdgb78123'  }
];

const INITIAL_STATE: TaskStoreState = {
	tasks: TaskData,
	columns: HeaderData,
	uid: 'DEFAULT_UID',
	// isFetching: false,
	hasSent: false,
	hasSucceeded: false,
	hasErrored: false,
};

export const TasksReducer = reducerWithInitialState(INITIAL_STATE)
		.case(CreateTaskStarted, (state: TaskStoreState) =>
				reducerUpdate(state,
				{
					hasSent: true,
					hasSucceeded: false
				})
		)
		.case(CreateTaskSuccess, (state: TaskStoreState, payload: Task) => {
			let tasks = state.tasks;
			tasks.push(payload);

			return reducerUpdate(state, {
				tasks,
				hasSent: true,
				hasSucceeded: true
			});
		})
		.case(CreateTaskFailure, state => {
			return reducerUpdate(state, {
				hasSent: true,
				hasSucceeded: false,
				hasErrored: true
			});
		})
		.case(CompleteTask, (state, payload: Task) => {
			let tasks: Task[] = state.tasks;

			tasks.map((task, idx) => {
				if(task.uuid === payload.uuid) {
					tasks[idx].status = STATUS.COMPLETED;
				}
			});

			return reducerUpdate(state, {
				tasks
			});
		});
// });