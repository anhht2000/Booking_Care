import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./../../app/store";
import { IpostParams, IresponseLogin, IresponseUser } from "./../../typeModels/auth";

interface IinitialValue {
  isLoading: boolean;
  message: string;
  data: IresponseUser[];
}
const initialValue: IinitialValue = {
  isLoading: false,
  message: "",
  data: [],
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialValue,
  reducers: {
    actionLogin: (state, action: PayloadAction<IpostParams>) => {
      state.isLoading = true;
      state.message = "";
    },
    actionLoginSuccess: (state, action: PayloadAction<IresponseLogin>) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.message = action.payload.message;
    },
    actionLoginFail: (state, action) => {
      state.isLoading = false;
    },
    actionLogout: (state) => {
      state.isLoading = false;
      state.data = [];
      state.message = "";
    },
  },
});

//aciton
export const { actionLogin, actionLoginSuccess, actionLoginFail, actionLogout } = authSlice.actions;
//selector
export const getLoad = (state: RootState) => state.auth.isLoading;
export const getData = (state: RootState) => state.auth.data;
export const getMess = (state: RootState) => state.auth.message;
//reducer
const authReducer = authSlice.reducer;
export default authReducer;
