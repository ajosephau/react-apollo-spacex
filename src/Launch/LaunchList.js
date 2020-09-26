import React, { Fragment, useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";

import Launch from "./Launch";

const LAUNCHES = gql`
query launches {
    launches(limit: 10) {
      id
      mission_name
      upcoming
      launch_year
      launch_success
    }
  }
`;

const LaunchList = props => {
  const { launches } = props;
  const launchList = [];
  launches.forEach((launch, index) => {
    launchList.push(<Launch key={index} index={index} launch={launch} />);
  });
  debugger;
  return (
    <Fragment>
      <div className="launchListWrapper">
        <ul>{launchList}</ul>
      </div>
    </Fragment>
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
