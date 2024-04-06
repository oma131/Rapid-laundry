/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'

import Test from './pages/Test';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  )
}



export default App

