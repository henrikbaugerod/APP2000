import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import PlayerBox from '../Components/PlayerBox';
import { Link } from 'react-router-dom';

const Players = (props) => {
    const [filtredPlayers, setfiltredPlayers] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("all");

    useEffect(() => {
        setfiltredPlayers(props.sortedPlayers);
    }, [props.sortedPlayers]);

    function handleCategory(e) {
        let playerCategory = e.target.value;
        playerCategory !== "all"
            ? setfiltredPlayers(filterPlayers(playerCategory))
            : setfiltredPlayers(props.sortedPlayers);

        setSelectedCategory(e.target.value)
    }

    function filterPlayers(category) {
        let filtredPlayers = props.sortedPlayers.filter(type => type.location === category);
        return filtredPlayers;
    }

    return (
        <div className="container">
            <Header
                backLink={'/menu'}
            />

            <div className="row gx-0 mb-4" style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.3)' }}>
                <div className="col-4 text-center">
                    <button value="all" onClick={handleCategory} className={`${selectedCategory === 'all' ? 'bg-purple' : 'bg-normalPurple'} w-100 border-0 py-2 text-white categoryButton`}>
                        All
                    </button>
                </div>
                <div className="col-4 text-center">
                    <button value="catch" onClick={handleCategory} className={`${selectedCategory === 'catch' ? 'bg-purple' : 'bg-normalPurple'} w-100 border-0 py-2 text-white categoryButton`}>
                        Catch
                    </button>
                </div>
                <div className="col-4 text-center">
                    <button value="external" onClick={handleCategory} className={`${selectedCategory === 'external' ? 'bg-purple' : 'bg-normalPurple'} w-100 border-0 py-2 text-white categoryButton`}>
                        External
                    </button>
                </div>
            </div>

            <div className="row">
                <Link to="/newplayer" className="col-12 mb-4 text-white border-0 playerButton" key={props.place} style={{ backgroundColor: 'transparent', textDecoration: 'none' }}>

                    <h5 className="bg-purple p-3 playerBox rounded-3">
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
                                Add new player
                            </div>
                        </div>
                    </h5>

                </Link>
            </div>


            {filtredPlayers &&
                filtredPlayers.map((player, key) => (
                    <PlayerBox
                        id={player.id}
                        name={player.name}
                        image={player.image}
                        points={player.points}
                        place={key}
                    />
                ))
            }

        </div>
    );
};

export default Players;