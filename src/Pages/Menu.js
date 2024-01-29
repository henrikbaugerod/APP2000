import React from 'react';
import Header from '../Components/Header';
import MenuButton from '../Components/MenuButton';
import { Link } from 'react-router-dom';



const Menu = (props) => {
    return (
        <div className="container">
            <Header
                backLink={'/'}
            />

            <Link to="/players" className="text-decoration-none">
                <MenuButton
                    image={'./images/user-regular.svg'}
                    text={"Players"}
                />
            </Link>

            <Link to="/tournaments" className="text-decoration-none">
                <MenuButton
                    image={'./images/trophy-solid.svg'}
                    text={"Tournaments"}
                ></MenuButton>
            </Link>

            <Link to="/history" className="text-decoration-none">
                <MenuButton
                    image={'./images/clock-rotate-left-solid.svg'}
                    text={"History"}
                ></MenuButton>
            </Link>

            <Link to="/surprise" className="text-decoration-none">
                <MenuButton
                    image={'./images/gift-solid.svg'}
                    text={"Surprise"}
                ></MenuButton>
            </Link>
        </div>
    );
};

export default Menu;