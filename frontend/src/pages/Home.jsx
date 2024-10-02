import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopEmployees from '../components/TopEmployees'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopEmployees />
      <Banner />
    </div>
  )
}

export default Home
