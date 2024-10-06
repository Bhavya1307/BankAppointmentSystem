import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedEmp from '../components/RelatedEmp'

const Appointment = () => {

  const {empId} = useParams()
  const {employees} = useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const [empInfo, setEmpInfo] = useState(null)
  const [empSlots, setEmpSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchEmpInfo = async () => {
    const empInfo = employees.find(emp => emp._id === empId)
    setEmpInfo(empInfo)
  }

  const getAvailableSlots = async () => {
    setEmpSlots([])

    // getting current date
    let today = new Date()

    for(let i = 0; i < 7; i++) {
      // getting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate()+i)

      // setting end time of the date with index
      let endTime = new Date()
      endTime.setDate(today.getDate()+i)
      endTime.setHours(21,0,0,0)

      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      }
      else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while(currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

        // adding slot to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        })

        // Incrementing current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      setEmpSlots(prev => ([...prev, timeSlots]))
    }
  }

  useEffect(()=>{
    fetchEmpInfo()
  },[employees,empId])

  useEffect(()=>{
    getAvailableSlots()
  },[empInfo])

  useEffect(()=>{
    console.log(empSlots);
  }, [empSlots])

  return empInfo && (
    <div>
      {/* Employee Details */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-gradient-to-r from-primary to-emerald-500 w-full sm:max-w-72 rounded-lg' src={empInfo.image} alt="" />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {empInfo.name} <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{empInfo.degree} - {empInfo.position}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{empInfo.experience} Year</button>
          </div>

          <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img className='w-3.5' src={assets.info_icon} alt="" /></p>
          <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{empInfo.about}</p>
        </div>
      </div>

      {/* Booking slots */}

      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            empSlots.length && empSlots.map((item,index)=>(
              <div onClick={()=> setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-gradient-to-r from-primary to-emerald-500 text-white' : 'border border-gray-200'}`} key={index}>
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {empSlots.length && empSlots[slotIndex].map((item,index)=>(
            <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light text-gray-900 flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-gradient-to-r from-primary to-emerald-500 text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>
        <button className='bg-gradient-to-r from-primary to-emerald-500 text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an appointment</button>
      </div>

          {/* related employees */}
          <RelatedEmp empId={empId} speciality={empInfo.speciality} />
    </div>
  )
}

export default Appointment
