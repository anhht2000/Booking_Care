import React, { ReactElement, useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {},
  })
);
interface SimpleModalProps {
  open: boolean;
  handleClose: () => void;
  children: ReactElement;
  isOpenPreview: boolean;
}
export default function SimpleModal({
  open,
  handleClose,
  children,
  isOpenPreview,
}: SimpleModalProps): ReactElement {
  const classes = useStyles();
  //
  return (
    <Modal
      open={open}
      onClose={handleClose}
      className={isOpenPreview ? "modal__container d-none" : "modal__container"}
    >
      {children}
    </Modal>
  );
}
