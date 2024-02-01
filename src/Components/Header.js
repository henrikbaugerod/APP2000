import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {

    return (
        <div className="row justify-content-center text-center py-4 mb-4 position-relative w-100">
            <div className="header-logo">
                <img src="images/Group 93.svg" alt="" />
            </div>

            {props.showBackButton !== false ? (
                <Link to={props.backLink !== '' ? props.backLink : '/'} className="position-absolute " style={{ transform: 'translateY(-50%)', top: '50%', left: '0', width: 'fit-content' }}>
                    <img src="./images/arrow-left-regular.svg" alt="" style={{ width: '35px', filter: 'invert(100%)' }} />
                </Link>
            ) : ''}

        </div>
    );
};

export default Header;