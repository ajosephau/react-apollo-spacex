import React from "react";

import LaunchList from "./LaunchList";

const LaunchWrapper = () => {
  return (
    <div className="launchWrapper">
      <div className="sectionHeader">Launches</div>
      <LaunchList />
    </div>
  );
};

export default LaunchWrapper;
