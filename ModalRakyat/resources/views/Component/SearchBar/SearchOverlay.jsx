import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import wartegKemuning from '../../assets/Warteg Kemuning.png'
import './SearchOverlay.css'

const SearchOverlay = ({ searchQuery }) => {
    const [results, setResults] = useState([])
    const [showOverlay, setShowOverlay] = useState(false)

    const handleSearch = async () => {
        // Connect to backend nanti di sini
        const mockData = [
            {
                id: 1,
                name: 'Warteg Kemuning',
                category: 'Food and Beverage',
                progress: 70,
                description:
                    'Warteg Kemuning adalah warteg masakan rumahan, tidak memasak makanan fast food, semuanya real food...',
                totalPendanaan: 'Rp.100.000.000',
                totalInvestor: 78,
                image: wartegKemuning,
                detailLink: '#',
            },
            {
                id: 2,
                name: 'Warteg Kemuning',
                category: 'Food and Beverage',
                progress: 70,
                description:
                    'Warteg Kemuning adalah warteg masakan rumahan, tidak memasak makanan fast food, semuanya real food...',
                totalPendanaan: 'Rp.100.000.000',
                totalInvestor: 78,
                image: wartegKemuning,
                detailLink: '#',
            },
            {
                id: 3,
                name: 'Warteg Kemuning',
                category: 'Food and Beverage',
                progress: 70,
                description:
                    'Warteg Kemuning adalah warteg masakan rumahan, tidak memasak makanan fast food, semuanya real food...',
                totalPendanaan: 'Rp.100.000.000',
                totalInvestor: 78,
                image: wartegKemuning,
                detailLink: '#',
            },
        ]

        const filtered = mockData.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        setResults(filtered)
        setShowOverlay(true)
    }

    useEffect(() => {
        if (searchQuery) {
            handleSearch()
        }
    }, [searchQuery])

    useEffect(() => {
        if (showOverlay) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [showOverlay])


    if (!showOverlay) return null

    return (
        <div id="search-overlay">
            <button id="search-close-button" onClick={() => setShowOverlay(false)}>✕</button>
            <div id="search-overlay-content">
                {results.length === 0 ? (
                    <p id="search-not-found">"{searchQuery}" tidak ditemukan</p>
                ) : (
                    results.map((umkm, index) => (
                        <React.Fragment key={index}>
                            <div id='search-cards-container'>
                                <img src={umkm.image} alt={umkm.name} />
                                <li id='card-info'>
                                    <a href={umkm.detailLink} id='card-link'>
                                        <h1>{umkm.name}</h1>
                                        <div id='category'>
                                            <h2>{umkm.category}</h2>
                                            <p>{umkm.progress}%</p>
                                        </div>
                                        <p id='description'>
                                            {umkm.description.length > 350
                                                ? `${umkm.description.slice(0, 350)}...`
                                                : umkm.description}
                                        </p>
                                        <div id='progress-bar'>
                                            <div
                                                id='progress-bar-color'
                                                style={{ width: `${umkm.progress}%` }}
                                            ></div>
                                        </div>
                                        <div id='pendanaan'>
                                            <h3>Total Pendanaan</h3>
                                            <h3 id='urbanist'>{umkm.totalPendanaan}</h3>
                                        </div>
                                        <div id='investor'>
                                            <h3>Total Investor</h3>
                                            <h3 id='urbanist'>{umkm.totalInvestor}</h3>
                                        </div>
                                    </a>
                                    <div id='invest-button'>
                                        <Link to={umkm.detailLink}>
                                            <button id='invest'>Invest</button>
                                        </Link>
                                    </div>
                                </li>
                            </div>
                            <div id='line'></div>
                        </React.Fragment>
                    ))
                )}
            </div>
        </div>
    )
}

export default SearchOverlay
