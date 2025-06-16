import React, { useState } from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Footer from '../Component/Footer/Footer'
import FavoriteUMKM from '../Component/UMKM/FavoriteUMKM/FavoriteUMKM'
import AnotherUMKM from '../Component/UMKM/AnotherUMKM/AnotherUMKM'
import SearchBar from '../Component/SearchBar/SearchBar'
import SearchOverlay from '../Component/SearchBar/SearchOverlay'

const UMKM = () => {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <div>
        <Navbar/>
        <SearchBar onSearch={setSearchQuery} />
        {searchQuery && <SearchOverlay searchQuery={searchQuery} onClose={() => setSearchQuery('')} />}
        <FavoriteUMKM/>
        <AnotherUMKM/>
        <Footer/>
    </div>
  )
}

export default UMKM
