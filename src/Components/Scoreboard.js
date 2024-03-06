import React from 'react';
import PlayerBox from './PlayerBox';
import { Link } from 'react-router-dom';


const Scoreboard = (props) => {
    const setPlayerId = (id) => {
        sessionStorage.setItem('playerId', id)
    }

    const setBackLink = () => {
        sessionStorage.setItem('backLink', '/');
    }

    return (
        <div className="row justify-content-center gx-0">
            <div className="mb-5">
                <div className="col-12 d-flex align-items-center">
                    {props.players.map((player, key) => (
                        key === 1 ? (
                            <Link to='/playerprofile' className="podium podium-side bg-silver rounded-start text-decoration-none" key={key} onClick={() => setPlayerId(player.id)}>
                                <img src={player.image} alt="" />
                                <h5 className=" mb-1 text-black mt-2 text-capitalize fw-bold">{player.name}</h5>
                                <p className="text-black" style={{ fontSize: '16px' }}>{player.points} pts</p>
                            </Link>

                        ) : ''
                    ))}
                    {props.players.map((player, key) => (
                        key === 0 ? (
                            <Link to='/playerprofile' className="podium podium-middle bg-gold rounded text-decoration-none" key={key} onClick={() => setPlayerId(player.id)}>
                                <img src={player.image} alt="" />
                                <h4 className=" mb-1 text-black mt-2 text-capitalize fw-bold">{player.name}</h4>
                                <p className="text-black" style={{ fontSize: '16px' }}>{player.points} pts</p>
                            </Link>
                        ) : ''
                    ))}
                    {props.players.map((player, key) => (
                        key === 2 ? (
                            <Link to='/playerprofile' className="podium podium-side bg-bronze rounded-end text-decoration-none" key={key} onClick={() => setPlayerId(player.id)}>
                                <img src={player.image} alt="" />
                                <h5 className=" mb-1 text-black mt-2 text-capitalize fw-bold">{player.name}</h5>
                                <p className="text-black" style={{ fontSize: '16px' }}>{player.points} pts</p>
                            </Link>
                        ) : ''
                    ))}
                </div>
            </div>

            {
                props.players.map((player, key) => (
                    key > 2 && key <= 6 ? (
                        <Link to='/playerprofile' onClick={setBackLink}>
                            <PlayerBox
                                id={player.id}
                                name={player.name}
                                image={player.image}
                                points={player.points}
                                place={key}
                                key={key}
                                backLink={'/'}
                            />
                        </Link>
                    ) : ''
                ))
            }


        </div >
    );
};

export default Scoreboard;