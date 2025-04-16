import { createSlice } from '@reduxjs/toolkit';

const initialState = [
	{
		login: 'ya',
		password: '123123',
	},
];

const loginSlice = createSlice({
	name: 'login',
	initialState: initialState,
	reducers: {},
});

export default loginSlice.reducer;
