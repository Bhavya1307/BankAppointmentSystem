import { createContext } from "react";
import { employees } from "../assets/assets";

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const value = {
        employees
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider