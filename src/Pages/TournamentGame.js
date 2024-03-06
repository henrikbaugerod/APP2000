import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

const TournamentGame = (props) => {
    const [winners, setWinners] = useState([]);

    const handleClick = (e, key, match) => {
        const img1 = document.getElementsByClassName('playerImg1-' + key);
        const img2 = document.getElementsByClassName('playerImg2-' + key);

        if (!match.player1.includes('BYE') && !match.player2.includes('BYE')) {
            if (e.target.classList.contains('playerImg1')) {
                img1[0].classList.remove('opacity-25');
                img2[0].classList.add('opacity-25');

                setWinners(prevWinners => [...prevWinners, match.player1]);
            } else {
                img2[0].classList.remove('opacity-25');
                img1[0].classList.add('opacity-25');

                setWinners(prevWinners => [...prevWinners, match.player2]);
            }
        }
    };

    useEffect(() => {
        const matches = document.getElementsByClassName('tournamentBox');
        const box = document.getElementsByClassName('tournamentBoxChild');

        for (let i = 0; i < matches.length; i++) {
            if (matches[i].textContent.includes('BYE')) {
                const tournamentBoxId = box[i].getAttribute('id');

                setWinners(prevWinners => [...prevWinners, tournamentBoxId]);
            }
        }
    }, [])



    const nextRound = () => {
        setWinners([]);
        console.log("Current winners:", winners);
        const newMatches = [];
        for (let i = 0; i < winners.length; i += 2) {
            const match = {
                player1: winners[i],
                player2: winners[i + 1]
            };
            newMatches.push(match);
        }

        props.setTournamentMatches(newMatches)

        props.setRound(props.round - 1)
    }

    return (
        <div className="container">
            <Header backLink={'/tournament'} />

            <div className="row justify-content-center g-3 text-center">
                {props.round === 1 ? <h2>Final</h2> : null}
                {props.round === 2 ? <h2>Semifinals</h2> : null}
                {props.round === 3 ? <h2>Quarterfinals</h2> : null}
                {props.round === 4 ? <h2>4th round</h2> : null}
                {props.round === 5 ? <h2>3rd round</h2> : null}
                {props.round === 6 ? <h2>2nd round</h2> : null}
                {props.round === 7 ? <h2>1st round</h2> : null}
                {props.tournamentMatches.map((match, key) => (
                    <div className="col-6" key={key}>
                        <div className='row gx-2 justify-content-center align-items-center playerBox tournamentBox py-2'>
                            <div className="col-auto text-center tournamentBoxChild" id={props.players[match.player1].id}>
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
                                    className={`img-fluid playerImg2 playerImg2-${key}`}
                                    onClick={(event) => handleClick(event, key, match)}
                                />
                                {match.player2 === 'BYE' ? <p className="mt-2 mb-0">BYE</p> : <p className="mt-2 mb-0">{props.players[match.player2] ? props.players[match.player2].name : 'BYE'}</p>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row justify-content-center mt-4">
                <div className="col-auto">
                    {props.round === 1 ? (
                        <Link to="/tournamentwinner" className="btn bg-darkPurple text-white justify-content-center py-3 rounded-pill px-5">
                            End tournament
                        </Link>
                    ) : (
                        <button className="btn bg-darkPurple text-white justify-content-center py-3 rounded-pill px-5" /* disabled={winners.length < props.tournamentMatches.length} */ onClick={nextRound}>Next round</button>
                    )}

                </div>
            </div>
        </div>
    );
};

export default TournamentGame;
