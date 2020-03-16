import React from 'react';

//materialui işlevleri
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function FieldForm() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Baslik</TableCell>
            <TableCell align="right">Baslik1</TableCell>
            <TableCell align="right">Baslik2</TableCell>
            <TableCell align="right">Baslik3</TableCell>
            <TableCell align="right">Baslik4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                  test
              </TableCell>
              <TableCell align="right">test2</TableCell>
              <TableCell align="right">test3</TableCell>
              <TableCell align="right">test4</TableCell>
              <TableCell align="right">test5</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}