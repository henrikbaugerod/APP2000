import React from 'react';

const NewGamePlayer = () => {

    return (
        <div className="container">
            <div className="row">
                <div className='col-12'>

                    {/* Picture */}
                    <div className='row'>
                        <div className='col-12'>
                            <div className="playerCircle bg-purple">

                            </div>
                        </div>
                    </div>

                    {/* Name */}
                    <div className='row'>
                        <div className='col-12'>
                            <div className="newGameName">
                                <p>tekst</p>
                            </div>
                        </div>
                    </div>

                    {/* Points */}
                    <div className='row'>
                        <div className='col-12'>
                            <div className="newGamePoints bg-purple rounded-3">
                                <p>poeng</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewGamePlayer;