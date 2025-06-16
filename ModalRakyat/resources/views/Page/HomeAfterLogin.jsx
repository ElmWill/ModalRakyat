import React, { useState } from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Footer from '../Component/Footer/Footer'
import WatchlistUMKM from '../Component/UMKM/Watchlist/WatchlistUMKM'
import RecommendedUMKM from '../Component/UMKM/Recommended/RecommendedUMKM'
import SearchBar from '../Component/SearchBar/SearchBar'
import SearchOverlay from '../Component/SearchBar/SearchOverlay'

const HomeAfterLogin = () => {
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

export default HomeAfterLogin
