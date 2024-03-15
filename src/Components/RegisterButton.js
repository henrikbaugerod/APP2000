import React from "react";

const RegisterButton = (props) => {

  const player1Points = props.player1Points;
  const player2Points = props.player2Points;
  const playerId1 = props.playerId1;
  const playerId2 = props.playerId2;

  // Bruke poeng og oppdatere tilsvarende til database for hver spiller
  const handleClick = () => {

  };

  return (
    <div>
      <button onClick={handleClick}>{props.buttonText}</button>
    </div>
  );
};

export default RegisterButton;
