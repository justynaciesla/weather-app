import React from "react";
import sunny from "../images/sunny.png";
import cloudly from "../images/cloudly.png";
import raining from "../images/raining2.png";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="row mt-3">
        <div className=" offset-2 col-3">
          <img className="welcome_logo" alt="sunny" src={sunny} />
        </div>
        <div className="col-3">
          <img className="welcome_logo" alt="cloudly" src={cloudly} />
        </div>
        <div className="col-3">
          <img className="welcome_logo" alt="raining" src={raining} />
        </div>
      </div>

      <h1 className="welcome_title mt-5 text-center">WELCOME!</h1>
      <h2 className="text-secondary text-center">
        To see details please click below:
      </h2>
    </div>
  );
};

export default Welcome;
