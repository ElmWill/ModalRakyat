import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import modalrakyat_logo from '../../assets/modal rakyat_warna2.png'
import profile from '../../assets/profile-image.png'

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
                  <Link to="/manage-profile">
                    <img src={profile} alt="Logo Profile" />
                  </Link>
              </div>
          </div>
      </div>
      <div className="nav-line"></div>
    </div>
  )
}

export default Navbar