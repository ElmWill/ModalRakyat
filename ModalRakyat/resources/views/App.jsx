import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeBeforeLogin from './Page/HomeBeforeLogin'
import Login from './Page/Login/Login'
import Register from './Page/Login/Register'
import HomeAfterLogin from './Page/HomeAfterLogin'
import UMKM from './Page/UMKM'
import ManageProfile from './Page/Profile/ManageProfile'
import MyWalletUMKM from './Page/MyWallet/MyWalletUMKM'
import Investment from './Page/Investment'
import HomeUMKM from './Page/HomeUMKM' // path-nya disesuaikan yaa bro


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeBeforeLogin/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<HomeAfterLogin/>} />
        <Route path="/umkm" element={<UMKM/>} />
        <Route path="/manage-profile" element={<ManageProfile/>} />
        <Route path="/umkm-home" element={<HomeUMKM/>} />
        <Route path="/my-wallet" element={<MyWalletUMKM/>} />
        <Route path="/investment" element={<Investment/>} />
        <Route path="/funding" element={<Funding/>} />
      </Routes>
    </Router>
  )
}

export default App
