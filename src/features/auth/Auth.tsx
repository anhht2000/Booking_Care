import { Box, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";
import { userApi } from "../../api/userApi";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { IpostParams } from "../../typeModels/auth";
import { actionSetLogin, getLogin } from "../home/homeSlice";
import { actionLogin, getMess } from "./authSlice";
import FormLogin from "./component/FormLogin";
import "./css/style.scss";
import back from "./image/background_login.jpg";

export default function Auth(): ReactElement {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const message = useAppSelector(getMess);
  const isLogin = useAppSelector(getLogin);
  if (isLogin) {
    history.push("/home");
  }

  // const isUserLogin = localStorage.getItem("user");
  // if (isUserLogin) {
  //   dispatch(actionSetLogin());
  // }

  const initialValue: IpostParams = {
    userName: "",
    password: "",
  };
  const handleSubmit = async (value: IpostParams) => {
    // {value.userName, value.password}
    dispatch(actionLogin(value));
  };
  return (
    <>
      <div
        className='login__container'
        style={{ background: `url('${back}')center/cover no-repeat` }}
      ></div>
      {/* form hanlde  */}
      <FormLogin initialValue={initialValue} onSubmit={handleSubmit} message={message} />
    </>
  );
}
