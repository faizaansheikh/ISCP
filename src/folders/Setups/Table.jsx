import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";

function createData(name, text) {
  return { name, text };
}

const rows = [
  createData("A", "a text"),
  createData("B", "b text"),
  createData("C", "c text"),
];
const useStyles = makeStyles({
  table: {
    //   minWidth: 350,
    "& .MuiTableCell-root": {
      border: '1px solid black'
    }
  }
});

export default function BasicTable() {
  const classes = useStyles()
  return (
    <TableContainer component={Paper} sx={{ mt: '50px',width:'auto' }}>
      <Table className={classes.table}  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Group</TableCell>
            <TableCell align="center">Threshold</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
            //   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.text}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
