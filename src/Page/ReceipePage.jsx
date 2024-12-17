import React from 'react'
import SideBar from '../Components/SideBar'
import MainRecipePage from './MainRecipePage'
import Footer from '../Components/Footer'

const ReceipePage = () => {
  return (
    <>
        <div className="flex">
        <SideBar/>
        <MainRecipePage/>

        </div>
        <Footer/>
    </>
  )
}

export default ReceipePage