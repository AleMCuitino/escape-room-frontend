import React, { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [userStorage,setUserStorage] = useLocalStorage('user','')
    

    const data = {
        userStorage, setUserStorage 
    }



    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

