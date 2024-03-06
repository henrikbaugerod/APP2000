import React, { useEffect } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

const NewPlayer = (props) => {
    useEffect(() => {
        sessionStorage.setItem('currentPage', '/newplayer')
    }, []);

    return (
        <div className="container">
            <Header
                backLink={'/players'}
            />

            <div>
                <div className="row justify-content-center">
                    <div className="col-4">
                        <div className='profilePic'>
                            <img src="" alt="Profile" className="rounded-circle borderCircle" />
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-12'>
                        <div className='textBox'>
                            <input type="text" id="name" name="name" placeholder="Name" className='mb-3 rounded-3'></input>
                            <input type="text" id="nickName" name="nickName" placeholder="Nickname" className='rounded-3'></input>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-12'>
                        <div className='header1'>
                            <h1>Category</h1>
                            <div className='checkBox'>
                                <input className="form-radio-input" type="radio" id="cat" name="cat" value="catch" />
                                <label className="form-check-label" htmlFor="catch">Catch</label>
                            </div>
                            <div className='checkBox'>
                                <input className="form-radio-input" type="radio" id="cat" name="cat" value="external" />
                                <label className="form-check-label" htmlFor="external">External</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 pt-5">
                    <div className="col-6">
                        <Link to="/playerprofile" className="d-flex btn bg-darkPurple text-white justify-content-center py-3 rounded-pill">
                            Register
                        </Link>
                    </div>
                    <div className="col-6">
                        <Link to="/players" className="d-flex btn border border-white text-white justify-content-center py-3 rounded-pill">
                            Cancel
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default NewPlayer;