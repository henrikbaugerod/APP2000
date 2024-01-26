import React from 'react';
import Header from '../Components/Header';
import Scoreboard from '../Components/Scoreboard';
import { Link } from 'react-router-dom';

const Home = (props) => {

    return (
        <div className="container">
            <Header
                title={''}
            />

            <Scoreboard
                players={props.players}
            />

            <Link to="/menu" className="d-flex">
                Start
            </Link>

            <Link to="/newgame" className="d-flex">
                NewGame
            </Link>

        </div>

    );
};

export default Home;