import React, { useState } from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import NewGame from "./Pages/NewGame";
import Players from "./Pages/Players";
import NewPlayer from './Pages/NewPlayer';
import PlayerProfile from './Pages/PlayerProfile';


const players = [
    {
        "key": 0,
        "name": 'henrik',
        "image": 'images/person.jpg',
        "points": 30,
        "category": 'catch'
    },
    {
        "key": 1,
        "name": 'hanne',
        "image": 'images/person.jpg',
        "points": 2,
        "category": 'external'
    },
    {
        "key": 2,
        "name": 'anders',
        "image": 'images/person.jpg',
        "points": 3,
        "category": 'catch'
    },
    {
        "key": 3,
        "name": 'morten',
        "image": 'images/person.jpg',
        "points": 23,
        "category": 'external'
    },
    {
        "key": 4,
        "name": 'per',
        "image": 'images/person.jpg',
        "points": 38,
        "category": 'catch'
    },
    {
        "key": 5,
        "name": 'Ståle',
        "image": 'images/person.jpg',
        "points": 30,
        "category": 'external'
    },
    {
        "key": 6,
        "name": 'Mattis',
        "image": 'images/person.jpg',
        "points": 30,
        "category": 'catch'
    },
    {
        "key": 7,
        "name": 'Thor',
        "image": 'images/person.jpg',
        "points": 30,
        "category": 'catch'
    },
    {
        "key": 8,
        "name": 'Henning',
        "image": 'images/person.jpg',
        "points": 30,
        "category": 'external'
    }
];

const sortedPlayers = (players) => {
    const sortedList = JSON.parse(JSON.stringify(players));
    const sortedPlayersWithRanking = sortedList
        .sort((a, b) => b.points - a.points)
        .map((player, index) => ({ ...player, ranking: index }));
    return sortedPlayersWithRanking;
}

function App() {
    const [sortedPlayersList, setSortedPlayersList] = useState(sortedPlayers(players));

    return (
        <HashRouter>
            <Routes>

                <Route path="/"
                    element={<Home
                        players={sortedPlayersList}
                        setPlayers={setSortedPlayersList}
                    />}
                />

                <Route path="/menu"
                    element={<Menu

                    />}
                />

                <Route path="/newgame"
                    element={<NewGame
                        players={sortedPlayersList}
                        setPlayers={setSortedPlayersList}
                    />}
                />

                <Route path="/players"
                    element={<Players
                        players={sortedPlayersList}
                        setPlayers={setSortedPlayersList}
                    />}
                />

                <Route path="/newplayer"
                    element={<NewPlayer
                        players={sortedPlayersList}
                        setPlayers={setSortedPlayersList}
                    />}
                />

                <Route path="/playerprofile"
                    element={<PlayerProfile
                        players={sortedPlayersList}
                        setPlayers={setSortedPlayersList}
                    />}
                />


            </Routes>
        </HashRouter>

    );
}

export default App;