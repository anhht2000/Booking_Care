import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { userApi } from "../../api/userApi";
import { AllCode } from "../../typeModels/allCode";
import { IpostUser } from "../../typeModels/user";
import { allCodeApi } from "./../../api/allCodeApi";
import { Iresponse, IresponseLogin } from "./../../typeModels/auth";
import {
  actionCreateUser,
  actionCreateUserFail,
  actionCreateUserSuccess,
  actionEditUser,
  actionEditUserFail,
  actionEditUserSuccess,
  actionGetGender,
  actionGetGenderFail,
  actionGetGenderSuccess,
  actionGetPosition,
  actionGetPositionFail,
  actionGetPositionSuccess,
  actionGetRole,
  actionGetRoleFail,
  actionGetRoleSuccess,
  actionGetUser,
  actionGetUserFail,
  actionGetUserSuccess,
} from "./homeSlice";

function* handleGetUser() {
  try {
    const data: IresponseLogin = yield call(userApi.getAllUsers);
    yield put(actionGetUserSuccess(data));
  } catch (error) {
    yield put(actionGetUserFail());
  }
}
function* handleCreateUser(action: PayloadAction<IpostUser>) {
  try {
    const data: IresponseLogin = yield call(userApi.createUser, action.payload);
    yield put(actionCreateUserSuccess(data));
    yield put(actionGetUser());
  } catch (error) {
    yield put(actionCreateUserFail());
  }
}
function* handleEditUser(action: PayloadAction<IpostUser>) {
  try {
    const data: IresponseLogin = yield call(userApi.editUser, action.payload);
    yield put(actionEditUserSuccess(data));
    yield put(actionGetUser());
  } catch (error) {
    yield put(actionEditUserFail());
  }
}
function* handleGetGender() {
  try {
    const data: Iresponse<AllCode> = yield call(allCodeApi.getGender);
    yield put(actionGetGenderSuccess(data.data));
  } catch (error) {
    yield put(actionGetGenderFail());
  }
}
function* handleGetRole() {
  try {
    const data: Iresponse<AllCode> = yield call(allCodeApi.getRole);
    yield put(actionGetRoleSuccess(data.data));
  } catch (error) {
    yield put(actionGetRoleFail());
  }
}
function* handleGetPosition() {
  try {
    const data: Iresponse<AllCode> = yield call(allCodeApi.getPosition);
    yield put(actionGetPositionSuccess(data.data));
  } catch (error) {
    yield put(actionGetPositionFail());
  }
}
export default function* homeSaga() {
  yield takeLatest(actionGetUser.type, handleGetUser);
  yield takeLatest(actionCreateUser.type, handleCreateUser);
  yield takeLatest(actionEditUser.type, handleEditUser);
  yield takeLatest(actionGetGender.type, handleGetGender);
  yield takeLatest(actionGetRole.type, handleGetRole);
  yield takeLatest(actionGetPosition.type, handleGetPosition);
}
