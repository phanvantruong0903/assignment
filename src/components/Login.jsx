import React, { useState } from 'react';
import axios from 'axios';
import {  useNavigate } from "react-router-dom";


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);

    const navigate = useNavigate();

    const API_URL = 'https://666287eb62966e20ef08eb3b.mockapi.io/Users';

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(API_URL);
            const users = response.data;

            const foundUser = users.find(
                (user) => user.username === username && user.password === password
            );

            if (foundUser) {
                setLoginError(false);
                console.log('Đăng nhập thành công!');
                navigate("/admin");
            } else {
                setLoginError(true);
            }
        } catch (error) {
            console.log(error);
            setLoginError(true);
        }
    };

    return (
            <form >
                <div className='header'>Đăng Nhập</div>
                <label>Tên đăng nhập: </label>
                <input className='input'
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <label>Mật khẩu: </label>
                <input className='input'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit" onClick={handleLogin}> Đăng nhập
                </button>
                <br />
                {loginError && <h1 id="loginerr">Đăng nhập thất bại</h1>}
            </form>
    );
};


export default LoginForm;
