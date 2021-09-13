import { PayloadAction } from "@reduxjs/toolkit";
import { call, takeLatest, put } from "redux-saga/effects";
import { userApi } from "../../api/userApi";
import { IpostParams, IresponseLogin } from "../../typeModels/auth";
import { actionSetLogin, actionSetLogout } from "../home/homeSlice";
import { actionLogin, actionLoginFail, actionLoginSuccess, actionLogout } from "./authSlice";

function* handleLogin(action: PayloadAction<IpostParams>) {
  try {
    const data: IresponseLogin = yield call(
      userApi.postLogin,
      action.payload.userName,
      action.payload.password
    );
    yield put(actionLoginSuccess(data));
    const isLogin = localStorage.getItem("persist:auth");
    if (isLogin) {
      yield put(actionSetLogin());
    }
  } catch (error) {
    console.log(error);

    yield put(actionLoginFail(error));
  }
}
function* handleLogout() {
  yield put(actionSetLogout());
}
export default function* authSaga() {
  yield takeLatest(actionLogin.type, handleLogin);
  yield takeLatest(actionLogout.type, handleLogout);
}
