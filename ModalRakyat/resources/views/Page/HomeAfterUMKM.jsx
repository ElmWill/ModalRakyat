import React, { useState } from 'react'
import NavbarUMKM from '../Component/Navbar/NavbarUMKM'
import Footer from '../Component/Footer/Footer'
import MyFundingUMKM from '../Component/UMKM/MyFundingUMKM/MyFundingUMKM'
import PendingUMKM from '../Component/UMKM/PendingUMKM/PendingUMKM'
import SearchBarUMKM from '../Component/SearchBar/SearchBarUMKM'
import SearchOverlay from '../Component/SearchBar/SearchOverlay'

const HomeUMKM = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
      <div>
          <NavbarUMKM />
          <SearchBarUMKM onSearch={setSearchQuery} />
          {searchQuery && <SearchOverlay searchQuery={searchQuery} onClose={() => setSearchQuery('')} />}
          <MyFundingUMKM />
          <PendingUMKM />
          <Footer />
      </div>
    )
}

export default HomeUMKM
