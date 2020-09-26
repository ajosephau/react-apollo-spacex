import React from "react";
import { useQuery, gql } from "@apollo/client";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Launch from "./Launch";

const LAUNCHES = gql`
query launches {
  launches(sort: "launch_year") {
      id
      mission_name
      upcoming
      launch_year
      launch_success
    }
  }
`;

const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
});

const LaunchList = props => {
  const classes = useStyles();

  const { launches } = props;
  const launchList = [];
  launches.forEach((launch, index) => {
    launchList.push(<Launch key={index} index={index} launch={launch} />);
  });
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Mission name</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Upcoming launch?</TableCell>
            <TableCell align="right">Launch success?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {launchList}
        </TableBody>
      </Table>
    </TableContainer>
  );
};


const LaunchListQuery = () => {
  const { loading, error, data } = useQuery(LAUNCHES);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  return <LaunchList launches={data.launches} />;
};
export default LaunchListQuery;
export { LAUNCHES };
