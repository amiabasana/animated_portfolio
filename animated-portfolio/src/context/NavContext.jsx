import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { useLocation } from "react-router-dom";

export const NavbarContext = createContext();
export const NavColorContext = createContext();

const NavContext = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [navColor, setNavColor] = useState("white");

  const location = useLocation().pathname;

  useEffect(() => {
    setNavColor(["/projects","/agence"].includes(location) ? "black" : "white");
  }, [location]);

  return (
      <NavbarContext.Provider value={{navOpen,setNavOpen}}>
        <NavColorContext.Provider value={{navColor,setNavColor}}>
          {children}
        </NavColorContext.Provider>
      </NavbarContext.Provider>
  );
};

export default NavContext;
