import { push } from "connected-react-router";
import moment from "moment";
import { SagaIterator } from "redux-saga";
import { call, fork, put, select, take, takeLatest } from "redux-saga/effects";
import uniqid from 'uniqid';
import * as Actions from '../Actions';
import { STATUS, Task } from "../Models/TaskStore";
import { getTasks } from "../../Selectors";
import { API_URL } from "../../../Utils/API";

// Fetch tasks
export function* fetchTasks() {
	yield put({ type: 'FETCH_TASK_STARTED' });

	try {
		const response = yield call(fetch, `${API_URL}/tasks`);
		console.log(response);
		// const reqBody = response.json();
		// console.log(reqBody);
	} catch (e) {
		console.log(e);
		yield put({ type: 'FETCH_TASK_FAILED' });
		return;
	}
}

// Creates the task object
export function* createTask(action) {
	yield put({ type: 'CREATE_TASK_STARTED' });

	const task: Task = {
		name: action.payload.name,
		created: moment().unix(),
		status: STATUS.NOT_COMPLETED,
		uuid: uniqid()
	};

	yield fork(postTask, task);
	yield put(push('/'));
}

// Dispatches the success action with the new task object as a param
export function* postTask(task: Task) {
	yield put(Actions.CreateTaskSuccess(task));
}

// Fetches and modifies the corresponding task
export function* completeTask(action) {
	console.log(action.payload);
}

// Listens for all sagas
export function* AppSagas(): SagaIterator {
	yield takeLatest(Actions.FetchTasks, fetchTasks);
	yield takeLatest(Actions.CreateTask, createTask);
	yield takeLatest(Actions.CompleteTask, completeTask);
}