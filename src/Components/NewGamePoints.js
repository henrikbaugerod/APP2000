import { Button } from 'bootstrap';
import React from 'react';
import AddSubButton from './AddSubButton';

const NewGamePoints = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">

                    {/* Score */}
                    <div className="row">
                        <div className='col-12'>
                            <div className="pointsCircle bg-purple">

                            </div>
                        </div>
                    </div>

                    {/* Add or retract */}
                    <div className='row'>
                        <div className='col-6 button'>
                            <AddSubButton buttonText="+" />
                        </div>
                        <div className='col-6 button'>
                            <AddSubButton buttonText="-" />
                        </div>
                    </div>


                    {/* Points gained or lossed */}
                    <div className='row'>
                        <div className='col-12'>
                            <div className="newGameScore bg-purple rounded-3">
                                <p>poeng</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewGamePoints;