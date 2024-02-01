import React, { useState, useEffect } from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import NewGame from "./Pages/NewGame";
import Players from "./Pages/Players";
import NewPlayer from './Pages/NewPlayer';
import PlayerProfile from './Pages/PlayerProfile';

import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase';

function App() {
    const [players, setPlayers] = useState([]);

    const fetchPost = async () => {
        await getDocs(collection(db, "players"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }))
                    .sort((a, b) => b.points - a.points); // Sort players by points in descending order
                setPlayers(newData);
            })
    }


    useEffect(() => {
        fetchPost();
    }, [])

    console.log("Players= ", players)


    return (
        <HashRouter>
            <Routes>

                <Route path="/"
                    element={<Home
                        players={players}
                        setPlayers={setPlayers}
                    />}
                />

                <Route path="/menu"
                    element={<Menu

                    />}
                />

                <Route path="/newgame"
                    element={<NewGame
                        players={players}
                        setPlayers={setPlayers}
                    />}
                />

                <Route path="/players"
                    element={<Players
                        players={players}
                        setPlayers={setPlayers}
                    />}
                />

                <Route path="/newplayer"
                    element={<NewPlayer
                        players={players}
                        setPlayers={setPlayers}
                    />}
                />

                <Route path="/playerprofile"
                    element={<PlayerProfile
                        players={players}
                        setPlayers={setPlayers}
                    />}
                />


            </Routes>
        </HashRouter>

    );
}

export default App;