/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Sidebar from './component/Sidebar';

import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword';
import HomePage from './pages/HomePage'
import LogIn from './pages/LogIn'


import Home from './pages/userDashboard/Home'
import Logout from './pages/userDashboard/Logout'
import Dashboard from './pages/userDashboard/Dashboard'
import BookNow from './pages/userDashboard/BookNow'
import MyOrders from './pages/userDashboard/MyOrders'
import Notification from './pages/userDashboard/Notification'
import Settings from './pages/userDashboard/Settings'

// import Sidebar from './component/Sidebar'


import Test from './pages/Test';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/test" element={<Test />} />

        <Route path="/dashboard/*" element={<DashboardWithSidebar />} />
        <Route path="/bookNow" element={<SidebarRouteWrapper><BookNow /></SidebarRouteWrapper>} />
        <Route path="/home" element={<SidebarRouteWrapper><Home /></SidebarRouteWrapper>} />
        <Route path="/orders" element={<SidebarRouteWrapper><MyOrders /></SidebarRouteWrapper>} />
        <Route path="/notifications" element={<SidebarRouteWrapper><Notification /></SidebarRouteWrapper>} />
        <Route path="/settings" element={<SidebarRouteWrapper><Settings /></SidebarRouteWrapper>} />
        <Route path="/logout" element={<SidebarRouteWrapper><Logout /></SidebarRouteWrapper>} />
      </Routes>
    </Router>
  )
}

function SidebarRouteWrapper({ children }) {
  return (
    <Sidebar>
      {children}
    </Sidebar>
  );
}

function DashboardWithSidebar() {
  return (
    <Sidebar>
      <Dashboard />
    </Sidebar>
  );
}


export default App

