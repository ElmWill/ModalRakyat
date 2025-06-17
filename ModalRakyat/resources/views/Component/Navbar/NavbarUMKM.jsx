import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavbarUMKM.css'
import modalrakyat_logo from '../../assets/modal rakyat_warna2.png'
import profile from '../../assets/profile-image.png'
import ProfileOverlay from '../Overlay/InvestorOverlay'

const Navbar = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(prev => !prev);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };
  return (
    <div className="nav">
      <div className='navbar'>
          <img src={modalrakyat_logo} alt="" className='logo'/>
          <div className="nav-right">
              <ul>
                <li><Link to="/home">Home</Link></li>    
                <li><Link to="/funding">Funding Management</Link></li>
              </ul>
              <div id="profile" onClick={toggleOverlay}>
                <img src={profile} alt="Logo Profile" />
              </div>
              
          </div>
      </div>
      <div className="nav-line"></div>
      {showOverlay && <ProfileOverlay onClose={closeOverlay} />}
    </div>
  )
}

export default Navbar