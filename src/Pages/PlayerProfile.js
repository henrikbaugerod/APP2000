import Header from '../Components/Header';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Playerprofile = (props) => {
    const [activeButton, setActiveButton] = useState('information');

    const handleTabChange = (tab) => {
        setActiveButton(tab);
    }


    return (
        <div className="container">
            <Header
                backLink={'/newplayer'} />
            <div className="row justify-content-center">
                <div className="col-4">
                    <div className='profilePic'>
                        <img src="./images/person.jpg" alt="profile" className="rounded-circle borderCircle" />
                    </div>
                </div>
            </div>
            <div className='row mt-3 justify-content-center'>
                <div className='col-3'>
                    <div className='editButton'>
                    <Link to="/" className="d-flex btn bg-darkPurple text-white justify-content-center py-3 rounded-pill">
                        Change
                    </Link>
                    </div>
                </div>
            </div>
            <div className="row gx-0 mt-5" style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.3)' }}>
                <div className={`col-6 text-center `}>
                    <button type="button" className={`${activeButton === 'information' ? 'bg-purple' : 'bg-normalPurple'} w-100 border-0 py-2 text-white categoryButton`} onClick={() => handleTabChange('information')}>
                        Information
                    </button>
                </div>
                <div className={`col-6 text-center`}>
                    <button type="button" className={`${activeButton === 'stats' ? 'bg-purple' : 'bg-normalPurple'} w-100 border-0 py-2 text-white categoryButton`} onClick={() => handleTabChange('stats')}>
                        Stats
                    </button>
                </div>
            </div>

            {/* Content based on the active tab */}
            {activeButton === 'information' && (
                <div>
                    {/* Render Information content here */}
                    
                    <div className='row mt-5'>
                        <div className='col-12'>
                            <div className='textBox'>
                                <input type="text" id="name" name="name" placeholder="Name" className='mb-3 rounded-3' value="Hentes fra Database" readonly></input>
                                <input type="text" id="nickName" name="nickName" placeholder="Nickname" className='rounded-3' value={`${props.players.nickname}`} readonly></input>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-12'>
                            <div className='header1'>
                                <h1>Category</h1>
                                    <div className='checkBox'>
                                        <input class="form-radio-input" type="radio" id="cat" name="cat" value="catch"/>
                                        <label class="form-check-label" for="catch">CATCH</label>
                                    </div>
                                    <div className='checkBox'>
                                        <input class="form-radio-input" type="radio" id="cat" name="cat" value="external"/>
                                        <label class="form-check-label" for="external">External</label>
                                    </div>
                            </div>
                        </div>
                    </div>
                    

                </div>
            )}

            {activeButton === 'stats' && (
                <div>
                    {/* Render Stats content here */}
                    <p>Stats content goes here</p>
                </div>
            )}
        </div>


    );
};

export default Playerprofile;