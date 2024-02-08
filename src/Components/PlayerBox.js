import React from 'react';
import { Link } from 'react-router-dom';

const PlayerBox = (props) => {
    const setPlayerId = (id) => {
        sessionStorage.setItem('playerId', props.id)

        if (props.checkbox) {
            const playerBox = document.getElementById('box-' + props.id);
            playerBox.classList.toggle('opacity-50');

            const playerBoxImg = document.getElementById('boxImg-' + props.id);
            const playerBoxImgSrc = playerBoxImg.getAttribute('src')
            if (playerBoxImgSrc === './images/plus-solid.svg') {
                playerBoxImg.setAttribute('src', './images/minus-solid.svg')
                props.setPlayerCount(props.playerCount + 1);

                props.setRegisteredPlayers([...props.registeredPlayers, props.id]);
            } else {
                playerBoxImg.setAttribute('src', './images/plus-solid.svg')
                props.setPlayerCount(props.playerCount - 1);

                const tempArray = props.registeredPlayers.filter((index) => index !== props.id);

                props.setRegisteredPlayers(tempArray);
            }
        }
    }

    return (

        <button className="col-12 mb-2 text-white border-0 playerButton px-0" key="{props.place}" style={{ backgroundColor: 'transparent' }} onClick={() => setPlayerId(props.id)}>
            <div className={`bg-purple p-3 playerBox rounded-3 position-relative`} id={`box-${props.id}`}>
                <div className="row align-items-center">
                    <div className="col-1">
                        <h4 className="mb-0">{props.place + 1}</h4>
                    </div>
                    <div className="col-auto">
                        <img src={props.image} alt="" />
                    </div>
                    <div className="col text-start">
                        <h5 className="mb-0 text-capitalize">{props.name}</h5>
                    </div>
                    {props.checkbox ? (
                        <img src="./images/plus-solid.svg" className="me-2 playerBoxIcon" id={`boxImg-${props.id}`} style={{ filter: 'invert(100%)' }}></img>
                    ) : (
                        <div className="col-auto">
                            <h5 className="mb-0 fw-semibold">{props.points} pts</h5>
                        </div>
                    )}
                </div>
            </div>
        </button>

    );
};

export default PlayerBox;