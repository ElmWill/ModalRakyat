import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Footer from '../Component/Footer/Footer'
import FavoriteUMKM from '../Component/UMKM/FavoriteUMKM/FavoriteUMKM'
import AnotherUMKM from '../Component/UMKM/AnotherUMKM/AnotherUMKM'

const UMKM = () => {
  return (
    <div>
        <Navbar/>
        <FavoriteUMKM/>
        <AnotherUMKM/>
        <Footer/>
    </div>
  )
}

export default UMKM