import React from 'react';
import Header from '../Components/Header';

const playerprofile = () => {

    return (
        <div className="container">
        <Header 
            backLink={'/newplayer'}
        /> 
            <div className="row justify-content-center">
                <div className="col-4">
                    <div className='profilePic'>
                        <img src="./images/person.jpg"  alt="profile" className="rounded-circle borderCircle" />
                    </div>
                </div>
            </div>
            <div className="row gx-0 mt-5" style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.3)' }}>
                <div className='col-6 text-center'>
                    <button type="button" id="highlight" className='bg-purple bg-normalPurple w-100 border-0 py-2 text-white categoryButton'>
                        Information
                    </button>
                </div>
                <div className='col-6 text-center'>
                    <button type="button" className='bg-purple bg-normalPurple w-100 border-0 py-2 text-white categoryButton'>
                        Stats
                    </button>
                </div>
            </div>
        </div>
        
        
        );
    };
    
    export default playerprofile;