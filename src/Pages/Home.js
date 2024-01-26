import React from 'react';
import Header from '../Components/Header';

const Home = (props) => {

    return (
        <div className="container">
            <Header
                title={''}
            />

            {props.array.map((item) => (
                <div>
                    <p>{item.name}</p>
                    <span>{item.age}</span>
                </div>
            ))}

        </div>

    );
};

export default Home;