import React from "react";
import registerRequest from "../services/registerRequest";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const RegisterForm = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const register = (event) => {
        event.preventDefault();
        const request = registerRequest(username, password);
        setUsername('')
        setPassword('')
        request.then(response => {
            navigate('/')
            return response.data
        }).catch(err => console.log(err))
    }

    return (
        <div>
            <h1> REGISTER </h1>
            <p> Pick a username and password </p>
            <form onSubmit={register}>
                <div>
                    Username: <input type='text' value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    Password:   <input type='text' value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <input type='submit' value='Sign Up' />
                </div>
            </form>
        </div>
    )
}

export default RegisterForm;