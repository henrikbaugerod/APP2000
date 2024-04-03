import React from "react";

import { updateDoc, doc } from "firebase/firestore";
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

        if (player1GainedPoints > 0) {
            pointsPlayer1 = parseInt(player1Poeng) + player1GainedPoints;
            console.log(player1GainedPoints, parseInt(player1Poeng));
        } else {
            pointsPlayer1 = parseInt(player1Poeng) - player1GainedPoints;
        }

        if (player2GainedPoints > 0) {
            pointsPlayer2 = parseInt(player2Poeng) + player2GainedPoints;
        } else {
            pointsPlayer2 = parseInt(player2Poeng) - player2GainedPoints;
        }

        // Lagre resultat og sende til database
        const player1Ref = doc(db, "players", props.playerId1);
        const player2Ref = doc(db, "players", props.playerId2);

        try {
            await updateDoc(player1Ref, { points: pointsPlayer1 });
            await updateDoc(player2Ref, { points: pointsPlayer2 });
        } catch(e) {
            console.log("Could not update player points")
        } finally {
            console.log("Points updated")
        }

        // Gå til forside/annen logikk
    };

    return (
        <div>
            <button onClick={handleClick}>{props.buttonText}</button>
        </div>
    );
};

export default RegisterButton;
