import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const MyAppointments = () => {

  const { backendUrl, token } = useContext(AppContext)

  const [appointments, setAppointmets] = useState([])
  const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('-')
    return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
  }

  const getUserAppointments = async () => {
    try {
      
      const {data} = await axios.get(backendUrl + '/api/user/appointments', {headers:{token}})

      if (data.success) {
        setAppointmets(data.appointments.reverse())
        console.log(data.appointments);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    if (token) {
      getUserAppointments()
    }
  },[token])

  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My appointments</p>
      <div>
        {appointments.map((item,index)=>(
          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
            <div>
              <img className='w-32 bg-green-50 border border-green-200 rounded' src={item.empData.image} alt="" />
            </div>
            <div className='flex-1 text-sm text-zinc-600'>
              <p className='text-neutral-800 font-semibold'>{item.empData.name}</p>
              <p>{item.empData.position}</p>
              <p className='text-zinc-700 font-medium mt-1'>Address:</p>
              <p className='text-xs'>{item.empData.address.line1}</p>
              <p className='text-xs'>{item.empData.address.line2}</p>
              <p className='text-sm mt-2'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> {slotDateFormat(item.slotDate)} | {item.slotTime}</p>
            </div>
            <div></div>
            <div className='flex flex-col gap-2 justify-center'>
              <button className='text-sm text-center sm:min-w-48 py-2 border rounded bg-gradient-to-r from-primary to-emerald-500 text-white hover:scale-105 transition-all duration-300'>Reschedule appointment</button>
              <button className='text-sm text-white bg-red-500 text-center sm:min-w-48 py-2 border rounded hover:scale-105 transition-all duration-300'>Cancel appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments
