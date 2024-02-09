import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewGamePlayer = () => {
  const [findPlayer, setFindPlayer] = useState(false);

  const handleClick = () => {
    console.log("Link clicked");
    sessionStorage.setItem('findPlayer', true)
  };

  return (
    <div className="col-5">
      {/* Picture */}
      <div className="row mt-2 mb-2">
        <div className="col-12">
          <div
            className="playerCircle bg-purple d-flex justify-content-center align-items-center"
            onClick={handleClick}
          >
            <Link to="/Players">
              <img src="./images/Vector.svg" style={{ width: "50px" }} />
            </Link>
          </div>
        </div>
      </div>

      {/* Name */}
      <div className="row mt-2 mb-2">
        <div className="col-12">
          <div className="newGameName">
            <p>tekst</p>
          </div>
        </div>
      </div>

      {/* Points */}
      <div className="row">
        <div className="col-12">
          <div className="newGamePoints bg-purple rounded-3">
            <p>poeng</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewGamePlayer;
