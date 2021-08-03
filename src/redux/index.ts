import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tableReducer from './table-reducer';

const rootReducer = combineReducers({
    table: tableReducer
});

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;