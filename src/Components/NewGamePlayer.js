import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NewGamePlayer = (props) => {
  const [findPlayer, setFindPlayer] = useState(false);
  const [playerId, setPlayerId] = useState(sessionStorage.getItem("playerId"));
  const test = true;

  const handleClick = () => {
    console.log("Link clicked");
    sessionStorage.setItem("findPlayer", true);
  };

  console.log("Find player");
  console.log(findPlayer);

  console.log("Props player id");
  console.log(props.playerId);

  console.log("Props onSelectPlayer funksjon");
  console.log(props.onSelectPlayer);

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
                {playerId ? (
                  <img
                    src={props.players.players[playerId].image}
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
            {playerId ? (
              <p>{props.players.players[playerId].name}</p>
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
            {playerId ? (
              <p>{props.players.players[playerId].points} pts</p>
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
