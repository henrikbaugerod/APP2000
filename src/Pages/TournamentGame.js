import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

const TournamentGame = (props) => {
    const [winners, setWinners] = useState([]);
    const [matches, setMatches] = useState(null);
    const [goNext, setGoNext] = useState(true);
    const [resetOpacity, setResetOpacity] = useState(false);

    const handleClick = (e, key, match) => {
        const img1 = document.getElementsByClassName('playerImg1-' + key);
        const img2 = document.getElementsByClassName('playerImg2-' + key);

        if (!match.player1.toString().includes('BYE') && !match.player2.includes('BYE')) {
            // Copy the existing winners array
            const newWinners = [...winners];

            // Remove the current players from the newWinners array if they were selected before
            const matchPlayer1Index = newWinners.indexOf(match.player1);
            const matchPlayer2Index = newWinners.indexOf(match.player2);
            if (matchPlayer1Index !== -1) {
                newWinners.splice(matchPlayer1Index, 1);
            }
            if (matchPlayer2Index !== -1) {
                newWinners.splice(matchPlayer2Index, 1);
            }

            // Add the current winner to the newWinners array based on the clicked player
            if (e.target.classList.contains('playerImg1')) {
                img1[0].classList.remove('opacity-25');
                img2[0].classList.add('opacity-25');

                newWinners.push(match.player1);
            } else {
                img2[0].classList.remove('opacity-25');
                img1[0].classList.add('opacity-25');

                newWinners.push(match.player2);
            }

            // Update the winners array
            setWinners(newWinners);
        }
    };

    useEffect(() => {
        if (winners.length == props.tournamentMatches.length) {
            setGoNext(false);
        }
    }, [winners])


    useEffect(() => {
        const lmatches = document.getElementsByClassName('tournamentBox');
        setMatches(lmatches.length)
        const box = document.getElementsByClassName('tournamentBoxChild');

        for (let i = 0; i < lmatches.length; i++) {
            if (lmatches[i].textContent.includes('BYE')) {
                const tournamentBoxId = box[i].getAttribute('id');

                setWinners(prevWinners => [...prevWinners, tournamentBoxId]);
            }
        }
    }, [])

    useEffect(() => {
        console.log("Winners: ", winners)
    }, [winners])


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

    useEffect(() => {
        sessionStorage.setItem('previousPage', sessionStorage.getItem('currentPage'));
        sessionStorage.setItem('currentPage', '/tournament');
    }, []);

    useEffect(() => {
        // Remove opacity-25 class from all player images
        const playerImages = document.getElementsByClassName('playerImg1');
        for (let img of playerImages) {
            img.classList.remove('opacity-25');
        }

        const playerImages2 = document.getElementsByClassName('playerImg2');
        for (let img of playerImages2) {
            img.classList.remove('opacity-25');
        }
    }, [props.round])

    return (
        <div className="container">
            <Header previousPage={'/tournament'} />

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
                            <div className="col-auto text-center tournamentBoxChild">
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
                        <Link to="/tournamentwinner" className="justify-content-center py-3 rounded-pill px-5" onClick={() => sessionStorage.setItem('tournamentWinnerId', winners[0])}>
                            <button class="btn bg-darkPurple text-white">End tournamentsss</button>
                        </Link>
                    ) : (
                        <button className="btn bg-darkPurple text-white justify-content-center py-3 rounded-pill px-5" disabled={goNext} onClick={nextRound}>Next round</button>
                    )}

                </div>
            </div>
        </div>
    );
};

export default TournamentGame;