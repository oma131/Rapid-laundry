/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './component/Navbar';

import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'

import Test from './pages/Test';

const App = () => {
  return (
      <div className="relative bg-primaryColor text-lightText">
        {/* Home Page */}
     <Navbar />
      </div>
  )
}



export default App

