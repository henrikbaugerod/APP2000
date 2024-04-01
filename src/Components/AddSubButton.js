import React from "react";

const AddSubButton = (props) => {
    const buttonText = props.buttonText;
    const pointsPressed = props.pointsPressed;
    const add = props.add;

    const setPlayer1Points = props.onSetPlayer1Points;
    const setPlayer2Points = props.onSetPlayer2Points;
    const player1Points = props.player1Points;
    const player2Points = props.player2Points;
    const currentPoints = props.currentPoints;

    const setPlayer1GainedPoints = props.setPlayer1GainedPoints;
    const setPlayer2GainedPoints = props.setPlayer2GainedPoints;

    const handleClick = () => {
        let score;
        setPoints();

        // Logikk for når man klikker +/-
        if (add) {
            // Pluss
            if (pointsPressed == "1") {
                // Player 1
                score = currentPoints + 1;
                setPlayer1Points(score);
            } else {
                // Player 2
                score = currentPoints + 1;
                setPlayer2Points(score);
            }
        } else {
            // Minus
            if (pointsPressed == "2") {
                // Player 2
                score = currentPoints - 1;
                setPlayer2Points(score);
            } else {
                // Player 1
                score = currentPoints - 1;
                setPlayer1Points(score);
            }
        }
    };

    // Poengsystem
    const setPoints = () => {
        let difference = null;
        let winner = null;
        let p1Points = null;
        let p2Points = null;

        // Differanse (finne vinner)
        if (player1Points > player2Points) {
            winner = 1;
            difference = player1Points - player2Points;
            p1Points = calculatePoints(difference, winner);
            p2Points = calculatePoints(difference, winner);
        } else if (player2Points > player1Points) {
            winner = 2;
            difference = player2Points - player1Points;
            p1Points = calculatePoints(difference, winner);
            p2Points = calculatePoints(difference, winner);
        } else {
            console.log("Uavgjort?")
        }

        // Oppdatere poeng de kommer til å tjene
        setPlayer1GainedPoints(p1Points);
        setPlayer2GainedPoints(p2Points);
    };

    // Poengberegning for hver player 1p5
    const calculatePoints = (difference, winner) => {
        let points;

        if (difference <= 5) {

        } else if (difference <= 10) {

        }

        return points;
    }

    return (
        <div>
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    );
};

export default AddSubButton;
