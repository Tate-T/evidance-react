import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	firstName: null,
	lastName: null,
	middleName: null,
	birthMonth: null,
	birthYear: null,
	birthDay: null,
	gender: null,
	password: null,
	email: null,
	id: null,
	token: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action) {
			state.firstName = action.payload.firstName;
			state.lastName = action.payload.lastName;
			state.middleName = action.payload.middleName;
			state.birthMonth = action.payload.birthMonth;
			state.birthYear = action.payload.birthYear;
			state.birthDay = action.payload.birthDay;
			state.gender = action.payload.gender;
			state.password = action.payload.password;
			state.email = action.payload.email;
			state.id = action.payload.id;
			state.token = action.payload.token;
		},
		removeUser(state) {
			state.firstName = null;
			state.lastName = null;
			state.middleName = null;
			state.birthMonth = null;
			state.birthYear = null;
			state.birthDay = null;
			state.gender = null;
			state.email = null;
			state.id = null;
			state.token = null;
		},
	},
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
