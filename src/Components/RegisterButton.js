import React from "react";

const RegisterButton = (props) => {
  const player1GainedPoints = props.player1GainedPoints;
  const player2GainedPoints = props.player2GainedPoints;
  const playerId1 = props.playerId1;
  const playerId2 = props.playerId2;

  // Bruke poeng og oppdatere tilsvarende til database for hver spiller
  const handleClick = () => {

    // Lagre resultat og sende til database
    

  };


  return (
    <div>
      <button onClick={handleClick}>{props.buttonText}</button>
    </div>
  );
};

export default RegisterButton;
