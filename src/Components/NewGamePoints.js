import React, { useState, useEffect } from "react";
import AddSubButton from "./AddSubButton";

const NewGamePoints = (props) => {
    useEffect(() => {
        // Calculate gained points
        calculateGainedPoints();
    }, [props.player1Points, props.player2Points]);

    const calculateGainedPoints = () => {
        let difference = null;
        let pointDifference = 0;
        let p1Pot;
        let p2Pot;

        const player1poeng = sessionStorage.getItem("player1poeng");
        const player2poeng = sessionStorage.getItem("player2poeng");

        if (props.player1Points === props.player2Points) {
            p1Pot = 0;
            p2Pot = 0;
        } else {
            if (player1poeng > player2poeng) {
                pointDifference = player1poeng - player2poeng;


                if (props.player1Points === props.player2Points) {
                    p1Pot = 0;
                    p2Pot = 0;

                    props.setPlayer1GainedPoints(p1Pot);
                    props.setPlayer2GainedPoints(p2Pot);
                } else {
                    if (player1poeng > player2poeng) {
                        pointDifference = player1poeng - player2poeng;

                        if (props.player1Points > props.player2Points) {
                            p1Pot = 2;
                            p2Pot = 2;

                            props.setPlayer1GainedPoints(p1Pot);
                            props.setPlayer2GainedPoints(Math.abs(p2Pot) * -1);
                        } else {
                            p2Pot = 2 + 1 * Math.floor(pointDifference / 5);
                            p1Pot = p2Pot;

                            props.setPlayer1GainedPoints(Math.abs(p1Pot) * -1);
                            props.setPlayer2GainedPoints(p2Pot);
                        }
                    } else {
                        pointDifference = player2poeng - player1poeng;

                        if (props.player1Points > props.player2Points) {
                            p1Pot = 2 + 1 * Math.floor(pointDifference / 5);
                            p2Pot = p1Pot;

                            props.setPlayer1GainedPoints(parseInt(Math.abs(p1Pot) * -1));
                            props.setPlayer2GainedPoints(p2Pot);
                        } else {
                            p1Pot = 2;
                            p2Pot = 2;

                            props.setPlayer1GainedPoints(p1Pot);
                            props.setPlayer2GainedPoints(Math.abs(p2Pot) * -1);
                        }
                    }
                }
            }
        }
    };

    return (
        <div className="col-5">
            {/* Score */}
            <div className="row gx-0 mt-2 mb-2">
                <div className="col-4 button">
                    <AddSubButton
                        buttonText="-"
                        onSetPlayer1Points={props.onSetPlayer1Points}
                        onSetPlayer2Points={props.onSetPlayer2Points}
                        currentPoints={props.currentPoints}
                        pointsPressed={props.pointsPressed}
                        setPlayer1GainedPoints={props.setPlayer1GainedPoints}
                        setPlayer2GainedPoints={props.setPlayer2GainedPoints}
                        player1Points={props.player1Points}
                        player2Points={props.player2Points}
                    />
                </div>
                <div className="col-4">
                    <div className="pointsCircle bg-purple d-flex justify-content-center align-items-center">
                        <p class="mb-0">{props.currentPoints}</p>
                    </div>
                </div>
                <div className="col-4 button">
                    <AddSubButton
                        buttonText="+"
                        onSetPlayer1Points={props.onSetPlayer1Points}
                        onSetPlayer2Points={props.onSetPlayer2Points}
                        currentPoints={props.currentPoints}
                        add="true"
                        pointsPressed={props.pointsPressed}
                        setPlayer1GainedPoints={props.setPlayer1GainedPoints}
                        setPlayer2GainedPoints={props.setPlayer2GainedPoints}
                        player1Points={props.player1Points}
                        player2Points={props.player2Points}
                    />
                </div>
            </div>

            {/* Points gained or lossed */}
            <div className="row justify-content-center mt-5">
                <div className="newGameScore bg-purple rounded-3">
                    {props.playerGainedPoints < 0 ? (
                        <p style={{ color: "red" }}>{props.playerGainedPoints}</p>
                    ) : (
                        <p style={{ color: "lightgreen" }}>+{props.playerGainedPoints}</p>
                    )}
                </div>
            </div>
            {/* Points gained or lossed */}
            <div className="row justify-content-center" >
                <div className="newGameScore bg-purple rounded-3">
                    <p>{props.playerGainedPoints}</p>
                </div>
            </div>
        </div>
    )
};

export default NewGamePoints;