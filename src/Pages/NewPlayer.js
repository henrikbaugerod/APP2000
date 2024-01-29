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

        </div>
    );
};

export default NewPlayer;