import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { IresponseUser } from "../../../typeModels/auth";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface UserTableProps {
  users: IresponseUser[];
  handleEdit: (id: number) => void;
  handleDelete: (id: number) => void;
}

export default function UserTable({
  users,
  handleDelete,
  handleEdit,
}: UserTableProps): ReactElement {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell align='right'>First Name</TableCell>
            <TableCell align='right'>Last Name</TableCell>
            <TableCell align='right'>Address</TableCell>
            <TableCell align='right'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((user) => (
            <TableRow key={user.id}>
              <TableCell component='th'>{user.email}</TableCell>
              <TableCell align='right'>{user.firstName}</TableCell>
              <TableCell align='right'>{user.lastName}</TableCell>
              <TableCell align='right'>{user.address}</TableCell>
              <TableCell align='right'>
                <Button
                  variant='outlined'
                  color='primary'
                  size='small'
                  onClick={() => {
                    handleEdit(user.id);
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant='outlined'
                  color='secondary'
                  size='small'
                  onClick={() => {
                    handleDelete(user.id);
                  }}
                >
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
