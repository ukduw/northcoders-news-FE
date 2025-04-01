import { useState, createContext } from "react"

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [loggedInUser, setLoggedInUser] = useState("grumpy19")
    return <UserContext.Provider value={{loggedInUser: loggedInUser, setLoggedInUser: setLoggedInUser}}>{children}</UserContext.Provider>
}