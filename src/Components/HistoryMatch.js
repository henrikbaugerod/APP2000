import React from 'react';
import { Link } from 'react-router-dom';

const HistoryMatch = (props) => {
    console.log(new Date(8.64e15).toString());
        const setPlayerId = () => {
            sessionStorage.setItem('playerId', props.id)
        }
    


    return (
        <div className="col-12 mb-2 text-white border-0" key="{props.place} ">
            <div className="p-3 playerBox" style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
                <div className="row align-items-center">
                    <div className="col">
                        <h5 className="mb-0">{props.date}</h5>
                    </div>

                    <div className="col-auto">
                        <div className='row gx-2 justify-content-center'>
                            <div className="col-auto text-end">
                                <Link to="/playerprofile" className="text-decoration-none">
                                    <img src={props.image} alt="" className='img-fluid' />
                                </Link>
                            </div>
                            <div className="col-auto">
                                <h5>vs</h5>
                            </div>
                            <div className="col-auto">
                                <Link to="/playerprofile" className="text-decoration-none">
                                    <img src={props.image2} alt="" className='img-fluid' />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col text-end">
                        <h5 className="mb-0 fw-semibold">{props.score}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryMatch;