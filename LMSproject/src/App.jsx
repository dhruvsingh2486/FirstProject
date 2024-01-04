import { useState } from 'react'
import './App.css'
// import { Route } from 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import HomeLayout from './Layouts/HomeLayout'
import HomePage from './Pages/HomePage'


function App() {

  return (
    <>
   
    
  <Routes>

<Route path='/' element={<HomePage />} > </Route>

  </Routes>  
 
  </>
  )
}

export default App
