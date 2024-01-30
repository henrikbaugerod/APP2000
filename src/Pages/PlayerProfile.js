import React from 'react';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

const playerprofile = () => {

    return (
        <div className="container">
        <Header 
            backLink={'/newplayer'}
        /> 
            <div className="row justify-content-center">
                <div className="col-4">
                    <div className='profilePic'>
                        <img src="./images/person.jpg"  alt="Profile Picture" className="rounded-circle borderCircle" />
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-5">
                <div className='col-5'>
                    <div className='buttons'>
                        <button type="button">Click Me!</button>
                        <button type="button">Click me!</button>
                    </div>
                </div>
            </div>
        </div>
        
        
        );
    };
    
    export default playerprofile;