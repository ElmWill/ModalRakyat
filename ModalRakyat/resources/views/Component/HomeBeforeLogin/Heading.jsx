import React from 'react'
import './Heading.css'

const Heading = () => {
  return (
    <div>
      <div class="heading-container">
        <div class="text-section">
            <h1>MODAL RAKYAT</h1>
            <p>Dari rakyat untuk rakyat<br/>Bersama membangun Indonesia emas</p>
            <a href="#" id="explore-link">
                <button id="explore-button">Explore</button>
            </a>
        </div>
        <div class="image-placeholder"></div>
    </div>

    <div class="benefit-container">
        <h2>No Fee For Investors</h2>
        <p>
        Kami akan mengambil <strong>3% dari pendanaan</strong> yang <strong>diperoleh UMKM</strong>.<br/>
        Investor akan membeli dalam bentuk <strong>unit</strong> dengan <strong>harga yang ditentukan</strong> oleh UMKM.
        Setelah investors melakukan pembelian, maka investors hanya bisa <strong>melakukan penjualan setelah 1 tahun</strong>.
        </p>
    </div>
    </div>
  )
}

export default Heading
