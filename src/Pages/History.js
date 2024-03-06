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

            <div className="row gx-0 mb-4">
                <div className="col-4 text-center">                    
                    <button value="all" onClick={handleCategory} className={`categoryButton ${selectedCategory === 'all' ? 'bg-purple active-shadow-bottom' : 'bg-normalPurple active-border-bottom'} w-100 py-2 text-white categoryButton`}>
                        All
                    </button>
                </div>
                <div className="col-4 text-center">
                    <button value="catch" onClick={handleCategory} className={`categoryButton ${selectedCategory === 'catch' ? 'bg-purple active-shadow-bottom' : 'bg-normalPurple active-border-bottom'} w-100 py-2 text-white categoryButton`}>
                        Catch
                    </button>
                </div>
                <div className="col-4 text-center">
                    <button value="external" onClick={handleCategory} className={`categoryButton ${selectedCategory === 'external' ? 'bg-purple active-shadow-bottom' : 'bg-normalPurple active-border-bottom'} w-100 py-2 text-white categoryButton`}>
                        External
                    </button>
                </div>
            </div>

            <div className=''>
                <HistoryMatch 
                    date={"1. Februar"}
                    image={'./images/user-regular.svg'}
                    image2={'./images/user-regular.svg'}
                    score={'1-1'}
                />
                <HistoryMatch 
                    date={"24. Januar"}
                    image={'./images/user-regular.svg'}
                    image2={'./images/user-regular.svg'}
                    score={'1-1'}
                />
            </div>
        </div>
    );
};

export default History;