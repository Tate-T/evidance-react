import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import loginReducer from './loginSlice';

export const store = configureStore({
	reducer: {
		modal: modalReducer,
		login: loginReducer,
	},
});

// import { configureStore } from "@reduxjs/toolkit";
// import { filtersReducer, tasksReducer } from "./reducer";

// export const store = configureStore({
//   reducer: {
//     tasks: tasksReducer,
//     filters: filtersReducer,
//   },
// });
