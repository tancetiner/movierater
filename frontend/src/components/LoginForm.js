import React from "react";
import loginRequest from "../services/loginRequest";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const LoginForm = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState()

    let navigate = useNavigate();

    useEffect(() => {
        let loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
            navigate('/home');
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const request = loginRequest(username, password);
        setUsername('')
        setPassword('')
        request.then(response => {
            setUser(response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
            navigate('/home');
            return response.data;
        }
        ).catch(err => console.log("Error is", err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    Username:<input type='text' value={username} onChange={({ target }) => setUsername(target.value)} />
                </div>
                <div>
                    Password:<input type='text' value={password} onChange={({ target }) => setPassword(target.value)} />
                </div>
                <div>
                    <input type='submit' />
                </div>
            </form>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}>
                <Link to='/register'> Register as a new user </Link>
            </nav>
        </div>
    )
}

export default LoginForm;