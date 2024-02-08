import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';

const TournamentGame = (props) => {
    const [roundNumber, setRoundNumber] = useState(1);

    const handleClick = (e, key, match) => {
        const img1 = document.getElementsByClassName('playerImg1-' + key);
        const img2 = document.getElementsByClassName('playerImg2-' + key);

        if (!match.player1.includes('BYE') && !match.player2.includes('BYE')) {
            if (e.target.classList.contains('playerImg1')) {
                img1[0].classList.remove('opacity-25');
                img2[0].classList.add('opacity-25');
            } else {
                img2[0].classList.remove('opacity-25');
                img1[0].classList.add('opacity-25');
            }
        }
    };

    return (
        <div className="container">
            <Header backLink={'/tournament'} />

            <div className="row g-3">
                {props.tournamentMatches.map((match, key) => (
                    <div className="col-6" key={key}>
                        <div className='row gx-2 justify-content-center align-items-center playerBox tournamentBox py-2'>
                            <div className="col-auto text-center">
                                <img
                                    src={props.players[match.player1] && props.players[match.player1].image ? props.players[match.player1].image : "./images/bye.svg"}
                                    alt=""
                                    className={`img-fluid playerImg1 playerImg1-${key} ${match.player1.includes('BYE') ? 'opacity-25' : ''}`}
                                    onClick={(event) => handleClick(event, key, match)}
                                />
                                {match.player1.includes('BYE') ? <p className="mt-2 mb-0">BYE</p> : <p className="mt-2 mb-0">{props.players[match.player1].name}</p>}
                            </div>
                            <div className="col-auto">
                                <h5 className="mx-2">-</h5>
                            </div>
                            <div className="col-auto text-center">
                                <img
                                    src={props.players[match.player2] && props.players[match.player2].image ? props.players[match.player2].image : "./images/bye.svg"}
                                    alt=""
                                    className={`img-fluid playerImg2 playerImg2-${key} ${match.player2.includes('BYE') ? 'opacity-25' : ''}`}
                                    onClick={(event) => handleClick(event, key, match)}
                                />
                                {match.player2.includes('BYE') ? <p className="mt-2 mb-0">BYE</p> : <p className="mt-2 mb-0">{props.players[match.player2].name}</p>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row justify-content-center mt-4">
                <div className="col-auto">
                    <button className="btn bg-darkPurple text-white justify-content-center py-3 rounded-pill px-5" disabled={roundNumber <= 1 ? true : false}>Next round</button>
                </div>
            </div>
        </div>
    );
};

export default TournamentGame;
