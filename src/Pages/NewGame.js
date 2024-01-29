import React from "react";
import Header from "../Components/Header";
import NewGamePlayer from "../Components/NewGamePlayer";

const NewGame = () => {
    return (
        <div className="container">
            <Header
                backLink={'/'}
            />
            <div className="row">

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
        </div>
    );
};

export default NewGame;
