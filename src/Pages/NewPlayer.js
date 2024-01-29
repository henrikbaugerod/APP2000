import React from 'react';
import Header from '../Components/Header';

const NewPlayer = () => {

    return (
        <div className="container">
            <Header 
                backLink={'/players'}
            />            
        </div>
    );
};

export default NewPlayer;