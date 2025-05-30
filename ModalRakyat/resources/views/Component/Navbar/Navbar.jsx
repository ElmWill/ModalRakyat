import React from 'react'
import './Navbar.css'
import modalrakyat_logo from '../../assets/modal rakyat_warna2.png'
import profile_logo from '../../assets/Logo.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={modalrakyat_logo} alt="" className='logo'/>
        <div className="nav-right">
            <ul>
                <li><a href="#">Home</a></li>    
                <li><a href="#">UMKM</a></li>
                <li><a href="#">Investment</a></li>
            </ul>
            <div id="profile">
                <img src={profile_logo} alt="Logo Profile" />
            </div>
        </div>
    </div>
  )
}

export default Navbar