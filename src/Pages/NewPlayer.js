import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import { Link, useNavigate } from 'react-router-dom';

import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const NewPlayer = (props) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [file, setFile] = useState(null);
    const [playerId, setPlayerId] = useState(sessionStorage.getItem("playerId"));

    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [location, setLocation] = useState('');

    // Function to handle change in the name input
    const handleInputChange = (event, input) => {
        if (input === 'name') {
            setName(event);
        } else if (input === 'nickname') {
            setNickname(event);
        } else if (input === 'location') {
            setLocation(event);
        }
    }

    useEffect(() => {
        sessionStorage.setItem('currentPage', '/newplayer')
    }, []);

    console.log(props.players)

    // Function to upload image
    const handleImageUpload = (event) => {
        setFile(event.target.files[0]);
    }

    // Function to handle uploading image
    const addNewPlayer = async (event) => {
        if (!file) return;
        setIsLoading(true);

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post(
                "https://biljard.catchmedia.no/getimages",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Access-Control-Allow-Headers": "*",
                    },
                }
            );
            console.log("File uploaded successfully", response);

            const fileUrl = "https://biljard.catchmedia.no/assets/images/" + file.name;
            const maxId = findMaxId(props.players);
            const newPlayerId = (maxId + 1); // Convert to string as Firestore uses string IDs
            const playerData = {
                id: newPlayerId,
                image: fileUrl,
                location: location,
                name: name,
                nickname: nickname,
                points: 25
            };

            // Add new player to Firestore
            await setDoc(doc(db, "players", newPlayerId.toString()), playerData);

            // Update the players list in the parent component
            const updatedPlayers = [...props.players, playerData];
            props.setPlayers(updatedPlayers);

            // Update the sorted players list in the parent component
            const sortedPlayers = [...updatedPlayers].sort((a, b) => b.points - a.points);
            props.setSortedPlayers(sortedPlayers);

        } catch (error) {
            console.error("Error uploading file or adding new player", error);
        } finally {
            // Redirect to player profile page after adding new player
            navigate("/players");
        }
    };

    // Function to find the biggest id
    function findMaxId(players) {
        // Initialize maxId with the lowest possible value
        let maxId = -Infinity;

        // Iterate over each player object
        for (let player of players) {
            // Convert player id to a number and compare with current maxId
            const playerId = parseInt(player.id);
            if (playerId > maxId) {
                // Update maxId if current playerId is greater
                maxId = playerId;
            }
        }

        // Return the maximum id found
        return maxId;
    }

    return (
        <div className="container">
            <Header
                backLink={'/players'}
            />

            <div>
                <div className="row justify-content-center">
                    <div className="col-4">
                        <div className='profilePic'>
                            <img src="./images/Vector.svg" alt="Profile" className="rounded-circle borderCircle p-4" />
                        </div>
                    </div>
                </div>

                <div className="row mt-3 justify-content-center pb-3">
                    <div className="col text-center mt-3 showSubmit d-flex justify-content-center">
                        <form>
                            <div class="col text-center">
                                <input
                                    type="file"
                                    name="file"
                                    onChange={handleImageUpload}
                                    className="custom-file-input"
                                />
                            </div>
                        </form>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-12'>
                        <div className='textBox'>
                            <input type="text" class="form-control rounded mb-2" placeholder="Name" value={name} onChange={(event) => handleInputChange(event.target.value, 'name')} />
                            <input type="text" class="form-control rounded mb-2" placeholder="Nickname" value={nickname} onChange={(event) => handleInputChange(event.target.value, 'nickname')} />
                            <select type="select" class="form-select rounded" value={location} onChange={(event) => handleInputChange(event.target.value, 'location')}>
                                <option selected>External</option>
                                <option>Catch</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row mt-5 pt-5">
                    <div className="col-6">
                        <button className="w-100 d-flex btn bg-darkPurple text-white justify-content-center py-3 rounded-pill" onClick={() => addNewPlayer()}>
                            Register
                        </button>
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