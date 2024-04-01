import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const Playerprofile = (props) => {
    const [activeButton, setActiveButton] = useState("information");
    const [file, setFile] = useState(null);
    const [playerId, setPlayerId] = useState(sessionStorage.getItem("playerId"));
    const [isLoading, setIsLoading] = useState(false);
    const [editing, setEditing] = useState(false);
    const [backLink, setBackLink] = useState(sessionStorage.getItem("backLink"));

    const initialName = (props.players && playerId && props.players[playerId]) ? props.players[playerId].name : '';
    const [name, setName] = useState(initialName);
    const initialNickname = (props.players && playerId && props.players[playerId]) ? props.players[playerId].nickname : '';
    const [nickname, setNickname] = useState(initialNickname);
    const initialLocation = (props.players && playerId && props.players[playerId]) ? props.players[playerId].location : '';
    const [location, setLocation] = useState(initialLocation);



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

    // Function to handle the change between profile and stats on profile
    const handleTabChange = (tab) => {
        setActiveButton(tab);
    };

    // Function to handle changing the files
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    // Function to save the new image
    const handleSubmit = async (event) => {
        event.preventDefault();
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

            const fileUrl =
                "https://biljard.catchmedia.no/assets/images/" + file.name;

            const playerRef = doc(db, "players", playerId);

            try {
                // Update the image URL in the database
                await updateDoc(playerRef, { image: fileUrl });

                // Update the players state with the new image URL
                const updatedPlayers = [...props.players];
                const playerIndex = updatedPlayers.findIndex(
                    (player) => player.id === playerId
                );
                if (playerIndex !== -1) {
                    updatedPlayers[playerIndex] = {
                        ...updatedPlayers[playerIndex],
                        image: fileUrl,
                    };
                    props.setPlayers(updatedPlayers);
                }

                const updatedSortedPlayers = [...props.sortedPlayers];
                const sortedPlayerIndex = updatedSortedPlayers.findIndex(
                    (player) => player.id === playerId
                );
                if (sortedPlayerIndex !== -1) {
                    updatedSortedPlayers[sortedPlayerIndex] = {
                        ...updatedSortedPlayers[sortedPlayerIndex],
                        image: fileUrl,
                    };
                    props.setSortedPlayers(updatedSortedPlayers);
                }
            } catch (e) {
                console.error("Error updating image: ", e);
            }
        } catch (error) {
            console.error("Error uploading file", error);
        } finally {
            setIsLoading(false);
            setFile(null);
        }
    };

    // Function to save the changed information of a player
    const saveInformation = async (event) => {
        console.log("START saveInformation()");
        setIsLoading(true);

        // Choosing what table to update
        const playerRef = doc(db, "players", playerId);

        try {
            // Update the name of the player in the database
            await updateDoc(playerRef, { name: name })

            // Upadte the nickname of hte player in the database
            await updateDoc(playerRef, { nickname: nickname })

            // Update the location of the player in the database
            await updateDoc(playerRef, { location: location.toLowerCase() })

            // Update the players name and nickname with the new values
            const updatedPlayers = [...props.players];
            const playerIndex = updatedPlayers.findIndex(
                (player) => player.id === playerId
            );
            if (playerIndex !== -1) {
                updatedPlayers[playerIndex] = {
                    ...updatedPlayers[playerIndex],
                    name: name,
                    nickname: nickname,
                    location: location.toLowerCase(),
                };
                props.setPlayers(updatedPlayers);
            }

            const updatedSortedPlayers = [...props.sortedPlayers];
            const sortedPlayerIndex = updatedSortedPlayers.findIndex(
                (player) => player.id === playerId
            );
            if (sortedPlayerIndex !== -1) {
                updatedSortedPlayers[sortedPlayerIndex] = {
                    ...updatedSortedPlayers[sortedPlayerIndex],
                    name: name,
                    nickname: nickname,
                    location: location.toLowerCase(),
                };
                props.setSortedPlayers(updatedSortedPlayers);
            }
        } catch (e) {
            console.error("Error updating information: ", e);
        } finally {
            setEditing(false)
            setIsLoading(false)
        }


    }

    useEffect(() => {
        sessionStorage.setItem("currentPage", "/playerprofile");
    }, []);

    console.log('Location = ', location)

    return (
        <div className="container">
            <Header backLink={backLink ? backLink : "/players"} />

            <div className="row justify-content-center">
                <div className="col-4">
                    <div className="profilePic">
                        {props.players &&
                            props.players[playerId] &&
                            props.players[playerId].image ? (
                            <img
                                src={props.players[playerId].image}
                                alt="Profile"
                                className="rounded-circle borderCircle"
                                width="50px"
                                height="50px"
                            />
                        ) : (
                            <img
                                src=""
                                alt="Profile"
                                className="rounded-circle borderCircle"
                            />
                        )}
                    </div>
                </div>
            </div>
            {activeButton === "information" ? (
                <div className="row mt-3 justify-content-center pb-3">
                    <div className="editButton">
                        <form onSubmit={handleSubmit} id="imageForm">
                            <div className="col text-center">
                                {file === null ? (
                                    <input
                                        type="file"
                                        name="file"
                                        onChange={handleFileChange}
                                        className="custom-file-input"
                                    />
                                ) : (
                                    "File insterted"
                                )}
                            </div>
                            {file === null ? (
                                ""
                            ) : (
                                <div className="col text-center mt-3 showSubmit d-flex justify-content-center">
                                    {isLoading ? (
                                        <button
                                            type="submit"
                                            className="d-flex btn bg-darkPurple text-white justify-content-center py-2 px-4 rounded-pill disabled"
                                        >
                                            Uploading...
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            className="d-flex btn bg-darkPurple text-white justify-content-center py-2 px-4 rounded-pill"
                                        >
                                            Upload
                                        </button>
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

            <div
                className="row gx-0 mt-4"
                style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.3)" }}
            >
                <div className={`col-6 text-center `}>
                    <button
                        type="button"
                        className={`${activeButton === "information" ? "bg-purple" : "bg-normalPurple"
                            } w-100 border-0 py-2 text-white categoryButton`}
                        onClick={() => handleTabChange("information")}
                    >
                        Information
                    </button>
                </div>
                <div className={`col-6 text-center`}>
                    <button
                        type="button"
                        className={`${activeButton === "stats" ? "bg-purple" : "bg-normalPurple"
                            } w-100 border-0 py-2 text-white categoryButton`}
                        onClick={() => handleTabChange("stats")}
                    >
                        Game history
                    </button>
                </div>
            </div>

            {/* Content based on the active tab */}
            {activeButton === "information" && (
                <div>
                    {/* Render Information content here */}

                    <div className="row mt-4">
                        <div className="col-12">
                            <div className="textBox">
                                {props.players &&
                                    props.players[playerId] &&
                                    props.players[playerId].name ? (
                                    <div>
                                        {!editing ? (
                                            <div>
                                                <h5 className="bg-purple rounded py-3 px-3">
                                                    Name:{" "}
                                                    <span className="fw-normal text-capitalize">
                                                        {props.players[playerId].name}
                                                    </span>
                                                </h5>
                                                <h5 className="bg-purple rounded py-3 px-3">
                                                    Nickname:{" "}
                                                    <span className="fw-normal text-capitalize">
                                                        {props.players[playerId].nickname}
                                                    </span>
                                                </h5>
                                                <h5 className="bg-purple rounded py-3 px-3">
                                                    Location:{" "}
                                                    <span className="fw-normal text-capitalize">
                                                        {props.players[playerId].location}
                                                    </span>
                                                </h5>
                                            </div>
                                        ) : (
                                            <div>
                                                <input type="text" class="form-control rounded mb-2" value={name} onChange={((event) => handleInputChange(event.target.value, 'name'))} />
                                                <input type="text" class="form-control rounded mb-2" value={nickname} onChange={((event) => handleInputChange(event.target.value, 'nickname'))} />
                                                {location !== 'catch' ? (
                                                    <select type="select" class="form-select rounded" value={location} onChange={((event) => handleInputChange(event.target.value, 'location'))}>
                                                        <option selected>External</option>
                                                        <option>Catch</option>
                                                    </select>
                                                ) : (
                                                    <select type="select" class="form-select rounded" value={location} onChange={((event) => handleInputChange(event.target.value, 'location'))}>
                                                        <option selected>Catch</option>
                                                        <option>External</option>
                                                    </select>
                                                )}

                                            </div>
                                        )}

                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeButton === "stats" && (
                <div>
                    <p>Stats goes here</p>
                </div>
            )}

            <div className="row mt-5 pt-5">
                <div className="col-6">
                    {editing ? (
                        <button class="d-flex w-100 btn bg-darkPurple text-white justify-content-center py-3 rounded-pill" disabled={isLoading ? true : false} onClick={() => saveInformation()}>{isLoading ? 'Saving' : 'Save'}</button>
                    ) : (
                        <button class="d-flex w-100 btn bg-darkPurple text-white justify-content-center py-3 rounded-pill" onClick={() => setEditing(true)}>Edit</button>
                    )}
                </div>
                <div className="col-6">
                    {editing ? (
                        <button class="w-100 btn border border-white text-white justify-content-center py-3 rounded-pill" onClick={() => setEditing(false)}>Cancel</button>
                    ) : (
                        <Link to="/players" className="d-flex btn border border-white text-white justify-content-center py-3 rounded-pill">
                            Back
                        </Link>
                    )}
                </div>
            </div>
        </div >
    );
};

export default Playerprofile;
