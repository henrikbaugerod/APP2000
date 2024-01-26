import { BrowserRouter, Routes, Route, HashRouter, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import NewGame from "./Pages/NewGame";


const players = [
    {
        "key": 0,
        "name": 'henrik',
        "age": 4,
        "points": 30
    },
    {
        "key": 1,
        "name": 'hanne',
        "age": 20,
        "points": 2
    },
    {
        "key": 2,
        "name": 'anders',
        "age": 4,
        "points": 3
    },
    {
        "key": 3,
        "name": 'morten',
        "age": 4,
        "points": 23
    },
    {
        "key": 4,
        "name": 'per',
        "age": 4,
        "points": 38
    },
    {
        "key": 5,
        "name": 'Ståle',
        "age": 20,
        "points": 30
    }
];

const sortedPlayers = (players) => {
    // Deep copy the original array
    const sortedList = JSON.parse(JSON.stringify(players));
    // Sort the copied array
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