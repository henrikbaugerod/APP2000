import React from "react";

const AddSubButton = (props) => {
  const buttonText = props.buttonText;
  const pointsPressed = props.pointsPressed;
  const add = props.add;

  const setPlayer1Points = props.onSetPlayer1Points;
  const setPlayer2Points = props.onSetPlayer2Points;
  const currentPoints = props.currentPoints;

  const setPlayer1GainedPoints = props.setPlayer1GainedPoints;
  const setPlayer2GainedPoints = props.setPlayer2GainedPoints;

  const player2Points = props.player2Points;
  const player1Points = props.player1Points;

  const p1Points = sessionStorage.getItem("player1poeng");
  const p2Points = sessionStorage.getItem("player2poeng");

  const handleClick = () => {
    let score;

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

    setPoints();
  };

  // Poengsystem
  const setPoints = () => {
    let difference = null;
    let winner = null;
    let pointDifference = 0;
    let p1Pot;
    let p2Pot;

    // Differanse (finn poengskille)
    if (p1Points > p2Points) {
      pointDifference = p1Points - p2Points;
      p1Pot = 2 + 1 * Math.floor(pointDifference / 5);
      p2Pot = 2;
    } else if (p2Points > p1Points) {
      pointDifference = p2Points - p1Points;
      p2Pot = 2 + 1 * Math.floor(pointDifference / 5);
      p1Pot = 2;
    } else {
      p1Pot = 2;
      p2Pot = 2;
    }

    // Differanse (finne vinner)
    if (player1Points > player2Points) {
      setPlayer1GainedPoints(p2Pot);
      setPlayer2GainedPoints(-p2Pot);
    } else if (player2Points > player1Points) {
      setPlayer1GainedPoints(-p1Pot);
      setPlayer2GainedPoints(p1Pot);
    } else {
      console.log("Uavgjort?");
    }
  };

  return (
    <div>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
};

export default AddSubButton;
