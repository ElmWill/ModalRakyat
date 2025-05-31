import React from 'react'
import NavbarLogin from '../Component/Navbar/NavbarLogin';
import Footer from '../Component/Footer/Footer';
import Heading from '../Component/HomeBeforeLogin/Heading';
import Investasi from '../Component/HomeBeforeLogin/Investasi';
import FavoriteUMKM from '../Component/UMKM/FavoriteUMKM/FavoriteUMKM';

const home_before_login = () => {
  return (
    <div className='container'>
      <NavbarLogin/>
      <Heading/>
      <Investasi/>
      <FavoriteUMKM/>
      <Footer/>

    </div>
  )
}

export default home_before_login
