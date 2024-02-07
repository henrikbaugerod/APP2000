import React from 'react';
import PlayerBox from './PlayerBox';


const Scoreboard = (props) => {
    


    return (
        <div className="row justify-content-center gx-0">
            <div className="mb-5">
                <div className="col-12 d-flex align-items-center">
                    {props.players.map((player, key) => (
                        key === 1 ? (
                            <div className="podium podium-side bg-silver rounded-start" key={key}>
                                <img src={player.image} alt="" />
                                <h5 className=" mb-1 text-black mt-2 text-capitalize fw-bold">{player.name}</h5>
                                <p className="text-black" style={{ fontSize: '16px' }}>{player.points} pts</p>
                            </div>
                        ) : ''
                    ))}
                    {props.players.map((player, key) => (
                        key === 0 ? (
                            <div className="podium podium-middle bg-gold rounded" key={key}>
                                <img src={player.image} alt="" />
                                <h4 className=" mb-1 text-black mt-2 text-capitalize fw-bold">{player.name}</h4>
                                <p className="text-black" style={{ fontSize: '16px' }}>{player.points} pts</p>
                            </div>
                        ) : ''
                    ))}
                    {props.players.map((player, key) => (
                        key === 2 ? (
                            <div className="podium podium-side bg-bronze rounded-end" key={key}>
                                <img src={player.image} alt="" />
                                <h5 className=" mb-1 text-black mt-2 text-capitalize fw-bold">{player.name}</h5>
                                <p className="text-black" style={{ fontSize: '16px' }}>{player.points} pts</p>
                            </div>
                        ) : ''
                    ))}
                </div>
            </div>

            {props.players.map((player, key) => (
                key > 2 && key <= 6 ? (
                    <PlayerBox
                        id={player.id}
                        name={player.name}
                        image={player.image}
                        points={player.points}
                        place={key}
                        key={key}
                    />
                ) : ''
            ))}


        </div>
    );
};

export default Scoreboard;