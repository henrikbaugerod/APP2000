import React from 'react';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

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
                                <input class="form-check-input" type="checkbox" id="catch" name="catch" value="catch"/>
                                <label class="form-check-label" for="catch">Catch</label>
                            </div>
                            <div className='checkBox'>
                            <input class="form-check-input" type="checkbox" id="external" name="external" value="external"/>
                                <label class="form-check-label" for="external">External</label>
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
    );
};

export default NewPlayer;