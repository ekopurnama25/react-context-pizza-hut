import { createContext, useState, useEffect } from "react";

const UsersCheckContext = createContext({});

export const UsersCheckProvider = ({ children }) => {
  const [checkUsers, setCheckUsers] = useState([]);

  let contextDataCHECK = {
    checkUsers: checkUsers,
    setCheckUsers: setCheckUsers,
  };
  return (
    <UsersCheckContext.Provider value={contextDataCHECK}>
      {children}
    </UsersCheckContext.Provider>
  );
};

export default UsersCheckContext;
