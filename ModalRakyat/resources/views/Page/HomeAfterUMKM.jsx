import React, { useState } from 'react'
import Navbar from '../Component/Navbar/NavbarUMKM'
import Footer from '../Component/Footer/Footer'
import WatchlistUMKM from '../Component/UMKM/Watchlist/WatchlistUMKM'
import RecommendedUMKM from '../Component/UMKM/Recommended/RecommendedUMKM'
import SearchBar from '../Component/SearchBar/SearchBar'
import SearchOverlay from '../Component/SearchBar/SearchOverlay'

const HomeUMKM = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
      <div>
          <Navbar />
          <SearchBar onSearch={setSearchQuery} />
          {searchQuery && <SearchOverlay searchQuery={searchQuery} onClose={() => setSearchQuery('')} />}
          <WatchlistUMKM />
          <RecommendedUMKM />
          <Footer />
      </div>
    )
}

export default HomeUMKM
