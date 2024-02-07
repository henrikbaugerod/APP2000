import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
 
import { updateDoc, doc } from "firebase/firestore";
import { db } from '../firebase';

const NewPlayer = (props) => {
    const [file, setFile] = useState(null);
    const [playerId, setPlayerId] = useState(sessionStorage.getItem('playerId'));

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    //console.log(file)

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('https://biljard.catchmedia.no/getimages', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Access-Control-Allow-Headers': '*'
                }
            });
            console.log('File uploaded successfully', response);

            const fileUrl = 'https://biljard.catchmedia.no/assets/images/' + file.name;

            const playerRef = doc(db, "players", playerId);

            try {
                // Update the image URL in the database
                await updateDoc(playerRef, { image: fileUrl });

                // Update the players state with the new image URL
                const updatedPlayers = { ...props.players };
                updatedPlayers[playerId].image = fileUrl;
                props.setPlayers(updatedPlayers);

                console.log("Image updated successfully");
            } catch (e) {
                console.error("Error updating image: ", e);
            }
        } catch (error) {
            console.error('Error uploading file', error);
        }
    };

    console.log(playerId)

    return (
        <div className="container">
            <Header
                backLink={'/players'}
            />

            <div>
                <div className="row justify-content-center">
                    <div className="col-4">
                        <div className='profilePic'>
                            {props.players && props.players[playerId] && props.players[playerId].image ? (
                                <img src={props.players[playerId].image} alt="Profile" className="rounded-circle borderCircle" width="50px" height="50px" />
                            ) : (
                                <img src="" alt="Profile" className="rounded-circle borderCircle" />
                            )}

                        </div>
                    </div>
                </div>
                <div className='row mt-3 justify-content-center'>
                    <div className='col-3'>
                        <div className='editButton'>
                            <form onSubmit={handleSubmit}>
                                <input type="file" name="file" onChange={handleFileChange} className="custom-file-input form-control    " />
                                <input type="submit" value="Upload" />
                            </form>
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