import { all } from "redux-saga/effects";
import authSaga from "../features/auth/authSaga";
import homeSaga from "../features/home/homeSaga";

export default function* rootSaga() {
  yield all([authSaga(), homeSaga()]);
}
