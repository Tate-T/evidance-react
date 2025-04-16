import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { number, password } = action.payload;

      if (number === "EV-012345" && password === "password123") {
        state.user = { number };
        state.token = "mock-token";
      } else {
        state.user = null;
        state.token = null;
        alert("Невірний логін або пароль");
      }
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
