import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {

    return (
        <div className="header row justify-content-center text-center py-4 mb-4 w-100">
            <div className="header-logo position-relevant">
                <Link to='/'>
                    <img src="images/Group 93.svg" alt="" />
                </Link>
                {props.text ? <p className="position-absolute start-50 mt-1" style={{ transform: 'translateX(-50%)' }}>{props.text}</p> : null}
            </div>

            {props.showBackButton !== false ? (
                <Link to={props.previousPage ? props.previousPage : sessionStorage.getItem('previousPage')} className="position-absolute " style={{ transform: 'translateY(-50%)', top: '50%', left: '0', width: 'fit-content' }}>
                    <img src="./images/arrow-left-regular.svg" alt="" style={{ width: '35px', filter: 'invert(100%)' }} />
                </Link>
            ) : ''}

        </div>
    );
};

export default Header;