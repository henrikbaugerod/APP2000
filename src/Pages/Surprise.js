import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

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
            "Play with only one arm.",
            "Play behind your back.",
            "Use your non-dominant hand to play.",
            "Play with closed eyes.",
            "Use the cue as if it were a rowing boat oar.",
            "Play with a weight on your arm.",
            "Play with bent knees.",
            "Stand on one leg while playing.",
            "Switch the hand you play with after each shot.",
            "Aim and shoot with the opposite hand.",
            "Play blindfolded and have a friend guide your aim.",
            "Play with your eyes focused on a fixed point on the ceiling.",
            "Balance a small object on the cue while playing.",
            "Play with your feet instead of hands.",
            "Try to use a different stance for each shot.",
            "Play with a longer or shorter cue than usual.",
            "Place obstacles on the table and navigate around them while playing.",
            "Play while standing on a wobbly surface.",
            "Use a mirror to aim instead of looking directly at the table."
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
                <div className="col-6 text-center d-flex align-items-center flex-column">
                    <div className="bg-purple rounded-circle d-flex justify-content-center align-items-center" style={{ aspectRatio: 1, width: '150px' }}>
                        <h4 className="mb-0">Player 1</h4>
                    </div>
                    <p className={`item mt-3 py-2 px-2 w-100 rounded ${isSpinning ? 'spinning' : ''}`} style={{ backgroundColor: '#7900FF' }}>{challenge1}</p>
                </div>
                <div className="col-6 text-center d-flex align-items-center flex-column">
                    <div className="bg-purple rounded-circle d-flex justify-content-center align-items-center" style={{ aspectRatio: 1, width: '150px' }}>
                        <h4 className="mb-0">Player 2</h4>
                    </div>
                    <p className={`item mt-3 py-2 px-2 w-100 rounded ${isSpinning ? 'spinning' : ''}`} style={{ backgroundColor: '#7900FF' }}>{challenge2}</p>
                </div>
            </div>

            <div className="row justify-content-center mt-5">
                <div className="col-auto">
                    <button className="btn button bg-darkPurple text-white justify-content-center py-3 rounded-pill px-4" onClick={handleButtonClick} disabled={isSpinning}>Generate challenges</button>
                </div>
            </div>
        </div>
    );

}
export default Surprise;
