import React, { useRef } from 'react';
import Header from '../Components/Header';
import { Fireworks } from '@fireworks-js/react';
import { Link } from 'react-router-dom';

const TournamentWinner = (props) => {
    const ref = useRef(null);

    const toggle = () => {
        if (!ref.current) return;
        if (ref.current.isRunning) {
            ref.current.stop();
        } else {
            ref.current.start();
        }
    };

    console.log("Players = ", props.players)

    const playerId = sessionStorage.getItem('tournamentWinnerId');

    return (
        <div className="container">
            <Header

            />

            <div className="row justify-content-center">
                <img src={props.players[playerId] ? props.players[playerId].image : null} alt="" class="rounded-circle px-0" style={{ height: '200px', width: '200px' }} />
            </div>

            <div className="row mt-4">
                <div className="col text-center">
                    <h2>Winner: {props.players[sessionStorage.getItem('tournamentWinnerId')].name} </h2>
                </div>
            </div>

            <div className="row mt-5 pt-5 justify-content-center">
                <div className="col-6">
                    <Link to="/menu" className="d-flex btn bg-darkPurple text-white justify-content-center py-3 rounded-pill">
                        Back to menu
                    </Link>
                </div>
            </div>

            <Fireworks
                ref={ref}
                options={{ opacity: 0.5 }}
                style={{
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    position: 'fixed',
                    background: 'transparent',
                    zIndex: '-1'
                }}
            />

        </div>
    );
};

export default TournamentWinner;