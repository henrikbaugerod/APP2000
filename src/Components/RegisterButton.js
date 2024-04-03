import React from "react";

const RegisterButton = (props) => {
  const player1Poeng = sessionStorage.getItem("player1poeng");
  const player2Poeng = sessionStorage.getItem("player2poeng");
  const playerId1 = props.playerId1;
  const playerId2 = props.playerId2;
  const player1GainedPoints = props.player1GainedPoints;
  const player2GainedPoints = props.player2GainedPoints;

  // Bruke poeng og oppdatere tilsvarende til database for hver spiller
  const handleClick = () => {
    let pointsPlayer1;
    let pointsPlayer2;

    if (player1GainedPoints > 0) {
      pointsPlayer1 = player1GainedPoints + player1Poeng;
    } else {
      pointsPlayer1 = player1GainedPoints - player1Poeng;
    }

    if (player2GainedPoints > 0) {
      pointsPlayer2 = player2GainedPoints + player2Poeng;
    } else {
      pointsPlayer2 = player2GainedPoints - player2Poeng;
    }

    // Lagre resultat og sende til database
    

    // Gå til forside/annen logikk
  };

  return (
    <div>
      <button onClick={handleClick}>{props.buttonText}</button>
    </div>
  );
};

export default RegisterButton;
