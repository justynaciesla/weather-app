import React from "react";
import Welcome from "./welcome";

const DetailedWeather = props => {
  const { details, showDetailedTemp } = props;

  if (details.length === 0) {
    return <Welcome details={details} />;
  }
  return (
    <div className="details">
      <div className="container">
        <h2 className="row text-secondary ml-2 mt-2">Escher Wyss, Zürich</h2>
        <h4 className="row text-secondary ml-2">{details.fullday}</h4>
        <h4 className="row text-secondary ml-2">{details.text}</h4>
      </div>
      <div className="row">
        <div className="col-8 ml-3 mt-3">
          <div className="row">
            <img className="col-3 details_logo" src={details.logo} alt="logo" />
            <h1 className="col-3 display-6 mt-4">{details.minTemp} °C</h1>
          </div>
        </div>

        <div className="col-2 mt-3">
          <h6 className="row text-secondary">
            Preciption: {details.precipitation}
          </h6>
          <h6 className="row text-secondary">Humidity: {details.humidity}</h6>
          <h6 className="row text-secondary">Wind: {details.wind}</h6>
        </div>
      </div>
    </div>
  );
};

export default DetailedWeather;
