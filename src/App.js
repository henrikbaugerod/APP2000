import { BrowserRouter, Routes, Route, HashRouter, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import NewGame from "./Pages/NewGame";


const players = [
    {
        "key": 0,
        "name": 'henrik',
        "image": 'images/person.jpg',
        "points": 30
    },
    {
        "key": 1,
        "name": 'hanne',
        "image": 'images/person.jpg',
        "points": 2
    },
    {
        "key": 2,
        "name": 'anders',
        "image": 'images/person.jpg',
        "points": 3
    },
    {
        "key": 3,
        "name": 'morten',
        "image": 'images/person.jpg',
        "points": 23
    },
    {
        "key": 4,
        "name": 'per',
        "image": 'images/person.jpg',
        "points": 38
    },
    {
        "key": 5,
        "name": 'Ståle',
        "image": 'images/person.jpg',
        "points": 30
    },
    {
        "key": 6,
        "name": 'Mattis',
        "image": 'images/person.jpg',
        "points": 30
    },
    {
        "key": 7,
        "name": 'Thor',
        "image": 'images/person.jpg',
        "points": 30
    },
    {
        "key": 8,
        "name": 'Henning',
        "image": 'images/person.jpg',
        "points": 30
    }
];

const sortedPlayers = (players) => {
    const sortedList = JSON.parse(JSON.stringify(players));
    return sortedList.sort((a, b) => b.points - a.points);
}

const sortedPlayersList = sortedPlayers(players);


function App() {
    return (
        <HashRouter>
            <Routes>

                <Route path="/"
                    element={<Home
                        players={sortedPlayersList}
                    />}
                />

                <Route path="/menu"
                    element={<Menu

                    />}
                />

                <Route path="/newgame"
                    element={<NewGame
                        players={sortedPlayersList}
                    />}
                />


            </Routes>
        </HashRouter>

    );
}

export default App;