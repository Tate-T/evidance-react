import { createSlice } from "@reduxjs/toolkit";
import users from "../data/doctors.json";

const initialState = {
  user: null,
  error: null,
  users: users,
};

const generateUniqueNumber = (users) => {
  let newNumber;
  do {
    const randomDigits = Math.floor(10000 + Math.random() * 90000);
    newNumber = `EV-0${randomDigits}`;
  } while (users.some((user) => user.number === newNumber));
  return newNumber;
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
          fullName: foundUser.fullName,
          birthDate: foundUser.birthDate,
          gender: foundUser.gender,
          number: foundUser.number,
          email: foundUser.email,
          password: foundUser.password,
          numTel: foundUser.numTel,
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
    register: (state, action) => {
      const { fullName, birthDate, gender, email, password, numTel } =
        action.payload;

      const existingUser = state.users.find((user) => user.email === email);
      if (existingUser) {
        state.error = "Користувач з таким email вже існує";
        return;
      }

      const number = generateUniqueNumber(state.users);

      const newUser = {
        fullName,
        birthDate,
        gender,
        number,
        email,
        password,
        numTel,
      };

      state.users.push(newUser);
      state.user = newUser;
      state.error = null;
    },
  },
});

export const { login, logout, register } = authSlice.actions;
export default authSlice.reducer;
