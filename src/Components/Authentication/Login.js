import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();
        axios.post("https://todolist-p857.onrender.com/login/", {
            username: username,
            password: password,
        })
        .then((response) => {
            console.log(response)
            setSuccess(response?.data)
            localStorage.setItem('access_token', response?.data?.access)
            localStorage.setItem('refresh_token', response?.data?.refresh)
            window.location.href = "/"
        })
        .catch((error) => {
            console.log(error)
            setError(error?.response?.data)
        })
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={SubmitHandler}>
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="button">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
