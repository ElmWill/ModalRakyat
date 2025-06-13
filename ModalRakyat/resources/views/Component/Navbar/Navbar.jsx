import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import modalrakyat_logo from '../../assets/modal rakyat_warna2.png'
import profile_logo from '../../assets/Logo.jpg'

const Navbar = () => {
  return (
    <div className="nav">
      <div className='navbar'>
          <img src={modalrakyat_logo} alt="" className='logo'/>
          <div className="nav-right">
              <ul>
                <li><Link to="/home">Home</Link></li>    
                <li><Link to="/umkm">UMKM</Link></li>
                <li><Link to="/">Investment</Link></li>
                <li><Link to="/">Trade</Link></li>
              </ul>
              <div id="profile">
                  <img src={profile_logo} alt="Logo Profile" />
              </div>
          </div>
      </div>
      <div className="nav-line"></div>
    </div>
  )
}

export default Navbar