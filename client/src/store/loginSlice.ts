import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
  username: string;
  email: string;
  password: string;
}

const initialState: LoginState = {
  username: "",
  email: "",
  password: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    resetLogin: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export const { setUsername, setEmail, setPassword, resetLogin } =
  loginSlice.actions;

export default loginSlice.reducer;
