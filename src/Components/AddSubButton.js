import React from "react";

const AddSubButton = (props) => {
  const buttonText = props.buttonText;
  const pointsPressed = props.pointsPressed;
  const setPlayer1Points = props.onSetPlayer1Points;
  const setPlayer2Points = props.onSetPlayer2Points;
  const currentPoints = props.currentPoints;
  const add = props.add;

  const handleClick = () => {
    console.log("Button pressed");
    let score;

    // Logikk for + 1 poeng og - 1 minus
    if (add) {
      if (pointsPressed == "1") {
        score = currentPoints + 1;
        setPlayer1Points(score);
      } else {
        score = currentPoints + 1;
        setPlayer2Points(score);
      }
    } else {
      if (pointsPressed == "2") {
        //
        score = currentPoints - 1;
        setPlayer2Points(score);
      } else {
        score = currentPoints - 1; //
        setPlayer1Points(score);
      }
    }
  };

  return (
    <div>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
};

export default AddSubButton;
