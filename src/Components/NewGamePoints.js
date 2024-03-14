import { Button } from "bootstrap";
import React from "react";
import AddSubButton from "./AddSubButton";

const NewGamePoints = (props) => {
  return (
    <div className="col-5">
      {/* Score */}
      <div className="row mt-2 mb-2">
        <div className="col-12">
          <div className="pointsCircle bg-purple d-flex justify-content-center align-items-center">
            <p>{props.currentPoints}</p>
          </div>
        </div>
      </div>

      {/* Add or retract */}
      <div className="row mt-2 mb-2">
        <div className="col-6 button text-end">
          <AddSubButton
            buttonText="+"
            onSetPlayer1Points={props.onSetPlayer1Points}
            onSetPlayer2Points={props.onSetPlayer2Points}
            currentPoints={props.currentPoints}
            add="true"
            pointsPressed={props.pointsPressed}
          />
        </div>
        <div className="col-6 button text-start">
          <AddSubButton
            buttonText="-"
            onSetPlayer1Points={props.onSetPlayer1Points}
            onSetPlayer2Points={props.onSetPlayer2Points}
            currentPoints={props.currentPoints}
            pointsPressed={props.pointsPressed}
          />
        </div>
      </div>

      {/* Points gained or lossed */}
      <div className="row justify-content-center">
        <div className="newGameScore bg-purple rounded-3">
          <p>{props.playerGainedPoints}</p>
        </div>
      </div>
    </div>
  );
};

export default NewGamePoints;
