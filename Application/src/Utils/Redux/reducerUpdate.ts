import { assign } from 'lodash';

export function reducerUpdate<T extends object>(existingState: T, newState: Partial<T>): T {
	return assign({}, existingState, newState);
}

export function nestedReducerUpdate<T extends object, K extends keyof T>(
	existingState: T,
	prop: K,
	newValue: Partial<T[K]>,
) {
	const newState = assign({}, existingState);
	newState[prop] = assign({}, newState[prop], newValue);

	return newState;
}