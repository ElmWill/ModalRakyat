import React from 'react'
import investmentVideo from '../../assets/Investment-video.mp4'
import './Investasi.css'

const Investasi = () => {
  return (
     <div className="investasi-container">
        <div id='investasi'>
          <h1>Investasi</h1>
          <p>
              Kami memastikan uang yang Anda Investasikan<br/>
              sepenuhnya digunakan untuk <strong>perputaran bisnis</strong><br/>
              dengan memegang data dari UMKM secara lengkap<br/>
              disertai dengan dana yang tidak melebihi <strong>30% dari</strong><br/>
              <strong>total valuasi bisnis.</strong> Keuntungan akan dibagikan<br/>
              berupa <strong>persentase yang disepakati</strong> dari NET PROFIT.
          </p>
        </div>
        <div className="investment-video">
          <video src={investmentVideo} autoPlay muted loop playsInline />
        </div>
    </div>
  )
}

export default Investasi
