import createActionFactory from 'typescript-fsa';
import Models from '../Models';

const createAction = createActionFactory('Tasks');

// Task Fetch
export const FetchTasks = createAction('FETCH_TASKS');
export const FetchTasksStarted = createAction('FETCH_TASK_STARTED');
export const FetchTasksFailure = createAction('FETCH_TASK_FAILURE');

// Task Create Actions
export const CreateTask = createAction<Models.NewTask>('CREATE_TASK');
export const CreateTaskStarted = createAction('CREATE_TASK_STARTED');
export const CreateTaskSuccess = createAction<Models.Task>('CREATE_TASK_SUCCESS');
export const CreateTaskFailure = createAction('CREATE_TASK_FAILURE');

// Complete task actions
export const CompleteTask = createAction<Models.Task>('COMPLETE_TASK');
