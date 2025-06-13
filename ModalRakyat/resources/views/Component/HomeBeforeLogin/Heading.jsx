import React from 'react'
import './Heading.css'
import { Carousel } from 'react-bootstrap'
import umkm1 from '../../assets/UMKM-1.jpg'
import umkm2 from '../../assets/UMKM-2.png'
import umkm3 from '../../assets/UMKM-3.jpg'

const Heading = () => {
  return (
    <div id='heading'>
      <div class="heading-container">
        <div class="text-section">
            <h1>MODAL RAKYAT</h1>
            <p>Dari rakyat untuk rakyat<br/>Bersama membangun Indonesia emas</p>
            <a href="#" id="explore-link">
                <button id="explore-button">Explore</button>
            </a>
        </div>
        {/* <div className="heading-image">
          <Carousel fade interval={3000} controls={false} indicators={false}>
            <Carousel.Item>
              <img src={umkm1} className="carousel-image" alt="Gambar 1" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={umkm2} className="carousel-image" alt="Gambar 2" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={umkm3} className="carousel-image" alt="Gambar 3" />
            </Carousel.Item>
          </Carousel>
        </div> */}
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
