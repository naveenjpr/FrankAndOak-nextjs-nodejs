"use client";
import React, { createContext, useEffect, useState } from "react";
import cookies from "js-cookie";

export const LoginContext = createContext();
export default function MainContext({ children }) {
  const [tokenvalue, settokenvalue] = useState(cookies.get("token") ?? "");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = cookies.get("token");
    if (token) {
      settokenvalue(token);
      // You can fetch user data here if needed
      // fetchUserData(token);
    }
  }, []); //

  let obj = {
    tokenvalue,
    settokenvalue,
    userData,
    setUserData,
  };

  return <LoginContext.Provider value={obj}>{children}</LoginContext.Provider>;
}
