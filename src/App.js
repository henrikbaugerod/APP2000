import React, { useState, useEffect } from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import NewGame from "./Pages/NewGame";
import Players from "./Pages/Players";
import NewPlayer from './Pages/NewPlayer';
import PlayerProfile from './Pages/PlayerProfile';
import History from './Pages/History';

import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase';

function App() {
    const [players, setPlayers] = useState([]);
    const [sortedPlayers, setSortedPlayers] = useState([]);

    const fetchPost = async () => {
        await getDocs(collection(db, "players"))
            .then((querySnapshot) => {
                const unsortedData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }))
                    .map((player, index) => ({ ...player, ranking: index + 1 })); // Add ranking to each player without sorting

                const sortedData = [...unsortedData].sort((a, b) => b.points - a.points) // Sort players by points in descending order
                    .map((player, index) => ({ ...player, sortedRanking: index + 1 })); // Add ranking to each player

                setPlayers(unsortedData);
                setSortedPlayers(sortedData);
            })
    }



    useEffect(() => {
        fetchPost();
    }, [])


    return (
        <HashRouter>
            <Routes>

                <Route path="/"
                    element={<Home
                        players={players}
                        setPlayers={setPlayers}
                        sortedPlayers={sortedPlayers}
                        setSortedPlayers={setSortedPlayers}
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
                        sortedPlayers={sortedPlayers}
                        setSortedPlayers={setSortedPlayers}
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
                        sortedPlayers={sortedPlayers}
                        setSortedPlayers={setSortedPlayers}
                    />}
                />

                <Route path="/history"
                    element={<History

                    />}
                />


            </Routes>
        </HashRouter>

    );
}

export default App;