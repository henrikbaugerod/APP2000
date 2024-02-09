import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';

const Surprise = () => {
    const [challenge1, setChallenge1] = useState('None');
    const [challenge2, setChallenge2] = useState('None');

    const handleButtonClick = () => {
        const challenges = [
            "Ting 1",
            "Ting 2",
            "Ting 3"
        ]

        // Setting the challenge for each player
        setChallenge1(challenges[generateRandomNumber(challenges.length)]);
        setChallenge2(challenges[generateRandomNumber(challenges.length)]);
    }

    const generateRandomNumber = (max) => {
        return Math.floor(Math.random() * max);
    }

    return (
        <div className="container">
            <Header
                backLink={'/menu'}
            />

            <div className="row">
                <div className="col-6 text-center">
                    <h2>Player 1</h2>
                    <p className="spinning">{challenge1}</p>
                </div>
                <div className="col-6 text-center">
                    <h2>Player 2</h2>
                    <p className="spinning">{challenge2}</p>
                </div>
            </div>

            <div className="row justify-content-center mt-5">
                <div className="col-auto">
                    <button className="btn button bg-darkPurple text-white justify-content-center py-3 rounded-pill" onClick={handleButtonClick}>Spin the wheel</button>
                </div>
            </div>

            <div class="slots spinning">
                <div class="window">
                    <div class="outer-col"><div class="colen">dwada</div></div>
                </div>
            </div>
            <input type="button" onclick="spin(this)" value="spin" />
        </div>
    );

}
export default Surprise;