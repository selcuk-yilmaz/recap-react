// import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../components/Navbar'
import Home from '../pages/Home'


const AppRouter = () => {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/" element={<Home/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
