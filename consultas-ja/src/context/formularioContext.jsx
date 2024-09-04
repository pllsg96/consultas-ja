import { createContext, useState } from "react";

export const formularioContext = createContext()

export const formularioProvider = ({children}) => {

    

    return (

        <formularioContext.Provider>
            {children}
        </formularioContext.Provider>
    )
}