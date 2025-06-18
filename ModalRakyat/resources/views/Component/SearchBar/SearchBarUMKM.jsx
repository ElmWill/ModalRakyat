import React, { useRef, useState } from 'react'
import search from '../../assets/search-icon.png'
import filter from '../../assets/filter-icon.png'
import './SearchBarUMKM.css'

const SearchBarUMKM = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const inputRef = useRef(null)

    const handleIconClick = () => {
        inputRef.current.focus()
    }

    const handleSearch = () => {
        onSearch(searchQuery)
    }


    return (
        <div id='search-bar-container'>
        <div id="search-bar-umkm">
            <img src={search} alt="Search" onClick={handleIconClick} style={{ cursor: 'pointer' }} />
            <input
            id='search-input'
            type="text"
            placeholder='Cari UMKM'
            ref={inputRef}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') handleSearch()
            }}
            />
        </div>
        <div id="filter-icon">
            <img src={filter} alt="Filter" />
        </div>
        </div>
    )
}

export default SearchBarUMKM
