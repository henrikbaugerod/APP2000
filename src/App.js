import React, { useState, useEffect } from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import NewGame from "./Pages/NewGame";
import Players from "./Pages/Players";
import NewPlayer from './Pages/NewPlayer';
import PlayerProfile from './Pages/PlayerProfile';
import History from './Pages/History';
import Tournament from './Pages/Tournament';
import TournamentGame from './Pages/TournamentGame';


import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase';
import Surprise from './Pages/Surprise';
import TournamentWinner from './Pages/TournamentWinner';

function App() {
    const [players, setPlayers] = useState([]);
    const [sortedPlayers, setSortedPlayers] = useState([]);
    const [matches, setMatches] = useState([]);
    const [registeredPlayers, setRegisteredPlayers] = useState([]);
    const [tournamentMatches, setTournamentMatches] = useState([]);
    const [round, setRound] = useState(null);

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

    const fetchMatches = async () => {
        await getDocs(collection(db, "matches"))
            .then((querySnapshot) => {
                const unsortedMatches = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }))

                setMatches(unsortedMatches);
            })
    }


    useEffect(() => {
        fetchPost();
        fetchMatches();
        sessionStorage.setItem('currentPage', '/');
        sessionStorage.setItem('previousPage', '/');
    }, [])

    return (
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                players={players}
                setPlayers={setPlayers}
                sortedPlayers={sortedPlayers}
                setSortedPlayers={setSortedPlayers}
              />
            }
          />

          <Route path="/menu" element={<Menu />} />

          <Route
            path="/newgame"
            element={
              <NewGame
                players={players}
                setPlayers={setPlayers}
              />
            }
          />

          <Route
            path="/players"
            element={
              <Players
                players={players}
                setPlayers={setPlayers}
                sortedPlayers={sortedPlayers}
                setSortedPlayers={setSortedPlayers}
              />
            }
          />

          <Route
            path="/newplayer"
            element={<NewPlayer players={players} setPlayers={setPlayers} />}
          />

          <Route
            path="/playerprofile"
            element={
              <PlayerProfile
                players={players}
                setPlayers={setPlayers}
                sortedPlayers={sortedPlayers}
                setSortedPlayers={setSortedPlayers}
                matches={matches}
              />
            }
          />

          <Route
            path="/history"
            element={<History players={players} matches={matches} />}
          />

          <Route
            path="/tournament"
            element={
              <Tournament
                players={players}
                sortedPlayers={sortedPlayers}
                registeredPlayers={registeredPlayers}
                setRegisteredPlayers={setRegisteredPlayers}
                setTournamentMatches={setTournamentMatches}
                setRound={setRound}
              />
            }
          />

          <Route
            path="/tournament-game"
            element={
              <TournamentGame
                players={players}
                registeredPlayers={registeredPlayers}
                tournamentMatches={tournamentMatches}
                setTournamentMatches={setTournamentMatches}
                round={round}
                setRound={setRound}
              />
            }
          />

          <Route
            path="/tournamentwinner"
            element={<TournamentWinner players={players} />}
          />

          <Route path="/surprise" element={<Surprise />} />
        </Routes>
      </HashRouter>
    );
}

export default App;