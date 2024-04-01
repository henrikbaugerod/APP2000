import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NewGamePlayer = (props) => {
  const [findPlayer, setFindPlayer] = useState(false);

  const handleClick = () => {
    console.log("Link clicked");
    sessionStorage.setItem("findPlayer", true);

    // Vite hvilken side som er trykket
    if (props.playerPressed == "1") {
      sessionStorage.setItem("playerPressed", "1");
    } else if (props.playerPressed == "2") {
      sessionStorage.setItem("playerPressed", "2");
    } else {
      console.log("Ingen ID");
    }
  };

  return (
    <div className="col-5">
      {/* Picture */}
      <div className="row mt-2 mb-2">
        <div className="col-12">
          <div
            className="playerCircle bg-purple d-flex justify-content-center align-items-center"
            onClick={handleClick}
          >
            <Link to="/Players">
              <div>
                {props.playerId ? (
                  <img
                    src={
                      props.players.players &&
                      props.players.players[props.playerId]
                        ? props.players.players[props.playerId].image
                        : null
                    }
                    alt="Profile"
                    className="rounded-circle borderCircle"
                    width="50px"
                    height="50px"
                  />
                ) : (
                  <img src="./images/Vector.svg" style={{ width: "50px" }} />
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Name */}
      <div className="row mt-2 mb-2">
        <div className="col-12">
          <div className="newGameName">
            {props.playerId ? (
              <p>
                {props.players.players && props.players.players[props.playerId]
                  ? props.players.players[props.playerId].name
                  : null}
              </p>
            ) : (
              <p>tekstttt</p>
            )}
          </div>
        </div>
      </div>

      {/* Points */}
      <div className="row">
        <div className="col-12">
          <div className="newGamePoints bg-purple rounded-3">
            {props.playerId ? (
              <p>
                {props.players.players && props.players.players[props.playerId]  
                  ? props.players.players[props.playerId].points
                  : null}{" "}
                pts
              </p>
            ) : (
              <p>pts</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewGamePlayer;
