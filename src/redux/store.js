import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import userReducer from './userSlice';

export const store = configureStore({
	reducer: {
		modal: modalReducer,
		user: userReducer,
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
