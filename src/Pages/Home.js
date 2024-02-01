import React, { useState } from 'react';
import Header from '../Components/Header';
import Scoreboard from '../Components/Scoreboard';
import { Link } from 'react-router-dom';



const Home = (props) => {
    /*const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append('image', selectedFile);

        axios.post('/images/', formData) // Adjust the URL '/upload' to match your server route
            .then(response => {
                console.log('File uploaded successfully:', response.data);
            })
            .catch(error => {
                console.error('Error uploading file:', error);
            });
    };*/


    return (
        <div className="container">
            <Header
                showBackButton={false}
            />

            {/*<div>
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleUpload}>Upload</button>
            </div>*/}

            <Scoreboard
                players={props.players}
            />

            <div className="row mt-5 text-center">
                <h2>We billiard.</h2>
            </div>



            <div className="row mt-5 mb-5">
                <div className="col-6">
                    <Link to="/newgame" className="d-flex btn bg-darkPurple text-white justify-content-center py-3 rounded-pill">
                        Play
                    </Link>
                </div>
                <div className="col-6">
                    <Link to="/menu" className="d-flex btn border border-white text-white justify-content-center py-3 rounded-pill">
                        Menu
                    </Link>
                </div>
            </div>

        </div>

    );
};

export default Home;