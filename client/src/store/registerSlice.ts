import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { set } from 'lodash';

export interface RegisterState {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

const initialState: RegisterState = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    resetRegister: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.password = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setFirstName,
  setLastName,
  setUsername,
  setEmail,
  setPassword,
  resetRegister,
} = registerSlice.actions;

export default registerSlice.reducer;
