import React from "react";

const Launch = ({ index, launch }) => {
  return (
    <li>
      <div className="launch-item-name" title={launch.mission_name}>
        @{launch.mission_name}
      </div>

      <div className={"launch-item-year"}>
        <div>{launch.launch_year}</div>
      </div>

      <div className={"launch-item-success"}>
        <div>{launch.launch_success}</div>
      </div>
    </li>
  );
};

export default Launch;
