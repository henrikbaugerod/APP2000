import { Button } from "bootstrap";
import React from "react";
import AddSubButton from "./AddSubButton";

const NewGamePoints = () => {
  return (
    <div className="col-5">
      {/* Score */}
      <div className="row mt-2 mb-2">
        <div className="col-12">
          <div className="pointsCircle bg-purple"></div>
        </div>
      </div>

      {/* Add or retract */}
      <div className="row mt-2 mb-2">
        <div className="col-6 button text-end">
          <AddSubButton buttonText="+" />
        </div>
        <div className="col-6 button text-start">
          <AddSubButton buttonText="-" />
        </div>
      </div>

      {/* Points gained or lossed */}
      <div className="row justify-content-center">
        <div className="newGameScore bg-purple rounded-3">
          <p>poeng</p>
        </div>
      </div>
    </div>
  );
};

export default NewGamePoints;
