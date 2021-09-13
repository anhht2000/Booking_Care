import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, FormHelperText, InputLabel, Typography } from "@material-ui/core";
import React, { ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useAppSelector } from "../../../app/hooks";
import Input from "../../../components/FormFields/Input";
import SelectField from "../../../components/FormFields/SelectField";
import { IpostUser } from "../../../typeModels/user";
import { getGender, getPosition, getRole } from "../homeSlice";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

interface UserFormProps {
  initialValue: IpostUser;
  err: string;
  type: string;
  handleClose: () => void;
  isOpenPreview: boolean;
  setIsOpenPreview: (value: boolean) => void;
  onSubmit: (value: IpostUser) => void;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter your user name")
    .matches(
      /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/,
      "Email is invalid type"
    ),
  // password: yup.string().required("Please enter your Password"),
  firstName: yup.string().required("Please enter your FirstName"),
  lastName: yup.string().required("Please enter your LastName"),
  address: yup.string().required("Please enter your Address"),
  phoneNumber: yup.string().required("Please enter your Phone Number"),
});

export default function UserForm({
  initialValue,
  onSubmit,
  err,
  handleClose,
  isOpenPreview,
  setIsOpenPreview,
  type,
}: UserFormProps): ReactElement {
  const [previewImage, setPreviewImage] = useState<string>("");

  const { control, handleSubmit, register, getValues } = useForm({
    defaultValues: initialValue,
    resolver: yupResolver(schema),
  });
  const gender = useAppSelector(getGender);
  const role = useAppSelector(getRole);
  const position = useAppSelector(getPosition);
  // console.log("image value ", getValues("image"));
  const handleOnchange = (e: any) => {
    const imgae: string = URL.createObjectURL(e.target.files[0]);
    if (imgae) {
      setPreviewImage(imgae);
    }
  };

  if (type === "add") {
    return (
      <Box className='modal__form-container'>
        <form onSubmit={handleSubmit(onSubmit)} className='modal__form'>
          <Typography variant='h4' className='form__title'>
            Form Add User
          </Typography>
          <Box className='box__form'>
            <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
              <InputLabel>Email</InputLabel>
              <Input name='email' label='Email' control={control} className='input__email' />
            </Box>
            <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
              <InputLabel>Password</InputLabel>
              <Input
                name='password'
                label='Password'
                control={control}
                className='input__email'
                type='password'
              />
            </Box>
            <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
              <InputLabel>First Name</InputLabel>
              <Input name='firstName' label='First Name' control={control} />
            </Box>
            <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
              <InputLabel>Last Name</InputLabel>
              <Input name='lastName' label='Last Name' control={control} />
            </Box>
            <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
              <InputLabel>Address</InputLabel>
              <Input name='address' label='Address' control={control} />
            </Box>
            <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
              <InputLabel>Gender</InputLabel>
              <SelectField
                name='gender'
                label='Gender'
                data={gender}
                control={control}
                className='form__select'
              />
            </Box>
            <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
              <InputLabel>Phone Number</InputLabel>
              <Input name='phoneNumber' label='Phone Number' control={control} />
            </Box>
            <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
              <InputLabel>Position</InputLabel>
              <SelectField
                name='position'
                label='Position'
                data={position}
                control={control}
                className='form__select'
              />
            </Box>
            <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
              <InputLabel>Role</InputLabel>
              <SelectField
                name='role'
                label='Role'
                data={role}
                control={control}
                className='form__select'
              />
            </Box>
            <Box
              display='flex'
              alignItems='center'
              justifyContent='space-between'
              my={2}
              overflow='hidden'
            >
              <InputLabel htmlFor='image' color='primary' id='label-image'>
                Upload <i className='fas fa-upload'></i>
              </InputLabel>
              <input
                type='file'
                name='image'
                id='image'
                hidden
                {...register("image")}
                onChange={(e) => {
                  handleOnchange(e);
                }}
              />
              {previewImage && (
                <div id='preview-Image'>
                  <img
                    src={previewImage}
                    alt=''
                    onClick={() => {
                      // handleClose();
                      setIsOpenPreview(true);
                    }}
                  />
                </div>
              )}
              {isOpenPreview && (
                <Lightbox mainSrc={previewImage} onCloseRequest={() => setIsOpenPreview(false)} />
              )}
            </Box>
          </Box>
          <FormHelperText color='secondary' className='text-note'>
            {err}
          </FormHelperText>
          <Button variant='contained' color='primary' type='submit'>
            Add User
          </Button>
        </form>
      </Box>
    );
  }
  return (
    <Box className='modal__form-container'>
      <form onSubmit={handleSubmit(onSubmit)} className='modal__form'>
        <Typography variant='h4' className='form__title'>
          Form Edit User
        </Typography>
        <Box className='box__form'>
          <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
            <InputLabel>Email</InputLabel>
            <Input name='email' label='Email' control={control} className='input__email' />
          </Box>
          <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
            <InputLabel>Password</InputLabel>
            <Input
              disabled
              name='password'
              label='Password'
              control={control}
              className='input__email'
              type='password'
            />
          </Box>

          <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
            <InputLabel>First Name</InputLabel>
            <Input name='firstName' label='First Name' control={control} />
          </Box>
          <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
            <InputLabel>Last Name</InputLabel>
            <Input name='lastName' label='Last Name' control={control} />
          </Box>
          <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
            <InputLabel>Address</InputLabel>
            <Input name='address' label='Address' control={control} />
          </Box>
          <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
            <InputLabel>Gender</InputLabel>
            <SelectField
              name='gender'
              label='Gender'
              control={control}
              className='form__select'
              data={gender}
            />
          </Box>
          <Box display='flex' alignItems='center' justifyContent='space-between' my={2}>
            <InputLabel>Phone Number</InputLabel>
            <Input name='phoneNumber' label='Phone Number' control={control} />
          </Box>
        </Box>
        {/* / */}
        <Input type='hidden' name='id' label='id' control={control} />
        <FormHelperText color='secondary' className='text-note'>
          {err}
        </FormHelperText>
        <Button variant='contained' color='primary' type='submit'>
          Add User
        </Button>
      </form>
    </Box>
  );
}
