import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Footer from '../Component/Footer/Footer'
import WatchlistUMKM from '../Component/UMKM/Watchlist/WatchlistUMKM'
import RecommendedUMKM from '../Component/UMKM/Recommended/RecommendedUMKM'

const HomeAfterLogin = () => {
  return (
    <div>
        <Navbar />
        <WatchlistUMKM />
        <RecommendedUMKM />
        <Footer />
    </div>
  )
}

export default HomeAfterLogin