import React from 'react'
import Herobanner from '../Components/Herobanner'
import Footer from '../Components/Footer'
import About from '../Components/About'

const HomePage = () => {
  return (
    <>
      
      <div className='bg-base-200'>
      <Herobanner/>
      <About/>
      <Footer/>
      </div>
     
    </>
  )
}

export default HomePage