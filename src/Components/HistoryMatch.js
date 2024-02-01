import React from 'react';

const HistoryMatch = (props) => {
    console.log(new Date(8.64e15).toString());


    return (
        <div className="row justify-content-center">
            <button className="history-button mb-4 d-flex">
                <p>01.02.2024</p>
                <img src={props.image} className='history-image ms-4' alt="profile" />

                <p>Score</p>
            </button>
        </div>
    );
};

export default HistoryMatch;