import React from 'react';
import PlayerBox from './PlayerBox';

const sortList = (array) => {
    const sortedList = array.sort((a, b) => b.points - a.points);

    console.log(sortedList)
}

const Scoreboard = (props) => {
    const players = props.players;

    return (
        <div className="row justify-content-center gx-0">
            <div className="mb-5">
                <div className="col-12 d-flex align-items-center">
                    <div className="podium podium-side bg-silver rounded-start">
                        <img src="images/person.jpg" alt="" />
                        <h5 className="text-black mt-2">Henrik</h5>
                        <p className="text-black">40 pts</p>
                    </div>
                    <div className="podium podium-middle bg-gold rounded">
                        <img src="images/person.jpg" alt="" />
                        <h4 className="text-black mt-2">Hanne</h4>
                        <p className="text-black">40 pts</p>
                    </div>
                    <div className="podium podium-side bg-bronze rounded-end">
                        <img src="images/person.jpg" alt="" />
                        <h5 className="text-black mt-2">Anders</h5>
                        <p className="text-black">40 pts</p>
                    </div>
                </div>
            </div>


            {sortList(props.players)}

            <PlayerBox />
        </div>
    );
};

export default Scoreboard;