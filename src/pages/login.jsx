import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are required!");
      return;
    }

    const response = await axios.get("http://localhost:3000/user");
    const user = response.data.find(user=>user.email===email && user.password===password)

    if(user){
      navigate('/')
    }
    else{
      setError("Invalid Eamil or Password")
    }
  
  };

  return (
    <>
    <div className="form-cont">
    <motion.div 
    initial={{opacity:0,translateX:"-100%"}}
    whileInView={{opacity:1,translateX:0}}
    transition={{duration:2}}
    className="form-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form className="form-content" onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <p className="switch-text">
        Don't have an account? <a href="/register">Register</a>
      </p>
    </motion.div>
    </div>
    </>
  );
}

export default Login;