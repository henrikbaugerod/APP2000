import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import PlayerBox from '../Components/PlayerBox';
import HistoryMatch from '../Components/HistoryMatch';
import { Link } from 'react-router-dom';

const History = (props) => {
    const { Matches } = props;

    const [filtredMatches, setfiltredMatches] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all')

    useEffect(() => {
        setfiltredMatches(props.matches);
    }, [props.matches]);

    function handleCategory(e) {
        let matchCategory = e.target.value;
        matchCategory !== "all"
            ? setfiltredMatches(filterMatches(matchCategory))
            : setfiltredMatches(props.matches);

        setSelectedCategory(e.target.value);
    }

    function filterMatches(category) {
        let filtredMatches = props.matches.filter(
            (type) => type.location === category
        );
        return filtredMatches;
    }

    useEffect(() => {
        sessionStorage.setItem('previousPage', sessionStorage.getItem('currentPage'));
        sessionStorage.setItem('currentPage', '/history');
    }, []);


    return (
        <div className="container">
            <Header
                backLink={'/menu'}
            />
            <div className="row align-items-center mb-3 bg">
                <div className="col-12 text-center">
                    <h5>Match history</h5>
                </div>
            </div>

            <div className="row gx-0 mb-4">
                <div className="col-4 text-center">
                    <button value="all" onClick={handleCategory} className={`categoryButton ${selectedCategory === 'all' ? 'bg-purple active-shadow-bottom' : 'bg-normalPurple active-border-bottom'} w-100 py-2 text-white categoryButton`}>
                        All
                    </button>
                </div>
                <div className="col-4 text-center">
                    <button value="Catch" onClick={handleCategory} className={`categoryButton ${selectedCategory === 'catch' ? 'bg-purple active-shadow-bottom' : 'bg-normalPurple active-border-bottom'} w-100 py-2 text-white categoryButton`}>
                        Catch
                    </button>
                </div>
                <div className="col-4 text-center">
                    <button value="External" onClick={handleCategory} className={`categoryButton ${selectedCategory === 'external' ? 'bg-purple active-shadow-bottom' : 'bg-normalPurple active-border-bottom'} w-100 py-2 text-white categoryButton`}>
                        External
                    </button>
                </div>
            </div>

            <div className="col-12 align-items-center">
                {console.log("Matches = ", props.matches)}
                {console.log("Player = ", props.players)}

                {filtredMatches &&
                    filtredMatches.map((match) => (
                        <div className="row">
                            <HistoryMatch
                                id={match.id}
                                player1={match.player_one}
                                player2={match.player_two}
                                date={match.date.toDate().toDateString()}
                                image={props.players[match.player_one].image}
                                image2={props.players[match.player_two].image}
                                score={match.score_player_one}
                                score2={match.score_player_two}
                                category={selectedCategory}
                            />

                        </div>
                    ))}
            </div>
        </div>
    );
};

export default History;