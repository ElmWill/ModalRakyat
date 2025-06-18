import React from 'react'
import wartegKemuning from '../../../assets/Warteg Kemuning.png'
import './PendingUMKM.css'

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
  createUMKM('Warteg Kemuning', 'Food and Beverage', 100, 'Rp.100.000.000', wartegKemuning),
  createUMKM('Warteg Kemuning', 'Food and Beverage', 70, 'Rp.100.000.000', wartegKemuning),
  createUMKM('Warteg Kemuning', 'Food and Beverage', 70, 'Rp.100.000.000', wartegKemuning),
  createUMKM('Warteg Kemuning', 'Food and Beverage', 70, 'Rp.100.000.000', wartegKemuning)
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

const PendingUMKM = () => {
  return (
    <div id="pending-umkm">
        <div className="pending-umkm-header">
            <h1>Pending</h1>
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

export default PendingUMKM
