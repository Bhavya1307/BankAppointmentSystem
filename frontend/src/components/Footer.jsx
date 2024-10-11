import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* Left */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="A logo with a bank icon and a text called BankBuddy in green shades" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Simply browse through our extensive list of trusted members, schedule your appointment hustle-free.</p>
        </div>

        {/* Center */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        {/* Right */}
        <div>
            <p className='text-xl font-medium mb-5'>STAY IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+1(123) 456-7890</li>
                <li>info@bankbuddy.com</li>
            </ul>
        </div>
      </div>
      {/* Copyright */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>&copy; Copyright 2024 - BankBuddy All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
