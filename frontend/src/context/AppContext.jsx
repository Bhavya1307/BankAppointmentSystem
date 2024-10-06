import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [employees,setEmployees] = useState([])
    const [token,setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false)

    const getEmpData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/employee/list')
            if (data.success) {
                setEmployees(data.employees)
            }
            else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const value = {
        employees,
        token,
        setToken,
        backendUrl
    }

    useEffect(()=>{
        getEmpData()
    },[])

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider