/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './component/Navbar';
import Footer from './component/Footer';

import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword';

import Test from './pages/Test';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  )
}



export default App

