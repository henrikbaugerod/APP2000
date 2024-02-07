import React from 'react';
import { Link } from 'react-router-dom';

const PlayerBox = (props) => {
    const setPlayerId = () => {
        sessionStorage.setItem('playerId', props.id)
    }

    return (
        <Link to='/newplayer'>
            <button className="col-12 mb-2 text-white border-0 playerButton" key="{props.place}" style={{ backgroundColor: 'transparent' }} onClick={setPlayerId}>
                <div className="bg-purple p-3 playerBox rounded-3">
                    <div className="row align-items-center">
                        <div className="col-1">
                            <h4 className="mb-0">{props.place + 1}</h4>
                        </div>
                        <div className="col-auto">
                            <img src={props.image} alt="" />
                        </div>
                        <div className="col text-start">
                            <h5 className="mb-0 text-capitalize">{props.name}</h5>
                        </div>
                        <div className="col-auto">
                            <h5 className="mb-0 fw-semibold">{props.points} pts</h5>
                        </div>
                    </div>
                </div>
            </button>
        </Link>

    );
};

export default PlayerBox;