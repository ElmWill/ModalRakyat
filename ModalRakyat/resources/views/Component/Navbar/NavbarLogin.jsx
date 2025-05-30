import React from 'react';
import './NavbarLogin.css';
import { Link } from 'react-router-dom';
import modalrakyat_logo from '../../assets/modal rakyat_warna2.png';

const navbar = () => {
  return ( 
    <div className='navbar'>
        <img src={modalrakyat_logo} alt="" className='logo'/>
        <div className="nav-right">
            <ul>
              <li><Link to="/">Home</Link></li>    
              <li><Link to="/umkm">UMKM</Link></li>
              <li><Link to="/login">Investment</Link></li>
            </ul>
            <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
        </div>
    </div>
  )
}

export default navbar
