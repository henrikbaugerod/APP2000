import React from 'react';

const PlayerBox = (props) => {

    return (
        <div className="col-12 mb-2" key="{props.place}">
            <div className="bg-purple p-3 playerBox rounded-3">
                <div className="row align-items-center">
                    <div className="col-auto">
                        <h4 className="mb-0">{props.place + 1}</h4>
                    </div>
                    <div className="col-auto">
                        <img src={props.image} alt="" />
                    </div>
                    <div className="col">
                        <h5 className="mb-0 text-capitalize">{props.name}</h5>
                    </div>
                    <div className="col-auto">
                        <h5 className="mb-0 fw-semibold">{props.points} pts</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerBox;