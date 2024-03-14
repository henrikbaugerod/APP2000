import React, { useEffect } from 'react';
import Header from '../Components/Header';
import MenuButton from '../Components/MenuButton';
import { Link } from 'react-router-dom';



const Menu = (props) => {
    useEffect(() => {
        sessionStorage.setItem('currentPage', '/menu')
    }, []);

    return (
        <div className="container">
            <Header 
                previousPage='/'
            />

            <Link to="/players" className="text-decoration-none">
                <MenuButton
                    image={'./images/user-regular.svg'}
                    text={"Players"}
                    previousPage='/menu'
                />
            </Link>

            <Link to="/tournament" className="text-decoration-none">
                <MenuButton
                    image={'./images/trophy-solid.svg'}
                    text={"Tournaments"}
                    previousPage='/menu'
                />
            </Link>

            <Link to="/history" className="text-decoration-none">
                <MenuButton
                    image={'./images/clock-rotate-left-solid.svg'}
                    text={"Match history"}
                    previousPage='/menu'
                />
            </Link>

            <Link to="/surprise" className="text-decoration-none">
                <MenuButton
                    image={'./images/swords-regular.svg'}
                    text={"Challenge"}
                    previousPage='/menu'
                />
            </Link>
        </div>
    );
};

export default Menu;