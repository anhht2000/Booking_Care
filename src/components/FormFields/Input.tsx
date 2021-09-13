import { Box, TextField } from "@material-ui/core";
import React, { InputHTMLAttributes, ReactElement, useRef, useEffect } from "react";
import { Control, useController } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  control: any;
}

export default function Input({ name, label, control, ...otherProps }: InputProps): ReactElement {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });
  // const input = useRef(null);
  // useEffect(() => {
  //   console.log(input?.current);
  // }, [value]);

  return (
    <Box mt={2}>
      <TextField
        fullWidth
        name={name}
        size='small'
        variant='outlined'
        color={"primary"}
        placeholder={label}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={invalid}
        inputRef={ref}
        helperText={error?.message}
        inputProps={otherProps}
      />
    </Box>
  );
}
