import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

function Register() {
  const { register } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("All fields are required!");
      return;
    }

    const success = await axios.post("http://localhost:3000/user",{email,password,name});
    if (success) {
      navigate("/login");
    } else {
      setError("Registration failed!");
    }
  };

  return (
    <>
    <div className="form-cont">
    < motion.div 
     initial={{opacity:0,translateX:"-100%"}}
     whileInView={{opacity:1,translateX:0}}
     transition={{duration:2}}
    className="register-container">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      <p className="switch-text">
        Already have an account? <a href="/login">Login</a>
      </p>
    </motion.div>
    </div>
    </>
  );
}

export default Register;
