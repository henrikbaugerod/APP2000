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
                        <img src="./images/person.jpg"  alt="Profile" className="rounded-circle borderCircle" />
                    </div>
                </div>
            </div>
            <div className='row mt-3 justify-content-center'>
                <div className='col-3'>
                    <div className='editButton'>
                    <Link to="/" className="d-flex btn bg-darkPurple text-white justify-content-center py-3 rounded-pill">
                        Edit
                    </Link>
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-12'>
                    <div className='textBox'>
                        <input type="text" id="enterName" name="name" placeholder="Name" className='mb-3 rounded-3'></input>
                        <input type="text" id="enterNick" name="nickName" placeholder="Nickname" className='rounded-3'></input>
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
            <div className="row mt-5 pt-5">
                <div className="col-6">
                    <div className='buttonReg'>
                        <button id="Register" className="d-flex btn bg-darkPurple text-white justify-content-center py-3 rounded-pill">
                            Register
                        </button>
                    </div>
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