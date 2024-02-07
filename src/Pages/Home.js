import React, { useState } from 'react';
import Header from '../Components/Header';
import Scoreboard from '../Components/Scoreboard';
import { Link } from 'react-router-dom';


const Home = (props) => {

    return (
        <div className="container">
            <Header
                showBackButton={false}
            />

            <Scoreboard
                players={props.sortedPlayers}
            />

            <div className="row mt-5 text-center">
                <h2>We billiard.</h2>
            </div>



            <div className="row mt-5 mb-5">
                <div className="col-6">
                    <Link to="/newgame" className="d-flex btn bg-darkPurple text-white justify-content-center py-3 rounded-pill">
                        Play
                    </Link>
                </div>
                <div className="col-6">
                    <Link to="/menu" className="d-flex btn border border-white text-white justify-content-center py-3 rounded-pill">
                        Menu
                    </Link>
                </div>
            </div>

        </div>

    );
};

export default Home;