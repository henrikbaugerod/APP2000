import React from "react";

const AddSubButton = (props) => {
  const buttonText = props.buttonText;
  const pointsPressed = props.pointsPressed;
  const add = props.add;

    const setPlayer1Points = props.onSetPlayer1Points;
    const setPlayer2Points = props.onSetPlayer2Points;
    const currentPoints = props.currentPoints;

    const p1Points = sessionStorage.getItem("player1poeng");
    const p2Points = sessionStorage.getItem("player2poeng");

    const handleClick = () => {
        let score;

        // Logikk for når man klikker +/-
        if (add) {
            // Pluss
            if (pointsPressed === "1") {
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
            if (pointsPressed === "2") {
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


    return (
        <button style={{ width: "65px", height: "65px", backgroundColor: "#5500b3"}} class={`d-flex justify-content-center align-items-center ${props.add === "true" ? 'rounded-end' : 'rounded-start'}`} onClick={handleClick}>
            {/* <button onClick={handleClick} style={{ fontSize: "30px", fontWeight: "bold"}}>{buttonText}</button> */}
            {buttonText}
        </button>
    );
};

export default AddSubButton;
