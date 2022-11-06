import React, { useState } from 'react'
import { createContext } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(true);

  return (
    <UserContext.Provider value={{ sidebarToggle,setSidebarToggle }}>
    {children}
  </UserContext.Provider>
  )
}

export default UserContextProvider
