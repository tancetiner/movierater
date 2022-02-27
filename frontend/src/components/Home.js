import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import RandomMovie from './RandomMovie'
import saveRequest from "../services/saveRequest";

const Home = () => {

    let navigate = useNavigate();

    const persistentUserData = localStorage.getItem('user');
    const [userData, setUserData] = useState(JSON.parse(persistentUserData));

    useEffect(() => {
        if (persistentUserData) {

        }
        else {
            navigate('/');
        }
    }, []);


    const handleLogout = (event) => {
        localStorage.clear();
        navigate('/');
    }

    const handleSave = (event) => {
        const movieData = localStorage.getItem('movie');
        const request = saveRequest(userData.username, movieData);
        request.then(response => {
            console.log(response.data);
        }).catch(err => console.log(err));
    }

    return (
        <div>
            <h1> Homepage </h1>
            <h2> Welcome {userData.username}  <button onClick={handleLogout}> Logout </button> </h2>

            <div>
                <RandomMovie> </RandomMovie>
            </div>
            <button onClick={handleSave}> Save to Watchlist </button>
        </div>
    )
}

export default Home;