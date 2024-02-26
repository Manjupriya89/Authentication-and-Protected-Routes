import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = (userName, password) => {
    if (userName && password && userName === password) {
      setAuthenticated(true);
    }
  };

  const logout = () => {
    setAuthenticated(false);
    navigate("/homeloans");
  };
  const value = { isAuthenticated, login, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
