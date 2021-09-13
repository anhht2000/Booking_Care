import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormHelperText,
  Typography,
} from "@material-ui/core";
import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";
import Input from "../../../components/FormFields/Input";
import InputPassword from "../../../components/FormFields/InputPassword";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IpostParams } from "../../../typeModels/auth";

const schema = yup.object().shape({
  userName: yup
    .string()
    .required("You must typing user name to sign in")
    .min(4, "Please enter min 4 character")
    .typeError("You must enter letter"),
  password: yup
    .string()
    .required("You must typing password to sign in")
    .typeError("You must enter letter"),
});

interface FormLoginProps {
  message?: string;
  initialValue: IpostParams;
  onSubmit: (value: IpostParams) => void;
}

export default function FormLogin({
  initialValue,
  onSubmit,
  message,
}: FormLoginProps): ReactElement {
  const { control, handleSubmit } = useForm({
    defaultValues: initialValue,
    resolver: yupResolver(schema),
  });
  return (
    <div className='form_login'>
      <form onSubmit={handleSubmit(onSubmit)} className='form__handle'>
        <Card variant='outlined'>
          <CardContent>
            <Box textAlign='left'>
              <Typography variant='h5'>Sign In</Typography>
              <Typography variant='caption'>Please sign in to use my services</Typography>
              <Input name='userName' label='User Name' control={control} />
              <InputPassword name='password' label='PassWord' control={control} />
            </Box>
            <FormHelperText error>{message}</FormHelperText>
          </CardContent>
          <CardActions className='button__group'>
            <Button variant='contained' color={"primary"} type='submit' fullWidth>
              Login
            </Button>
            <Typography variant='caption'>-OR-</Typography>
            <Button variant='contained' color={"primary"} fullWidth className='button_auth'>
              <FacebookIcon />
              Login with facebook
            </Button>
            <Button
              variant='contained'
              color={"primary"}
              fullWidth
              className='button_auth'
              id='btn-twitter'
            >
              <TwitterIcon />
              Login with twitter
            </Button>
          </CardActions>
        </Card>
      </form>
    </div>
  );
}
