import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { setDoc, updateDoc, doc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

const RegisterButton = (props) => {
  const navigate = useNavigate();
  const player1Poeng = sessionStorage.getItem("player1poeng");
  const player2Poeng = sessionStorage.getItem("player2poeng");
  const player1GainedPoints = props.player1GainedPoints;
  const player2GainedPoints = props.player2GainedPoints;

  // Bruke poeng og oppdatere tilsvarende til database for hver spiller
  const handleClick = async () => {
    let playerId1 = sessionStorage.getItem("playerId1");
    let playerId2 = sessionStorage.getItem("playerId2");

    if (playerId1 && playerId2) {
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
        const updatedPlayers = [...props.players.players];
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
          props.players.setPlayers(updatedPlayers);
        }
        if (playerIndex2 !== -1) {
          updatedPlayers[playerIndex2] = {
            ...updatedPlayers[playerIndex2],
            points: pointsPlayer2,
          };
          props.players.setPlayers(updatedPlayers);
        }
      } catch (e) {
        console.log("Could not update player points");
      } finally {
        console.log("Points updated");
      }

      // Finding out if the match has an external player
      let externalPlayer = false;
      if (
        props.players.players[playerId1].location === "external" ||
        props.players.players[playerId2].location === "external"
      ) {
        externalPlayer = true;
      }

      // Add the match to the database
      let maxId = findMaxId(props.matches);
      if (maxId === -Infinity) {
        maxId = 0;
      }
      console.log(maxId, "maxId");
      const newMatchId = maxId + 1;
      const matchData = {
        date: Timestamp.now(),
        id: newMatchId,
        player_one: playerId1,
        player_two: playerId2,
        score_player_one: props.player1Points,
        score_player_two: props.player2Points,
        location: externalPlayer ? "External" : "Catch",
      };

      // Add new match to Firestore
      await setDoc(doc(db, "matches", newMatchId.toString()), matchData);

      // Update the matches list in the parent component
      const updatedMatches = [...props.matches, matchData];
      props.setMatches(updatedMatches);

      // Gå til forside/annen logikk, resette NewGame
      props.onSetPlayerId1(null);
      props.onSetPlayerId2(null);
      sessionStorage.removeItem("playerId");
      console.log("fixed");
      navigate("/");
    } else {
        console.log("only 1 player");
    }


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
