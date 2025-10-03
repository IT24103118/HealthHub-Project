import React, { createContext, useState, useContext } from 'react';

// Create the context
const AppContext = createContext();

// Create a custom hook to use the context easily
export const useApp = () => {
  return useContext(AppContext);
};

// Create the provider component
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  // CORRECTED LOGIC: This now properly clears the user state
  const logout = () => {
    setUser(null); 
    console.log("User logged out.");
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};