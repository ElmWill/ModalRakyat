import React from 'react'
import './Portofolio.css'

const dataPortofolio = [
    {
        name: 'UMKM A',
        ownership: '20%',
        investment: 'Rp.50.0000.000',
        dividend: 'Rp0 (0.00%)'
    },
    {
        name: 'UMKM B',
        ownership: '20%',
        investment: 'Rp.50.0000.000',
        dividend: 'Rp0 (0.00%)'
    },
    {
        name: 'UMKM C',
        ownership: '20%',
        investment: 'Rp.50.0000.000',
        dividend: 'Rp0 (0.00%)'
    },
    {
        name: 'UMKM D',
        ownership: '20%',
        investment: 'Rp.50.0000.000',
        dividend: 'Rp0 (0.00%)'
    }
]

const Portofolio = () => {
    return (
        <div id='porto-container'>
            {dataPortofolio.map((item, index) => (
                <div id="porto-items" key={index}>
                    <div id="porto-umkm-name">
                        <h1>{item.name}</h1>
                    </div>
                    <div id="porto-umkm-detail">
                        <div className="porto-umkm-detail-item">
                            <div className="porto-label">Persentase Kepemilikan</div>
                            <div className="porto-value">{item.ownership}</div>
                        </div>
                        <div className="porto-umkm-detail-item">
                            <div className="porto-label">Total Investasi</div>
                            <div className="porto-value">{item.investment}</div>
                        </div>
                        <div className="porto-umkm-detail-item">
                            <div className="porto-label">Dividen Dibagikan</div>
                            <div className="porto-value">{item.dividend}</div>
                        </div>
                        <div id="download-report-button">
                            <button>Unduh Laporan</button>
                        </div>
                        <div id="sell-ownership-button">
                            <button>Jual Kepemilikan</button>
                        </div>
                        <div id="see-porto-detail-button">
                            <button>Lihat Detail</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Portofolio
