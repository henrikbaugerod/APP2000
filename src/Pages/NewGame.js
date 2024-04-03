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
    const [player1Points, setPlayer1Points] = useState(0);
    const [player2Points, setPlayer2Points] = useState(0);
    const [player1GainedPoints, setPlayer1GainedPoints] = useState(0);
    const [player2GainedPoints, setPlayer2GainedPoints] = useState(0);

    // Oppdatere nåværende side
    useEffect(() => {
        sessionStorage.setItem("currentPage", "/newgame");
        setPlayerPressed(sessionStorage.setItem("findPlayer", false));

        if (playerPressed === "1") {
            props.onSetPlayerId1(playerId);
            if (props.players && props.players[playerId]) {
                sessionStorage.setItem("player1poeng", props.players[playerId].points);
            }
        } else if (playerPressed === "2") {
            props.onSetPlayerId2(playerId);
            if (props.players && props.players[playerId]) {
                sessionStorage.setItem("player2poeng", props.players[playerId].points);
            }
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
                <NewGamePoints
                    onSetPlayer1Points={setPlayer1Points}
                    onSetPlayer2Points={setPlayer2Points}
                    currentPoints={player1Points}
                    playerGainedPoints={player1GainedPoints}
                    setPlayer1GainedPoints={setPlayer1GainedPoints}
                    setPlayer2GainedPoints={setPlayer2GainedPoints}
                    player1Points={player1Points}
                    player2Points={player2Points}
                    pointsPressed="1"
                />

                <div className="col-2"></div>

                {/* Player 2 */}
                <NewGamePoints
                    onSetPlayer1Points={setPlayer1Points}
                    onSetPlayer2Points={setPlayer2Points}
                    currentPoints={player2Points}
                    playerGainedPoints={player2GainedPoints}
                    setPlayer1GainedPoints={setPlayer1GainedPoints}
                    setPlayer2GainedPoints={setPlayer2GainedPoints}
                    player1Points={player1Points}
                    player2Points={player2Points}
                    pointsPressed="2"
                />
            </div>

            {/* Buttons */}
            <div className="row mt-5 mb-5">
                <div className="col-6 d-flex btn button bg-darkPurple text-white justify-content-center py-3 rounded-pill">
                    <RegisterButton
                        buttonText="Register"
                        playerId1={props.playerId1}
                        playerId2={props.playerId2}
                        player1GainedPoints={player1GainedPoints}
                        player2GainedPoints={player2GainedPoints}
                        player1Points={player1Points}
                        player2Points={player2Points}
                        players={props}
                        matches={props.matches}
                        setMatches={props.setMatches}
                    ></RegisterButton>
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
