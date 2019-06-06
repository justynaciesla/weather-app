import React from "react";
import Card from "./card";

const weatherCards = props => {
  const { weather, showDetails } = props;

  return (
    <React.Fragment>
      {weather.map(weather => (
        <Card key={weather.id} weather={weather} showDetails={showDetails} />
      ))}
    </React.Fragment>
  );
};

export default weatherCards;
