import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import PlayerBox from '../Components/PlayerBox';
import { Link } from 'react-router-dom';

const Tournament = (props) => {
    const [filtredPlayers, setfiltredPlayers] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [playerCount, setPlayerCount] = useState(0);

    useEffect(() => {
        setfiltredPlayers(props.sortedPlayers);
    }, [props.sortedPlayers]);

    useEffect(() => {
        props.setRegisteredPlayers([]);
    }, [])

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

    const generateBracket = (players) => {
        const numPlayers = players.length;
        const nextMultipleOfFour = Math.ceil(numPlayers / 4) * 4;
        const numByes = nextMultipleOfFour - numPlayers;

        // Add bye players
        for (let i = 0; i < numByes; i++) {
            players.push("BYE");
        }

        const numRounds = Math.ceil(Math.log2(players.length));
        const numMatchesFirstRound = Math.pow(2, numRounds - 1);

        const round = [];
        const numMatches = numMatchesFirstRound;
        for (let j = 0; j < numMatches; j++) {
            round.push({
                match: j + 1,
                player1: players[j],
                player2: players[players.length - j - 1]
            });
        }

        props.setTournamentMatches(round);
        props.setRound(numRounds);
    }

    return (
        <div className="container">
            <Header
                backLink={'/menu'}
                text={'Add players to tournament'}
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
                        checkbox={true}
                        playerCount={playerCount}
                        setPlayerCount={setPlayerCount}
                        registeredPlayers={props.registeredPlayers}
                        setRegisteredPlayers={props.setRegisteredPlayers}
                    />
                ))
            }

            <div className="row mt-5 pt-5">
                <div className="col-6">
                    <Link to="/tournament-game" className="d-flex btn bg-darkPurple text-white justify-content-center py-3 rounded-pill" onClick={() => generateBracket(props.registeredPlayers)}>
                        Play {playerCount >= 1 ? '(' + playerCount + ' players)' : null}
                    </Link>
                </div>
                <div className="col-6">
                    <Link to="/menu" className="d-flex btn border border-white text-white justify-content-center py-3 rounded-pill">
                        Cancel
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Tournament;