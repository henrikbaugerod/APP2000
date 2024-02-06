import React from "react";
import Header from "../Components/Header";
import NewGamePlayer from "../Components/NewGamePlayer";
import NewGamePoints from "../Components/NewGamePoints";
import { Link } from "react-router-dom";
import RegisterButton from "../Components/RegisterButton";

const NewGame = () => {
  return (
    <div className="container">
      <Header backLink={"/"} />

      {/* Player card */}
      <div className="row mt-5 mb-5">
        {/* Player 1 */}
        <div className="col-5">
          <NewGamePlayer />
        </div>

        {/* vs */}
        <div className="col-2">
          <p>vs</p>
        </div>

        {/* Player 2 */}
        <div className="col-5">
          <NewGamePlayer />
        </div>
      </div>

      {/* Player points */}
      <div className="row mt-5 mb-5">
        {/* Player 1 */}
        <div className="col-6">
          <NewGamePoints />
        </div>

        {/* Player 2 */}
        <div className="col-6">
          <NewGamePoints />
        </div>
      </div>

      {/* Buttons */}
      <div className="row mt-5 mb-5">
        <div className="button col-6 d-flex btn bg-darkPurple text-white justify-content-center py-3 rounded-pill">
          <RegisterButton buttonText="Register"></RegisterButton>
        </div>
        <div className="col-6">
          <Link
            to="/"
            className="d-flex btn border border-white text-white justify-content-center py-3 rounded-pill"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewGame;
