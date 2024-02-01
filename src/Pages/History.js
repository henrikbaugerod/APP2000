import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import PlayerBox from '../Components/PlayerBox';
import HistoryMatch from '../Components/HistoryMatch';
import { Link } from 'react-router-dom';

const History = (props) => {
    const [filtredPlayers, setfiltredPlayers] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("all");

    useEffect(() => {
        setfiltredPlayers(props.history);
    }, [props.players]);

    function handleCategory(e) {
        let playerCategory = e.target.value;
        playerCategory !== "all"
            ? setfiltredPlayers(filterPlayers(playerCategory))
            : setfiltredPlayers(props.players);

        setSelectedCategory(e.target.value)
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
            <div className="row align-items-center mb-3">
                <div className="col-12 text-center">
                    <h5>Match history</h5>
                </div>
            </div>

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

                <HistoryMatch
                    date={"2.februar"}
                    image={'./images/user-regular.svg'}
                    image2={'./images/user-regular.svg'}
                    score={'1-1'}
                />

            </div>


            {filtredPlayers &&
                filtredPlayers.map((player) => (
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

export default History;