import React from 'react';
import PlayerBox from './PlayerBox';


const Scoreboard = (props) => {
    const players = props.players;

    return (
        <div className="row justify-content-center gx-0">
            <div className="mb-5">
                <div className="col-12 d-flex align-items-center">
                    {props.players.map((player, key) => (
                        key == 1 ? (
                            <div className="podium podium-side bg-silver rounded-start">
                                <img src="images/person.jpg" alt="" />
                                <h5 className="text-black mt-2 text-capitalize">{player.name}</h5>
                                <p className="text-black">{player.points} pts</p>
                            </div>
                        ) : ''
                    ))}
                    {props.players.map((player, key) => (
                        key == 0 ? (
                            <div className="podium podium-middle bg-gold rounded">
                                <img src="images/person.jpg" alt="" />
                                <h4 className="text-black mt-2 text-capitalize">{player.name}</h4>
                                <p className="text-black">{player.points} pts</p>
                            </div>
                        ) : ''
                    ))}
                    {props.players.map((player, key) => (
                        key == 2 ? (
                            <div className="podium podium-side bg-bronze rounded-end">
                                <img src="images/person.jpg" alt="" />
                                <h5 className="text-black mt-2 text-capitalize">{player.name}</h5>
                                <p className="text-black">{player.points} pts</p>
                            </div>
                        ) : ''
                    ))}
                </div>
            </div>

            {props.players.map((player, key) => (
                key > 2 && key <= 6 ? (
                    <PlayerBox 
                        name={player.name}
                        points={player.points}
                        place={key}
                    />
                ) : ''
            ))}


        </div>
    );
};

export default Scoreboard;