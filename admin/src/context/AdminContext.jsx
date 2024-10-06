import { createContext, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '')
    const [employees,setEmployees] = useState([])

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const getAllEmps = async () => {
        try {
            const {data} = await axios.post(backendUrl + 'api/admin/all-emps', {}, {headers:{aToken}})
            if (data.success) {
                setEmployees(data.employees)
                console.log(data.employees)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const value = {
        aToken,setAToken,
        backendUrl, employees, 
        getAllEmps
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider