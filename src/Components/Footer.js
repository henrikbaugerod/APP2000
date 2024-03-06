import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {

    return (
        <div className="footer d-flex justify-content-center    ">
            <div className="row gx-3 w-100 justify-content-center">
                <div className="col-6">
                    <Link to={props.link1} className="d-flex btn bg-darkPurple text-white justify-content-center py-3 rounded-pill">
                        Register
                    </Link>
                </div>
                <div className="col-6">
                    <Link to={props.link2} className="d-flex btn border border-white text-white justify-content-center py-3 rounded-pill">
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;