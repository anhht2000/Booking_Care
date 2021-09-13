import { AppBar, Box, Button, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import React, { ReactElement, useEffect, useState, useRef } from "react";
import { FormattedMessage } from "react-intl";
import { NavLink, useHistory } from "react-router-dom";
import { userApi } from "../../api/userApi";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import SimpleModal from "../../components/Common/SimpleModal";
import { IresponseLogin } from "../../typeModels/auth";
import { IpostUser } from "../../typeModels/user";
import { actionLogout, getData } from "../auth/authSlice";
import { actionSetlanguage, getLanguage, Language } from "../initialApp/appSlice";
import "./asset/css/style.scss";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import {
  actionGetGender,
  actionGetPosition,
  actionGetRole,
  actionGetUser,
  actionSetErrMess,
  getErrCode,
  getLogin,
  getMess,
  getUser,
} from "./homeSlice";

export default function Home(): ReactElement {
  useAppSelector(getData);
  const currentUser = useAppSelector(getData);
  const lang = useAppSelector(getLanguage);
  const errMess = useAppSelector(getMess);
  const errCode = useAppSelector(getErrCode);
  const isLogin = useAppSelector(getLogin);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [isOpenPreview, setIsOpenPreview] = useState(false);

  const users = useAppSelector(getUser);
  if (!isLogin) {
    history.push("/login");
  }

  //modal
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    dispatch(actionSetErrMess());
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenEdit = () => {
    setOpenEdit(true);
    dispatch(actionSetErrMess());
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    setInitialValue({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      gender: "",
      role: "",
      position: "",
      image: "",
      phoneNumber: "",
    });
  };

  useEffect(() => {
    dispatch(actionGetUser());
    dispatch(actionGetGender());
    dispatch(actionGetRole());
    dispatch(actionGetPosition());
  }, [dispatch]);
  // form
  let [initialValue, setInitialValue] = useState<IpostUser>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    gender: "",
    role: "",
    position: "",
    image: "",
    phoneNumber: "",
  });
  if ((errCode === 0 && openEdit) || (errCode === 0 && open)) {
    console.log("chay vao day");

    handleClose();
    handleCloseEdit();
  }
  const hanldeSubmit = async (value: IpostUser) => {
    // if (value.password) {
    //   dispatch(actionCreateUser(value));
    //   return;
    // }
    // dispatch(actionEditUser(value));
    // return;
    const imgae = URL.createObjectURL(value.image[0]);
    console.log("Image", imgae);
  };
  //delete eidit
  const handleDelete = async (id: number) => {
    const data: IresponseLogin = await userApi.DeleteUser(id);
    if (data.errCode === 0) {
      dispatch(actionGetUser());
    }
  };
  const handleEdit = async (id: number) => {
    const { data }: { data: IpostUser } = await userApi.getUser(id);
    setInitialValue({
      id: data.id,
      email: data.email,
      password: "",
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      gender: data.gender,
      role: data.role,
      position: data.position,
      image: data.image,
      phoneNumber: data.phoneNumber,
    });

    handleOpenEdit();
  };
  //menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  //change lang
  const handleChangeLang = (language: Language) => {
    dispatch(actionSetlanguage(language));
  };
  //logout
  const handleLogout = () => {
    dispatch(actionLogout());
  };
  return (
    <>
      <AppBar position='static' className='header'>
        <Toolbar>
          {currentUser[0]?.roleid === "R1" ? (
            <>
              <NavLink to='/home' className='link' activeClassName='link__active'>
                <FormattedMessage id='adminHeader_manageuser' />
              </NavLink>
              <NavLink to='/home' className='link' activeClassName='link__active'>
                <FormattedMessage id='adminHeader_manageclinic' />
              </NavLink>
              <NavLink to='/home' className='link' activeClassName='link__active'>
                <FormattedMessage id='adminHeader_managespecialty' />
              </NavLink>
              <NavLink to='/home' className='link' activeClassName='link__active'>
                <FormattedMessage id='adminHeader_managehandbook' />
              </NavLink>
            </>
          ) : (
            <Button color='inherit'>
              {/* <FormattedMessage id='adminHeader_system' /> */}
              Bac sy
            </Button>
          )}
          <Box className='header__language' textAlign='right'>
            <p className='header__language-welcome'>
              <FormattedMessage id='adminHeader_welcome' />
              &ensp;, {currentUser[0]?.firstName} !
            </p>
            <span
              className={lang === "vi" ? "header__language-vi active" : "header__language-vi"}
              onClick={() => handleChangeLang("vi")}
            >
              VI
            </span>
            <span
              className={lang === "en" ? "header__language-en active" : "header__language-en"}
              onClick={() => handleChangeLang("en")}
            >
              EN
            </span>
          </Box>
          <Button color='inherit' onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          //
          elevation={0}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <MenuItem onClick={handleCloseMenu}>Quản lý người dùng</MenuItem>
          <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
          <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
        </Menu>
      </AppBar>
      <Box mx={2}>
        <Box py={3}>
          <Typography variant='h5'>Table User List</Typography>
        </Box>
        <Button variant='contained' color='primary' onClick={handleOpen}>
          Add User
        </Button>
        <Box mx={3}>
          <UserTable users={users} handleDelete={handleDelete} handleEdit={handleEdit} />
        </Box>
        {open && (
          <SimpleModal open={open} handleClose={handleClose} isOpenPreview={isOpenPreview}>
            <UserForm
              initialValue={initialValue}
              onSubmit={hanldeSubmit}
              handleClose={handleClose}
              isOpenPreview={isOpenPreview}
              setIsOpenPreview={setIsOpenPreview}
              err={errMess}
              type='add'
            />
          </SimpleModal>
        )}
        {openEdit && (
          <SimpleModal open={openEdit} handleClose={handleCloseEdit} isOpenPreview={isOpenPreview}>
            <UserForm
              initialValue={initialValue}
              onSubmit={hanldeSubmit}
              handleClose={handleClose}
              isOpenPreview={isOpenPreview}
              setIsOpenPreview={setIsOpenPreview}
              err={errMess}
              type='e'
            />
          </SimpleModal>
        )}
      </Box>
    </>
  );
}
