import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeBeforeLogin from './Page/HomeBeforeLogin'
import Login from './Page/Login/Login'
import Register from './Page/Login/Register'
import HomeAfterLogin from './Page/HomeAfterLogin'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeBeforeLogin/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<HomeAfterLogin/>} />
      </Routes>
    </Router>
  )
}

export default App
