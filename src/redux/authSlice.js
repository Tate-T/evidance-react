import { createSlice } from "@reduxjs/toolkit";
import users from "../data/users.json";

const initialState = {
  user: null,
  error: null,
  users: users,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { number, password } = action.payload;

      const foundUser = state.users.find(
        (user) =>
          user.number.trim().toLowerCase() === number.trim().toLowerCase() &&
          user.password.trim() === password.trim()
      );

      if (foundUser) {
        state.user = {
          number: foundUser.number,
          name: foundUser.name,
          email: foundUser.email,
        };
        state.error = null;
      } else {
        state.user = null;
        state.error = "Невірний логін або пароль";
      }
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
