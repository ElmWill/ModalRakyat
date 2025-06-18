import React, {useState} from 'react'
import './DetailUMKM.css'
import wartegKemuning from '../../../assets/Warteg Kemuning.png'

const DetailUMKM = () => {
    const [unit, setUnit] = useState(1)
    const pricePerUnit = 100000
    const maxDividend = 11000
    const maxYield = 11

    const increment = () => setUnit(prev => prev + 1)
    const decrement = () => setUnit(prev => Math.max(1, prev - 1))
    return (
        <div id='detail-umkm-container'>
            <div id="detail-umkm-heading">
                <img src={wartegKemuning} alt="" />
                <div id="detail-umkm-info">
                    <div id="detail-umkm-info-1">
                        <h1>UMKM A</h1>
                        <div id="detail-umkm-download-button">
                            <button>Unduh Proposal</button>
                            <button>Unduh LK</button>
                        </div>
                        
                    </div>
                    <div id="detail-umkm-info-2">
                        <h2>Food and Beverage</h2>
                        <p>76%</p>
                    </div>
                    <p id='description'>
                        Warteg Kemuning adalah warteg masakan rumahan, tidak memasak makanan fast food, semuanya real food dengan harga yang terjangkau mulai dari ayam, ikan, telur, dan lain lainWarteg Kemuning adalah warteg masakan rumahan, tidak memasak makanan fast food, semuanya real food dengan harga yang terjangkau mulai dari ayam, ikan, telur, dan lain lainWarteg Kemuninggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
                    </p>
                    <div id='progress-bar'>
                        <div
                            id='progress-bar-color'
                            style={{ width: `${76}%` }}
                        ></div>
                    </div>
                    <div id="detail-umkm-info-3">
                        <div className="detail-umkm-info-3-container">
                            <div className="detail-umkm-info-3-label">
                                Total Pendanaan
                            </div>
                            <div className="detail-umkm-info-3-value">
                                Rp.100.000.0000
                            </div>
                        </div>
                        <div className="detail-umkm-info-3-container">
                            <div className="detail-umkm-info-3-label">
                                Total Investor
                            </div>
                            <div className="detail-umkm-info-3-value">
                                78
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="detail-umkm-investasi">
                <h1>Investasi</h1>
                <div id="detail-umkm-investasi-wrapper">
                    <div id="investasi-left-label">Pendanaan yang tersisa</div>

                    <div className="investasi-amount-container">
                        <div className="investasi-amount">Rp 24.000.000</div>
                        <div className="investasi-divider"></div>
                        <div className="investasi-amount">Rp 100.000.000</div>
                    </div>
                    
                    <div id="investasi-right-label">Dana Anda</div>
                </div>
            </div>
            <div id="detail-umkm-kalukalor-invetasi">
                <h1>Kalkulator Investasi</h1>

                {/* Jumlah Unit */}
                <div className="calculator-row">
                    <label>Jumlah Unit</label>
                    <div className="calculator-control-wrapper">
                        <button onClick={decrement}>−</button>
                        <div className="value-display">{unit}</div>
                        <button onClick={increment}>+</button>
                    </div>
                </div>

                {/* Total Biaya */}
                <div className="calculator-row">
                    <label>Total Biaya</label>
                    <div className="calculator-control-wrapper">
                        <button disabled>−</button>
                        <div className="value-display">
                            Rp {Intl.NumberFormat('id-ID').format(unit * pricePerUnit)}
                        </div>
                        <button disabled>+</button>
                    </div>
                </div>

                {/* Jumlah Dividen dan Yield */}
                <div className="dividen-row">
                    <div>
                        <strong>Jumlah Dividen</strong><br/>
                        Rp 0 - {Intl.NumberFormat('id-ID').format(unit * maxDividend)}
                    </div>
                    <div>
                        <strong>Dividen Yield</strong><br/>
                        0 - {maxYield}%
                    </div>
                </div>

                {/* Tombol BUY */}
                <button className="calculator-investasi-buy-button">BUY</button>
            </div>
        </div>
    )
}

export default DetailUMKM
