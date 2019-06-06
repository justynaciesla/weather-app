import React from "react";

const Card = props => {
  const { weather, showDetails } = props;
  return (
    <button className="box" onClick={() => showDetails(weather)}>
      <h5>{weather.day}</h5>
      <img className="box_logo" src={weather.logo} alt={weather.logo} />
      <div>
        <h6 className="box_temp">{weather.minTemp}°</h6>
        <h6 className="box_temp">{weather.maxTemp}°</h6>
      </div>
    </button>
  );
};

export default Card;
