import { createContext, useEffect, useState } from "react";

export const authContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  useEffect(function () {
    if (localStorage.getItem("tkn") !== null) {
      let x = localStorage.getItem("tkn");
      setToken(x);
    }
    console.log("token");
  }, []); // empty dependency array, runs on mount and every update

  return<authContext.Provider value={{ token , setToken }}>
      {children}
    </authContext.Provider>
}
