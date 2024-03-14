import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import NewGamePlayer from "../Components/NewGamePlayer";
import NewGamePoints from "../Components/NewGamePoints";
import { Link } from "react-router-dom";
import RegisterButton from "../Components/RegisterButton";

const NewGame = (props) => {
  const [playerId, setPlayerId] = useState(sessionStorage.getItem("playerId"));
  const [playerPressed, setPlayerPressed] = useState(
    sessionStorage.getItem("playerPressed")
  );

  // Oppdatere nåværende side
  useEffect(() => {
    sessionStorage.setItem("currentPage", "/newgame");

    if (playerPressed === "1") {
      props.onSetPlayerId1(playerId);
    } else if (playerPressed === "2") {
      props.onSetPlayerId2(playerId);
    } else {
      console.log("Player ID kan ikke bli satt");
    }
  }, []);

  return (
    <div className="container">
      <Header backLink={"/"} />

      {/* PLAYER CARD */}
      <div className="row mt-5 mb-5">
        {/* Player 1 */}
        <NewGamePlayer
          playerPressed="1"
          players={props}
          playerId={props.playerId1}
        />

        <div className="col-2 d-flex justify-content-center align-items-center">
          <p>vs</p>
        </div>

        {/* Player 2 */}
        <NewGamePlayer
          playerPressed="2"
          players={props}
          playerId={props.playerId2}
        />
      </div>

      {/* PLAYER POINTS */}
      <div className="row mt-5 mb-5">
        {/* Player 1 */}
        <NewGamePoints />

        <div className="col-2"></div>

        {/* Player 2 */}
        <NewGamePoints />
      </div>

      {/* Buttons */}
      <div className="row mt-5 mb-5">
        <div className="col-6 d-flex btn button bg-darkPurple text-white justify-content-center py-3 rounded-pill">
          <RegisterButton buttonText="Register"></RegisterButton>
        </div>
        <div className="col-6">
          <Link
            to="/"
            className="d-flex btn border border-white text-white justify-content-center py-3 rounded-pill"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewGame;
