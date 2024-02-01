import React from 'react';

const MenuButton = (props) => {

    return (
        <div className="row justify-content-center">
            <button className="menu-button mb-4 d-flex align-items-center">
                <img src={props.image} className='menu-icon ms-4' alt="profile" />
                <p className='mb-0'>{props.text}</p>
            </button>
        </div>
    );
};

export default MenuButton;