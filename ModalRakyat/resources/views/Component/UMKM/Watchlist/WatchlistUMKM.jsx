import React from 'react'
import wartegKemuning from '../../../assets/Warteg Kemuning.png'
import makaroniNgehe from '../../../assets/makaroni-ngehe.jpg'
import gonegani from '../../../assets/gonegani.jpeg'
import narunaCeramic from '../../../assets/naruna-ceramic.jpg'
import fifikayLaundry from '../../../assets/fifikay-laundry.webp'
import './WatchlistUMKM.css'

const createUMKM = (name, category, progress, totalPendanaan, image) => ({
  name,
  category,
  progress,
  totalPendanaan,
  image,
  status: progress === 100 ? 'Done' : 'On Progress'
})

const umkmList = [
  createUMKM('Warteg Kemuning', 'Food and Beverage', 70, 'Rp.100.000.000', wartegKemuning),
  createUMKM('Makaroni Ngehe', 'Food and Beverage', 100, 'Rp.500.000.000', makaroniNgehe),
  createUMKM('Gonegani', 'Fashion', 50, 'Rp.700.000.000', gonegani),
  createUMKM('Naruna Ceramic', 'Manufactur', 75, 'Rp.300.000.000', narunaCeramic),
  createUMKM('Fifikay Laundry', 'Laundry', 30, 'Rp.125.000.000', fifikayLaundry)
]


// Komponen kartu UMKM
const UMKMCard = ({ name, category, progress, totalPendanaan, image, status }) => (
  <li className="card-item">
    <a href="#" className="card-link">
      <img src={image} alt="Card Image" className="card-image" />
      <div className={`status-badge-umkm ${status === 'Done' ? 'done' : 'on-progress'}`}>
          {status}
        </div>
      <div className="card-link-item">
        <h1>{name}</h1>
        <h2>{category}</h2>
        <div className="progress-pendanaan">
          <p>{progress}%</p>
          <div className="progress-bar">
            <div
              className="progress-bar-color"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <div className="pendanaan">
          <h3>Total Pendanaan</h3>
          <h3>{totalPendanaan}</h3>
        </div>
      </div>
    </a>
  </li>
)

const WatchlistUMKM = () => {
  return (
    <div id="watchlist-umkm">
        <div className="watchlist-umkm-header">
            <h1>Watch List</h1>
        </div>
        <div className="card-wrapper">
            <ul className="card-list">
                {umkmList.map((umkm, index) => (
                <UMKMCard key={index} {...umkm} />
                ))}
            </ul>
        </div>
    </div>
  )
}

export default WatchlistUMKM
