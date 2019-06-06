import React from "react";
import Welcome from "./welcome";
import DetailedWeather from "./detailedWeather";

const WelcomeOrDetails = props => {
  const { details, showDetailedTemp } = props;

  if (details.length === 0) {
    return <Welcome />;
  }
  return (
    <DetailedWeather details={details} showDetailedTemp={showDetailedTemp} />
  );
};

export default WelcomeOrDetails;
