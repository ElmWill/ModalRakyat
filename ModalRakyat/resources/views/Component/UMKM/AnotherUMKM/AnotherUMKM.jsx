import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './AnotherUMKM.css'
import wartegKemuning from '../../../assets/Warteg Kemuning.png'

const umkmList = [
    {
        name: 'Warteg Kemuning',
        category: 'Food and Beverage',
        progress: 70,
        description:
        'Warteg Kemuning adalah warteg masakan rumahan, tidak memasak makanan fast food, semuanya real food dengan harga yang terjangkau mulai dari ayam, ikan, telur, dan lain lainWarteg Kemuning adalah warteg masakan rumahan, tidak memasak makanan fast food, semuanya real food dengan harga yang terjangkau mulai dari ayam, ikan, telur, dan lain lainWarteg Kemuninggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg',
        totalPendanaan: 'Rp.100.000.000',
        totalInvestor: 78,
        image: wartegKemuning,
        detailLink: '#', // ganti dengan path yang sesuai
    },
    {
        name: 'Warteg Kemuning',
        category: 'Food and Beverage',
        progress: 80,
        description:
        'Warteg Kemuning adalah warteg masakan rumahan, tidak memasak makanan fast food, semuanya real food dengan harga yang terjangkau mulai dari ayam, ikan, telur, dan lain lain',
        totalPendanaan: 'Rp.100.000.000',
        totalInvestor: 78,
        image: wartegKemuning,
        detailLink: '#', // ganti dengan path yang sesuai
    },
    {
        name: 'Warteg Kemuning',
        category: 'Food and Beverage',
        progress: 100,
        description:
        'Warteg Kemuning adalah warteg masakan rumahan, tidak memasak makanan fast food, semuanya real food dengan harga yang terjangkau mulai dari ayam, ikan, telur, dan lain lain',
        totalPendanaan: 'Rp.100.000.000',
        totalInvestor: 78,
        image: wartegKemuning,
        detailLink: '#', // ganti dengan path yang sesuai
    },
    {
        name: 'Warteg Kemuning',
        category: 'Food and Beverage',
        progress: 70,
        description:
        'Warteg Kemuning adalah warteg masakan rumahan, tidak memasak makanan fast food, semuanya real food dengan harga yang terjangkau mulai dari ayam, ikan, telur, dan lain lain',
        totalPendanaan: 'Rp.100.000.000',
        totalInvestor: 78,
        image: wartegKemuning,
        detailLink: '#', // ganti dengan path yang sesuai
    },
    {
        name: 'Warteg Kemuning',
        category: 'Food and Beverage',
        progress: 70,
        description:
        'Warteg Kemuning adalah warteg masakan rumahan, tidak memasak makanan fast food, semuanya real food dengan harga yang terjangkau mulai dari ayam, ikan, telur, dan lain lain',
        totalPendanaan: 'Rp.100.000.000',
        totalInvestor: 78,
        image: wartegKemuning,
        detailLink: '#', // ganti dengan path yang sesuai
    },
    {
        name: 'Warteg Kemuning',
        category: 'Food and Beverage',
        progress: 70,
        description:
        'Warteg Kemuning adalah warteg masakan rumahan, tidak memasak makanan fast food, semuanya real food dengan harga yang terjangkau mulai dari ayam, ikan, telur, dan lain lain',
        totalPendanaan: 'Rp.100.000.000',
        totalInvestor: 78,
        image: wartegKemuning,
        detailLink: '#', // ganti dengan path yang sesuai
    },
    {
        name: 'Warteg Kemuning',
        category: 'Food and Beverage',
        progress: 70,
        description:
        'Warteg Kemuning adalah warteg masakan rumahan, tidak memasak makanan fast food, semuanya real food dengan harga yang terjangkau mulai dari ayam, ikan, telur, dan lain lain',
        totalPendanaan: 'Rp.100.000.000',
        totalInvestor: 78,
        image: wartegKemuning,
        detailLink: '#', // ganti dengan path yang sesuai
    },
    {
        name: 'Warteg Kemuning',
        category: 'Food and Beverage',
        progress: 70,
        description:
        'Warteg Kemuning adalah warteg masakan rumahan, tidak memasak makanan fast food, semuanya real food dengan harga yang terjangkau mulai dari ayam, ikan, telur, dan lain lain',
        totalPendanaan: 'Rp.100.000.000',
        totalInvestor: 78,
        image: wartegKemuning,
        detailLink: '#', // ganti dengan path yang sesuai
    },
    {
        name: 'Warteg Kemuning',
        category: 'Food and Beverage',
        progress: 100,
        description:
        'Warteg Kemuning adalah warteg masakan rumahan, tidak memasak makanan fast food, semuanya real food dengan harga yang terjangkau mulai dari ayam, ikan, telur, dan lain lain',
        totalPendanaan: 'Rp.100.000.000',
        totalInvestor: 78,
        image: wartegKemuning,
        detailLink: '#', // ganti dengan path yang sesuai
    },
    {
        name: 'Warteg Kemuning',
        category: 'Food and Beverage',
        progress: 70,
        description:
        'Warteg Kemuning adalah warteg masakan rumahan, tidak memasak makanan fast food, semuanya real food dengan harga yang terjangkau mulai dari ayam, ikan, telur, dan lain lain',
        totalPendanaan: 'Rp.100.000.000',
        totalInvestor: 78,
        image: wartegKemuning,
        detailLink: '#', // ganti dengan path yang sesuai
    },
    {
        name: 'Warteg Kemuning',
        category: 'Food and Beverage',
        progress: 70,
        description:
        'Warteg Kemuning adalah warteg masakan rumahan, tidak memasak makanan fast food, semuanya real food dengan harga yang terjangkau mulai dari ayam, ikan, telur, dan lain lain',
        totalPendanaan: 'Rp.100.000.000',
        totalInvestor: 78,
        image: wartegKemuning,
        detailLink: '#', // ganti dengan path yang sesuai
    },
    {
        name: 'Warteg Kemuning',
        category: 'Food and Beverage',
        progress: 70,
        description:
        'Warteg Kemuning adalah warteg masakan rumahan, tidak memasak makanan fast food, semuanya real food dengan harga yang terjangkau mulai dari ayam, ikan, telur, dan lain lain',
        totalPendanaan: 'Rp.100.000.000',
        totalInvestor: 78,
        image: wartegKemuning,
        detailLink: '#', // ganti dengan path yang sesuai
    },
    {
        name: 'Warteg Kemuning',
        category: 'Food and Beverage',
        progress: 70,
        description:
        'Warteg Kemuning adalah warteg masakan rumahan, tidak memasak makanan fast food, semuanya real food dengan harga yang terjangkau mulai dari ayam, ikan, telur, dan lain lain',
        totalPendanaan: 'Rp.100.000.000',
        totalInvestor: 78,
        image: wartegKemuning,
        detailLink: '#', // ganti dengan path yang sesuai
    },
    {
        name: 'Warteg Kemuning',
        category: 'Food and Beverage',
        progress: 70,
        description:
        'Warteg Kemuning adalah warteg masakan rumahan, tidak memasak makanan fast food, semuanya real food dengan harga yang terjangkau mulai dari ayam, ikan, telur, dan lain lain',
        totalPendanaan: 'Rp.100.000.000',
        totalInvestor: 78,
        image: wartegKemuning,
        detailLink: '#', // ganti dengan path yang sesuai
    },
    {
        name: 'Warteg Kemuning',
        category: 'Food and Beverage',
        progress: 70,
        description:
        'Warteg Kemuning adalah warteg masakan rumahan, tidak memasak makanan fast food, semuanya real food dengan harga yang terjangkau mulai dari ayam, ikan, telur, dan lain lain',
        totalPendanaan: 'Rp.100.000.000',
        totalInvestor: 78,
        image: wartegKemuning,
        detailLink: '#', // ganti dengan path yang sesuai
    },
    {
        name: 'Warteg Kemuning',
        category: 'Food and Beverage',
        progress: 70,
        description:
        'Warteg Kemuning adalah warteg masakan rumahan, tidak memasak makanan fast food, semuanya real food dengan harga yang terjangkau mulai dari ayam, ikan, telur, dan lain lain',
        totalPendanaan: 'Rp.100.000.000',
        totalInvestor: 78,
        image: wartegKemuning,
        detailLink: '#', // ganti dengan path yang sesuai
    },
    {
        name: 'Warteg Kemuning',
        category: 'Food and Beverage',
        progress: 70,
        description:
        'Warteg Kemuning adalah warteg masakan rumahan, tidak memasak makanan fast food, semuanya real food dengan harga yang terjangkau mulai dari ayam, ikan, telur, dan lain lain',
        totalPendanaan: 'Rp.100.000.000',
        totalInvestor: 78,
        image: wartegKemuning,
        detailLink: '#', // ganti dengan path yang sesuai
    },
    
]

const ITEMS_PER_PAGE = 4

const AnotherUMKM = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(umkmList.length / ITEMS_PER_PAGE)

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const currentUMKM = umkmList.slice(startIndex, startIndex + ITEMS_PER_PAGE)

    return (
        <div id='another-umkm'>
            <div id='another-umkm-header'>
                <h1>Lainnya</h1>
                {/* Pagination Controls */}
                <div className="pagination">
                    <button
                        className="pagination-button"
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                    >
                        &lt;
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            className={`pagination-page ${currentPage === i + 1 ? 'active' : ''}`}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        className="pagination-button"
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                    >
                        &gt;
                    </button>
                </div>
            </div>
            <div id='another-umkm-content'>
                {currentUMKM.map((umkm, index) => (
                    <React.Fragment key={index}>
                        <div id='cards-container'>
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
                ))}
            </div>
        </div>
    )
}

export default AnotherUMKM
