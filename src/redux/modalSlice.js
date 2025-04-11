import { createSlice } from "@reduxjs/toolkit";

const modalInitialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: modalInitialState,
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
