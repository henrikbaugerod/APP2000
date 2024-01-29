import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import PlayerBox from '../Components/PlayerBox';
import { Link } from 'react-router-dom';

const Players = (props) => {
    const [filtredPlayers, setfiltredPlayers] = useState(null);
    useEffect(() => {
        setfiltredPlayers(props.players);
    }, []);

    function handleCategory(e) {
        let playerCategory = e.target.value;
        playerCategory !== "all"
            ? setfiltredPlayers(filterPlayers(playerCategory))
            : setfiltredPlayers(props.players);
    }

    function filterPlayers(category) {
        let filtredPlayers = props.players.filter(type => type.category === category);
        return filtredPlayers;
    }

    return (
        <div className="container">
            <Header
                backLink={'/menu'}
            />

            <div className="row gx-0 mb-4" style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.3)' }}>
                <div className="col-4 text-center">
                    <button value="all" onClick={handleCategory}>
                        All
                    </button>
                </div>
                <div className="col-4 text-center">
                    <button value="catch" onClick={handleCategory}>
                        Catch
                    </button>
                </div>
                <div className="col-4 text-center">
                    <button value="external" onClick={handleCategory}>
                        External
                    </button>
                </div>
            </div>

            <div className="row">
                <button className="col-12 mb-4 text-white border-0 playerButton" key="{props.place}" style={{ backgroundColor: 'transparent' }}>
                    <div className="bg-purple p-3 playerBox rounded-3">
                        <div className="row align-items-center">
                            <div className="col-1">
                                <h4 className="mb-0">#</h4>
                            </div>
                            <div className="col-auto">
                                <div className="bg-normalPurple" style={{ width: '35px', height: '35px', borderRadius: '50%' }}>
                                    <img src="./images/Vector.svg" alt="" style={{ width: '100%', padding: '8px' }} />
                                </div>
                            </div>
                            <div className="col text-start">
                                <Link to="/newplayer">
                                <h5 className="mb-0 text-capitalize">Add new player</h5>
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                </button>
            </div>

            {filtredPlayers &&
                filtredPlayers.map((player, key) => (
                    <PlayerBox
                        name={player.name}
                        image={player.image}
                        points={player.points}
                        place={player.ranking}
                    />
                ))}

        </div>
    );
};

export default Players;