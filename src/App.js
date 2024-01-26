import { BrowserRouter, Routes, Route, HashRouter, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";


let players = [
    {
        "key": 0,
        "name": 'henrik',
        "age": 4
    },
    {
        "key": 1,
        "name": 'hanne',
        "age": 20
    },
    {
        "key": 2,
        "name": 'anders',
        "age": 4
    },
    {
        "key": 3,
        "name": 'morten',
        "age": 4
    },
    {
        "key": 4,
        "name": 'per',
        "age": 4
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


            </Routes>
        </HashRouter>

    );
}

export default App;