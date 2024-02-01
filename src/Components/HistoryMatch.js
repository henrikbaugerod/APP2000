import React from 'react';
import { Link } from 'react-router-dom';

const HistoryMatch = (props) => {
    console.log(new Date(8.64e15).toString());


    return (
        <div className="col-12 mb-2 text-white border-0" key="{props.place}" style={{ backgroundColor: 'transparent' }}>
            <div className="p-3 playerBox">
                <div className="row align-items-center">
                    <div className="col-4 text-start">
                        <h5 className="mb-0">{props.date}</h5>
                    </div>

                    <div className="col-1">
                        <Link to="/players" className="text-decoration-none">
                            <img src={props.image} alt="" className="img-fluid" />
                        </Link>
                    </div>
                    <div className="col-1">
                        <h5>vs</h5>
                    </div>
                    <div className="col-1">
                        <img src={props.image2} alt="" className="img-fluid" />
                    </div>
                    <div className="col-4 text-end">
                        <h5 className="mb-0 fw-semibold">{props.score}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryMatch;