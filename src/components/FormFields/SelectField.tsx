import { FormControl, Select } from "@material-ui/core";
import React, { InputHTMLAttributes, ReactElement } from "react";
import { useController } from "react-hook-form";
import { AllCode } from "../../typeModels/allCode";

interface SelectFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  data: Array<AllCode>;
  control: any;
}

export default function SelectField({
  name,
  label,
  control,
  data,
  ...otherProps
}: SelectFieldProps): ReactElement {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });
  // const {
  //   field: { value, onChange, onBlur, ref },
  // } = useController({
  //   name,
  //   control,
  // });
  return (
    <FormControl variant='outlined' size='small'>
      {/* <InputLabel id='demo-simple-select-outlined-label'>{label}</InputLabel> */}
      <Select
        native
        id='demo-simple-select-outlined'
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        inputRef={ref}
        // label={label}
        inputProps={otherProps}
        // {otherProps}
      >
        <option value=''>{"Choose " + name}</option>
        {data?.map((element) => {
          return (
            <option key={element.id} value={element.key}>
              {element.valueVi}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );
}
