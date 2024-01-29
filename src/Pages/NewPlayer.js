import React from 'react';
import Header from '../Components/Header';

const NewPlayer = () => {

    return (
        <div className="container">
            <Header 
                backLink={'/players'}
            />  

            <div className="row justify-content-center">
                <div className="col-4">
                    <div className='profilePic'>
                        <img src="./images/person.jpg"  alt="Profile Picture" className="rounded-circle borderCircle" />

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default NewPlayer;