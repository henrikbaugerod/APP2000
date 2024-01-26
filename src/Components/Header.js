import React from 'react';

const Header = (props) => {

    return (
        <div className="row justify-content-center text-center py-4">
            <div className="header-logo">
                <img src="images/Group 93.svg" alt="" />

                <h1>{props.title}</h1>

            </div>
        </div>
    );
};

export default Header;