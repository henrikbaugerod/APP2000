import React from 'react';

const Scoreboard = (props) => {
    const players = props.players;

    return (
        <div className="row justify-content-center">
            {players.map((item) => (
                <p>{item.name}</p>
            ))}
        </div>
    );
};

export default Scoreboard;