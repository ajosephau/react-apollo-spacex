import React from "react";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';

const Launch = ({ index, launch }) => {
  debugger;
  return (
      <TableRow key={index}>
        <TableCell component="th" scope="row">
          {launch.mission_name}
        </TableCell>
        <TableCell align="right">{launch.launch_year}</TableCell>
        <TableCell align="right"><Checkbox checked={launch.upcoming}/></TableCell>
        <TableCell align="right"><Checkbox checked={launch.launch_success}/></TableCell>
      </TableRow>
  );
};

export default Launch;
