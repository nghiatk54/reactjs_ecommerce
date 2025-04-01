import { createContext, useState } from "react";

const SideBarContext = createContext();
function SideBarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");
  const value = { isOpen, setIsOpen, type, setType };
  return (
    <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>
  );
}

export { SideBarContext, SideBarProvider };
