import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const persistConfig = {
	key: "root",
	storage
};

export const persistedReducer = (rootReducer) => (
		persistReducer(persistConfig, rootReducer)
);