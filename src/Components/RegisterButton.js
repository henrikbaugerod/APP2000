import React from "react";

import { setDoc, updateDoc, doc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

const RegisterButton = (props) => {
    const player1Poeng = sessionStorage.getItem("player1poeng");
    const player2Poeng = sessionStorage.getItem("player2poeng");
    const playerId1 = props.playerId1;
    const playerId2 = props.playerId2;
    const player1GainedPoints = props.player1GainedPoints;
    const player2GainedPoints = props.player2GainedPoints;

    // Bruke poeng og oppdatere tilsvarende til database for hver spiller
    const handleClick = async () => {
        let pointsPlayer1;
        let pointsPlayer2;

        if (props.player1Points > props.player2Points) {
            pointsPlayer1 = parseInt(player1Poeng) + player1GainedPoints;
            pointsPlayer2 = parseInt(player2Poeng) - player2GainedPoints * -1;
        } else {
            pointsPlayer1 = parseInt(player1Poeng) - player1GainedPoints * -1;
            pointsPlayer2 = parseInt(player2Poeng) + player2GainedPoints;
        }

        // Lagre resultat og sende til database
        const player1Ref = doc(db, "players", props.playerId1);
        const player2Ref = doc(db, "players", props.playerId2);

        try {
            await updateDoc(player1Ref, { points: pointsPlayer1 });
            await updateDoc(player2Ref, { points: pointsPlayer2 });

            // Update the players with the new points
            const updatedPlayers = [...props.players];
            const playerIndex1 = updatedPlayers.findIndex(
                (player) => player.id === props.playerId1
            );
            const playerIndex2 = updatedPlayers.findIndex(
                (player) => player.id === props.playerId2
            );
            if (playerIndex1 !== -1) {
                updatedPlayers[playerIndex1] = {
                    ...updatedPlayers[playerIndex1],
                    points: pointsPlayer1,
                };
                props.setPlayers(updatedPlayers);
            }
            if (playerIndex2 !== -1) {
                updatedPlayers[playerIndex2] = {
                    ...updatedPlayers[playerIndex2],
                    points: pointsPlayer2,
                };
                props.setPlayers(updatedPlayers);
            }
            
        } catch (e) {
            console.log("Could not update player points")
        } finally {
            console.log("Points updated")
        }

        // Add the match to the database
        const maxId = findMaxId(props.matches);
        const newMatchId = (maxId + 1);
        const matchData = {
            date: Timestamp.now(),
            id: newMatchId,
            player_one: playerId1,
            player_two: playerId2,
            score_player_one: props.player1Points,
            score_player_two: props.player2Points
        } 

        // Add new match to Firestore
        await setDoc(doc(db, "matches", newMatchId.toString()), matchData);

        // Update the matches list in the parent component
        const updatedMatches = [...props.matches, matchData];
        props.setMatches(updatedMatches);



        // 

        // Gå til forside/annen logikk
    };

    // Function to find the biggest id
    function findMaxId(matches) {
        let maxId = -Infinity;
        for (let match of matches) {
            const matchId = parseInt(match.id);
            if (matchId > maxId) {
                maxId = matchId;
            }
        }

        return maxId;
    }

    return (
        <div>
            <button onClick={handleClick}>{props.buttonText}</button>
        </div>
    );
};

export default RegisterButton;
