import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';

const Surprise = () => {
    const [challenge1, setChallenge1] = useState('None');
    const [challenge2, setChallenge2] = useState('None');
    const [isSpinning, setIsSpinning] = useState(false);

    const generateRandomNumber = (max) => {
        return Math.floor(Math.random() * max);
    }

    const handleButtonClick = () => {
        setIsSpinning(true);

        const challenges = [
            "Spill med kun én arm.",
            "Spill bak ryggen.",
            "Bruk den svake hånden til å spille.",
            "Spill med lukkede øyne.",
            "Bruk køen som om det var en båt å ro med.",
            "Spill med en vekt på armen.",
            "Spill med bøyd kne.",
            "Stå på ett ben mens du spiller.",
            "Bytt om på hånden du spiller med etter hvert skudd.",
            "Mål og skyt med motsatt hånd."
        ];

        // Create a spinning effect with dummy values
        let spins = 0;
        const spinInterval = setInterval(() => {
            setChallenge1(challenges[generateRandomNumber(challenges.length)]);
            setChallenge2(challenges[generateRandomNumber(challenges.length)]);
            spins++;

            if (spins === 20) {
                clearInterval(spinInterval);
                // Set final item after spinning is complete
                setChallenge1(challenges[generateRandomNumber(challenges.length)]);
                setChallenge2(challenges[generateRandomNumber(challenges.length)]);
                setIsSpinning(false);
            }
        }, 100); // Adjust speed of spinning

        // Adding spinning animation
        const items = document.getElementsByClassName('item');

        Array.from(items).forEach((item) => item.classList.add('spinning'));
    }

    return (
        <div className="container">
            <Header
                backLink={'/menu'}
            />

            <div className="row">
                <div className="col-6 text-center">
                    <h2>Player 1</h2>
                    <p className={`item ${isSpinning ? 'spinning' : ''}`}>{challenge1}</p>
                </div>
                <div className="col-6 text-center">
                    <h2>Player 2</h2>
                    <p className={`item ${isSpinning ? 'spinning' : ''}`}>{challenge2}</p>
                </div>
            </div>

            <div className="row justify-content-center mt-5">
                <div className="col-auto">
                    <button className="btn button bg-darkPurple text-white justify-content-center py-3 rounded-pill" onClick={handleButtonClick} disabled={isSpinning}>Spin the wheel</button>
                </div>
            </div>
        </div>
    );

}
export default Surprise;
