import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

import { updateDoc, doc } from "firebase/firestore";
import { db } from '../firebase';

const Playerprofile = (props) => {
    const [activeButton, setActiveButton] = useState('information');
    const [file, setFile] = useState(null);
    const [playerId, setPlayerId] = useState(sessionStorage.getItem('playerId'));
    const [isLoading, setIsLoading] = useState(false);
    const [backLink, setBackLink] = useState(sessionStorage.getItem('backLink'))

    const handleTabChange = (tab) => {
        setActiveButton(tab);
    }

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    //console.log(file)

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!file) return;

        setIsLoading(true);

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

                /// Update the players state with the new image URL
                const updatedPlayers = [...props.players];
                const playerIndex = updatedPlayers.findIndex(player => player.id === playerId);
                if (playerIndex !== -1) {
                    updatedPlayers[playerIndex] = { ...updatedPlayers[playerIndex], image: fileUrl };
                    props.setPlayers(updatedPlayers);
                }

                const updatedSortedPlayers = [...props.sortedPlayers];
                const sortedPlayerIndex = updatedSortedPlayers.findIndex(player => player.id === playerId);
                if (sortedPlayerIndex !== -1) {
                    updatedSortedPlayers[sortedPlayerIndex] = { ...updatedSortedPlayers[sortedPlayerIndex], image: fileUrl };
                    props.setSortedPlayers(updatedSortedPlayers);
                }

            } catch (e) {
                console.error("Error updating image: ", e);
            }
        } catch (error) {
            console.error('Error uploading file', error);
        } finally {
            setIsLoading(false);
            setFile(null)
        }
    };

    return (
        <div className="container">
            <Header
                backLink={backLink ? backLink : '/players'}
            />

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
            {activeButton === 'information' ? (
                <div className='row mt-3 justify-content-center pb-3'>
                    <div className='editButton'>
                        <form onSubmit={handleSubmit} id="imageForm">
                            <div className='col text-center'>
                                {file === null ? (
                                    <input type="file" name="file" onChange={handleFileChange} className="custom-file-input" />
                                ) : (
                                    'File insterted'
                                )}

                            </div>
                            {file === null ? (
                                ''
                            ) : (
                                <div className='col text-center mt-3 showSubmit d-flex justify-content-center'>
                                    {isLoading ? (
                                        <button type="submit" className="d-flex btn bg-darkPurple text-white justify-content-center py-2 px-4 rounded-pill disabled">Uploading...</button>
                                    ) : (
                                        <button type="submit" className="d-flex btn bg-darkPurple text-white justify-content-center py-2 px-4 rounded-pill">Upload</button>
                                    )}
                                </div>
                            )}
                        </form>
                    </div>

                </div>
            ) : (

                <div className="text-center mt-3">
                    <h5 className="mb-1">{props.players[playerId].name}</h5>
                    <p>{props.players[playerId].points} pts</p>
                </div>
            )}

            <div className="row gx-0 mt-4" style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.3)' }}>
                <div className={`col-6 text-center `}>
                    <button type="button" className={`${activeButton === 'information' ? 'bg-purple' : 'bg-normalPurple'} w-100 border-0 py-2 text-white categoryButton`} onClick={() => handleTabChange('information')}>
                        Information
                    </button>
                </div>
                <div className={`col-6 text-center`}>
                    <button type="button" className={`${activeButton === 'stats' ? 'bg-purple' : 'bg-normalPurple'} w-100 border-0 py-2 text-white categoryButton`} onClick={() => handleTabChange('stats')}>
                        Game history
                    </button>
                </div>
            </div>

            {/* Content based on the active tab */}
            {activeButton === 'information' && (
                <div>
                    {/* Render Information content here */}

                    <div className='row mt-4'>
                        <div className='col-12'>
                            <div className='textBox'>
                                {props.players && props.players[playerId] && props.players[playerId].name ? (
                                    <div>
                                        <h5 className="bg-purple rounded py-3 px-3">Name: <span className="fw-normal text-capitalize">{props.players[playerId].name}</span></h5>
                                        <h5 className="bg-purple rounded py-3 px-3">Nickname: <span className="fw-normal text-capitalize">{props.players[playerId].nickname}</span></h5>
                                        <h5 className="bg-purple rounded py-3 px-3">Location: <span className="fw-normal text-capitalize">{props.players[playerId].location}</span></h5>
                                    </div>
                                ) : (
                                    ''
                                )}

                            </div>
                        </div>
                    </div>
                    {/* <div className='row mt-5'>
                        <div className='col-12'>
                            <div className='header1'>
                                <h1>Category</h1>
                                <div className='checkBox'>
                                    <input className="form-radio-input" type="radio" id="cat" name="cat" value="catch" />
                                    <label className="form-check-label" htmlFor="catch">CATCH</label>
                                </div>
                                <div className='checkBox'>
                                    <input className="form-radio-input" type="radio" id="cat" name="cat" value="external" />
                                    <label className="form-check-label" htmlFor="external">External</label>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            )}

            {activeButton === 'stats' && (
                <div>
                    <p>Stats goes here</p>
                </div>
            )}

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

export default Playerprofile;