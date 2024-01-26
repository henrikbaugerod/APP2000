import React from 'react';

const MenuButton = () => {

    return (
        <div className="row justify-content-center">
            <button className="menu-button">
                <img src='./images/user-regular.svg' className='menu-icon ms-4'/>
                Players
            </button>
        </div>
    );
};

export default MenuButton;