import React from 'react';

const NewGamePlayer = () => {

    return (
        <div className="container">
            <div className="row">

                {/* Picture */}
                <div className="col-12">
                    <div className="circle bg-darkPurple">

                    </div>
                </div>

                {/* Name */}
                <div className="newGameName">
                    <p>tekst</p>
                </div>

                {/* Points */}
                <div className="newGamePoints bg-darkPurple rounded-3">
                    <p>poeng</p>
                </div>
            </div>
        </div>
    );
};

export default NewGamePlayer;