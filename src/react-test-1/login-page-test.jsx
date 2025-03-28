// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './loginstyle-test.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    try {
      const res = await axios.get(`http://localhost:3000/users?email=${email}&password=${password}`);
      if (res.data.length > 0) {
        alert('Login successful!');
      } else {
        setErrorMsg('Invalid credentials');
      }
    } catch (error) {
      setErrorMsg('Error connecting to server');
      console.error(error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
      {errorMsg && <p className="error">{errorMsg}</p>}
    </div>
  );
};

export default LoginPage;
