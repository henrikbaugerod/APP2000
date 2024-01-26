import React from 'react';

const PlayerBox = () => {

    return (
        <div className="col-12">
            <div className="bg-darkPurple p-3 playerBox rounded-3">
                <div className="row align-items-center">
                    <div class="col-auto">
                        <h4 className="mb-0">1</h4>
                    </div>
                    <div className="col-auto">
                        <img src="images/person.jpg" alt="" />
                    </div>
                    <div className="col">
                        <h5 className="mb-0">Henrik</h5>
                    </div>
                    <div className="col-auto">
                        <h5 className="mb-0 fw-semibold">30 pts</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerBox;