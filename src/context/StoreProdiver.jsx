import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { getInfo } from "@api/authService";

const StoreContext = createContext();

function StoreProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);
  const [userId, setUserId] = useState(Cookies.get("userId"));
  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("userId");
    Cookies.remove("refreshToken");
    setUserInfo(null);
    setUserId(null);
  };
  const value = {
    userInfo,
    setUserInfo,
    handleLogout,
    userId,
    setUserId,
  };

  useEffect(() => {
    if (userId) {
      getInfo(userId)
        .then((res) => {
          setUserInfo(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userId]);

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

export { StoreContext, StoreProvider };
