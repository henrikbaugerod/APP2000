import { BrowserRouter, Routes, Route, HashRouter, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import NewGame from "./Pages/NewGame";


let players = [
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
        "points": 24
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
        "points": 40
    },
    {
        "key": 4,
        "name": 'per',
        "age": 4,
        "points": 38
    }
];


function App() {
    return (
        <HashRouter>
            <Routes>

                <Route path="/"
                    element={<Home
                        players={players}
                    />}
                />

                <Route path="/menu"
                    element={<Menu

                    />}
                />

                <Route path="/newgame"
                    element={<NewGame
                        players={players}
                    />}
                />


            </Routes>
        </HashRouter>

    );
}

export default App;