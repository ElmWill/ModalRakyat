import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './AnotherUMKM.css'
import wartegKemuning from '../../../assets/Warteg Kemuning.png'
import makaroniNgehe from '../../../assets/makaroni-ngehe.jpg'
import gonegani from '../../../assets/gonegani.jpeg'
import narunaCeramic from '../../../assets/naruna-ceramic.jpg'
import fifikayLaundry from '../../../assets/fifikay-laundry.webp'
import tokoKemanggisan from '../../../assets/toko-kemanggisan.webp'
import rocky from '../../../assets/rocky.jpg'

const umkmList = [
    {
        name: 'Warteg Kemuning',
        category: 'Food and Beverage',
        progress: 70,
        description:
        'Warteg Kemuning adalah warteg masakan rumahan, tidak memasak makanan fast food, semuanya real food dengan harga yang terjangkau mulai dari ayam, ikan, telur, dan lain lainWarteg Kemuning adalah warteg masakan rumahan, tidak memasak makanan fast food, semuanya real food dengan harga yang terjangkau mulai dari ayam, ikan, telur, dan lain lainWarteg Kemuninggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg',
        totalPendanaan: 100000000,
        totalInvestor: 78,
        image: wartegKemuning,
        detailLink: '/detail', // ganti dengan path yang sesuai
    },
    {
        name: 'Makaroni Ngehe',
        category: 'Food and Beverage',
        progress: 100,
        description:
        'Makaroni Ngehe adalah Tempat menjual makaroni yang sedang ngehits, kini sudah terbuka banyak cabang di Jakarta',
        totalPendanaan: 500000000,
        totalInvestor: 30,
        image: makaroniNgehe,
        detailLink: '/', // ganti dengan path yang sesuai
    },
    {
        name: 'Gonegani',
        category: 'Fashion',
        progress: 50,
        description:
        "A Woman’s Most Fashionable Destination. Pengiriman Seluruh Indonesia. New Arrivals Every Weeks. High Quality Material. Brands: Elegant, Simple, New Arrivals Every Weeks.",
        totalPendanaan: 700000000,
        totalInvestor: 46,
        image: gonegani,
        detailLink: '#', // ganti dengan path yang sesuai
    },
    {
        name: 'Naruna Ceramic',
        category: 'Manufacture',
        progress: 75,
        description:
        'Naruna didirikan pada tahun 2019 sebagai perusahaan manufaktur yang berfokus pada porselen dan keramik. Naruna didirikan oleh ahli kimia yang berpengalaman dalam penelitian bahan dan glasir keramik selama beberapa dekade dan memiliki orang-orang terbaik di bidangnya yang unggul, muda, energik, berkepribadian baik sebagai fondasi yang kuat bagi perusahaan kami. Fokus produk Naruna adalah peralatan makan, hiasan dinding eksklusif dengan konsep industri keramik buatan tangan. Kami juga menerima custom product design untuk memberikan keluasan bagi konsumen dalam mengembangkan konsep, ide, dan desain bersama Naruna.',
        totalPendanaan: 100000000,
        totalInvestor: 58,
        image: narunaCeramic,
        detailLink: '#', // ganti dengan path yang sesuai
    },
    {
        name: 'Fifikay Laundry',
        category: 'Laundry',
        progress: 30,
        description:
        'Kami melayani laundry kiloan dan satuan untuk kemudahan rekan rekan di wilayah Kemanggisan, Kebon Jeruk, dan sekitarnya. Kami juga melayani Laundry, Seprai Set, Bed Cover, Selimut, Boneka, dan lain lain. Anda juga dapat menemui kami di IG fifikay_laundry Terima kasih',
        totalPendanaan: 125000000,
        totalInvestor: 20,
        image: fifikayLaundry,
        detailLink: '#', // ganti dengan path yang sesuai
    },
    {
        name: 'Toko Kemanggisan',
        category: 'Retail',
        progress: 95,
        description:
        'Low-key neighborhood market for groceries, health & beauty needs, hardware, stationery & another more things here to sell',
        totalPendanaan: 500000000,
        totalInvestor: 70,
        image: tokoKemanggisan,
        detailLink: '#', // ganti dengan path yang sesuai
    },
    {
        name: 'Rocky Fried Chicken',
        category: 'Food and Beverage',
        progress: 85,
        description:
        'Ayam goreng enak dengan harga terjangkau yang cocok untuk budget anak kos, sudah banyak tersedia di dekat kampus kampus yang ada di jakarta',
        totalPendanaan: 300000000,
        totalInvestor: 60,
        image: rocky,
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
                                    <div>

                                    </div>
                                    <div id='progress-bar'>
                                        <div
                                            id='progress-bar-color'
                                            style={{ width: `${umkm.progress}%` }}
                                        ></div>
                                    </div>
                                    <div id='pendanaan'>
                                        <h3>Total Pendanaan</h3>
                                        <h3 id='urbanist'>Rp.{umkm.totalPendanaan.toLocaleString('id-ID')}</h3>
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
