import React from 'react'
import wartegKemuning from '../../../assets/Warteg Kemuning.png'
import tokoKemanggisan from '../../../assets/toko-kemanggisan.webp'
import rocky from '../../../assets/rocky.jpg'
import narunaCeramic from '../../../assets/naruna-ceramic.jpg'
import './RecommendedUMKM.css'

const createUMKM = (name, category, progress, totalPendanaan, image) => ({
  name,
  category,
  progress,
  totalPendanaan,
  image,
  status: progress === 100 ? 'Done' : 'On Progress'
})

const umkmList = [
  createUMKM('Warteg Kemuning', 'Food and Beverage', 70, 100000000, wartegKemuning),
  createUMKM('Toko Kemanggisan', 'Retail', 95, 5000000, tokoKemanggisan),
  createUMKM('Rocky Fried Chicken', 'Food and Beverage', 85, 300000000, rocky),
  createUMKM('Naruna Ceramic', 'Manufactur', 75, 300000000, narunaCeramic),
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
          <h3>Rp.{totalPendanaan.toLocaleString('id-ID')}</h3>
        </div>
      </div>
    </a>
  </li>
)

const RecommendedUMKM = () => {
  return (
    <div id="recommended-umkm">
        <div className="recommended-umkm-header">
            <h1>Recommend</h1>
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

export default RecommendedUMKM
