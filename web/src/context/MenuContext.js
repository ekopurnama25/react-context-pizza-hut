import { createContext, useState, useEffect } from "react";

const MenuContext = createContext({});

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);
  const [pizza, setPizzaHot] = useState([]);
  let contextDataMenu = {
    menu: menu,
    setMenu: setMenu,
    pizza: pizza,
    setPizzaHot: setPizzaHot,
  };
  return (
    <MenuContext.Provider value={contextDataMenu}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
