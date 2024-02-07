import React from "react";

const NewGamePlayer = () => {
  return (
    <div className="col-5">
      {/* Picture */}
      <div className="row mt-2 mb-2">
        <div className="col-12">
          <div className="playerCircle bg-purple"></div>
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
