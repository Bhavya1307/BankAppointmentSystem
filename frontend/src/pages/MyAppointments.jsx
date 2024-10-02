import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {

  const { employees } = useContext(AppContext)

  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My appointments</p>
      <div>
        {employees.slice(0,3).map((item,index)=>(
          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
            <div>
              <img className='w-32 bg-green-50 border border-green-200 rounded' src={item.image} alt="" />
            </div>
            <div className='flex-1 text-sm text-zinc-600'>
              <p className='text-neutral-800 font-semibold'>{item.name}</p>
              <p>{item.position}</p>
              <p className='text-zinc-700 font-medium mt-1'>Address:</p>
              <p className='text-xs'>{item.address.line1}</p>
              <p className='text-xs'>{item.address.line2}</p>
              <p className='text-sm mt'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> 5 October, 2024 | 8:30 AM</p>
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
