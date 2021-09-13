import {
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
import { AccountCircle, Visibility, VisibilityOff } from "@material-ui/icons";
import React, { ReactElement, useState } from "react";
import { Control, useController } from "react-hook-form";

interface InputPasswordProps {
  name: string;
  label: string;
  control: any;
}

export default function InputPassword({ name, label, control }: InputPasswordProps): ReactElement {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });
  const [isShowPass, setisShowPass] = useState(false);
  return (
    <Box mt={2}>
      <FormControl fullWidth size='small'>
        {/* <InputLabel htmlFor='input-password' color='secondary'>
          {label}
        </InputLabel> */}
        <OutlinedInput
          id='input-password'
          name={name}
          placeholder={label}
          color={"primary"}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={invalid}
          inputRef={ref}
          aria-describedby='text-pass-error'
          type={isShowPass ? "text" : "password"}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                size='small'
                aria-label='toggle password visibility'
                onClick={() => setisShowPass(!isShowPass)}
              >
                {isShowPass ? <Visibility fontSize='small' /> : <VisibilityOff fontSize='small' />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText id='text-pass-error'>{error?.message}</FormHelperText>
      </FormControl>
    </Box>
  );
}
