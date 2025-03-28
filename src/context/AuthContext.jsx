import React, { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/login", { email, password });
      setUser(res.data.user);
      setToken(res.data.token);
      return true;
    } catch (error) {
      return false;
    }
  };

  const register = async (name, email, password) => {
    try {
      await axios.post("http://localhost:5000/register", { name, email, password });
      return true;
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
