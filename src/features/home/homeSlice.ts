import { AllCode } from "./../../typeModels/allCode";
import { IresponseLogin, IresponseUser } from "./../../typeModels/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./../../app/store";
import { IpostUser } from "../../typeModels/user";

interface IinitialValue {
  isLogin: boolean;
  isLoading: boolean;
  message: string;
  errCode: number;
  gender: Array<AllCode>;
  role: Array<AllCode>;
  position: Array<AllCode>;
  data: IresponseUser[];
}
const initialValue: IinitialValue = {
  isLogin: false,
  isLoading: false,
  gender: [],
  role: [],
  position: [],
  message: "",
  errCode: 0,
  data: [],
};
const homeSlice = createSlice({
  name: "home",
  initialState: initialValue,
  reducers: {
    actionGetUser: (state) => {
      state.isLoading = true;
      state.errCode = 2;
    },
    actionGetUserSuccess: (state, action: PayloadAction<IresponseLogin>) => {
      state.isLoading = false;
      if (action.payload.errCode === 0) {
        state.data = action.payload.data;
      }
      if (action.payload.errCode !== 0) {
        state.message = action.payload.message;
      }
    },
    actionGetUserFail: (state) => {
      state.isLoading = false;
    },
    //create
    actionCreateUser: (state, action: PayloadAction<IpostUser>) => {
      state.isLoading = true;
    },
    actionCreateUserSuccess: (state, action: PayloadAction<IresponseLogin>) => {
      state.isLoading = false;
      state.errCode = action.payload.errCode;
      if (action.payload.errCode === 0) {
        state.data = action.payload.data;
      }
      if (action.payload.errCode !== 0) {
        state.message = action.payload.message;
      }
    },
    actionCreateUserFail: (state) => {
      state.isLoading = false;
    },
    //edit
    actionEditUser: (state, action: PayloadAction<IpostUser>) => {
      state.isLoading = true;
    },
    actionEditUserSuccess: (state, action: PayloadAction<IresponseLogin>) => {
      state.isLoading = false;
      state.errCode = action.payload.errCode;
      if (action.payload.errCode === 0) {
        state.data = action.payload.data;
      }
      if (action.payload.errCode !== 0) {
        state.message = action.payload.message;
      }
    },
    actionEditUserFail: (state) => {
      state.isLoading = false;
    },
    //action get all code
    actionGetGender: (state) => {
      state.isLoading = true;
    },
    actionGetGenderSuccess: (state, action: PayloadAction<Array<AllCode>>) => {
      state.isLoading = false;
      state.gender = action.payload;
    },
    actionGetGenderFail: (state) => {
      state.isLoading = false;
    },
    //role
    actionGetRole: (state) => {
      state.isLoading = true;
    },
    actionGetRoleSuccess: (state, action: PayloadAction<Array<AllCode>>) => {
      state.isLoading = false;
      state.role = action.payload;
    },
    actionGetRoleFail: (state) => {
      state.isLoading = false;
    },
    //position
    actionGetPosition: (state) => {
      state.isLoading = true;
    },
    actionGetPositionSuccess: (state, action: PayloadAction<Array<AllCode>>) => {
      state.isLoading = false;
      state.position = action.payload;
    },
    actionGetPositionFail: (state) => {
      state.isLoading = false;
    },
    //
    actionSetLogin: (state) => {
      state.isLogin = true;
    },
    actionSetLogout: (state) => {
      state.isLogin = false;
    },
    actionSetErrMess: (state) => {
      state.message = "";
    },
  },
});

//aciton
export const {
  actionSetLogin,
  actionSetLogout,
  actionSetErrMess,
  actionGetUser,
  actionGetUserSuccess,
  actionGetUserFail,
  actionCreateUser,
  actionCreateUserSuccess,
  actionCreateUserFail,
  actionEditUser,
  actionEditUserSuccess,
  actionEditUserFail,
  actionGetGender,
  actionGetGenderSuccess,
  actionGetGenderFail,
  actionGetRole,
  actionGetRoleSuccess,
  actionGetRoleFail,
  actionGetPosition,
  actionGetPositionSuccess,
  actionGetPositionFail,
} = homeSlice.actions;
//selector
export const getLogin = (state: RootState) => state.home.isLogin;
export const getUser = (state: RootState) => state.home.data;
export const getLoading = (state: RootState) => state.home.isLoading;
export const getMess = (state: RootState) => state.home.message;
export const getErrCode = (state: RootState) => state.home.errCode;
export const getGender = (state: RootState) => state.home.gender;
export const getRole = (state: RootState) => state.home.role;
export const getPosition = (state: RootState) => state.home.position;
//reducer
const homeReducer = homeSlice.reducer;
export default homeReducer;
