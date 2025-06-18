import React, { useState } from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import './Trade.css'

const Trade = () => {
    const [balance, setBalance] = useState(50000000) // contoh saldo Rp.50.000.000, nanti ambil dari backend
    const [showOverlay, setShowOverlay] = useState(false)
    const [selectedTrade, setSelectedTrade] = useState(null)
    const [error, setError] = useState('')

    const today = new Date()
    const formattedDate = today.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })

    const trades = [
        {
            name: 'Toko Kemanggisan',
            sellValue: 5000000,
            sellDate: '17 Juni 2025',
            ownership: '50%',
            yield: 0.11,
            unit: 50,
        },
        {
            name: 'Makaroni Ngehe',
            sellValue: 75000000,
            sellDate: '17 Juni 2025',
            ownership: '15%',
            yield: 0.08,
            unit: 75,
        },
    ]

    const handleBuyClick = (item) => {
        setSelectedTrade(item)
        setError('')
        setShowOverlay(true)
    }

    const confirmPurchase = () => {
        if (selectedTrade.sellValue > balance) {
            setError('Saldo tidak mencukupi untuk pembelian ini.')
        } else {
            // Simulasi record transaksi
            const newTransaction = {
                umkmName: selectedTrade.name,
                amount: selectedTrade.sellValue,
                ownership: selectedTrade.ownership,
                yield: selectedTrade.yield,
                unit: selectedTrade.unit,
                purchaseDate: formattedDate,
            }

            console.log('Transaksi tersimpan:', newTransaction) // nanti ganti POST ke backend

            // Update saldo dan tutup overlay
            setBalance(balance - selectedTrade.sellValue) // nanti bisa update balance ke backend juga, tinggal ubah
            setShowOverlay(false)
            alert('Pembelian berhasil!')
        }
    }


    return (
        <div>
            <Navbar />
            <div id='trade-containers'>
                {trades.map((item, index) => {
                    const estimasiDividen = item.yield * item.sellValue
                    return (
                        <div id="trade-item" key={index}>
                            <div id="trade-umkm-heading">
                                <div id="trade-umkm-name"><h1>{item.name}</h1></div>
                                <div id="trade-umkm-separator">|</div>
                                <div id="trade-sell-value">Rp.{item.sellValue.toLocaleString('id-ID')}</div>
                                <div id="trade-sell-date">{item.sellDate}</div>
                            </div>
                            <div id="trade-detail">
                                <div className="trade-detail-item">
                                    <div className="trade-label">Persentase Kepemilikan</div>
                                    <div className="trade-value">{item.ownership}</div>
                                </div>
                                <div className="trade-detail-item">
                                    <div className="trade-label">Dividen Yield</div>
                                    <div className="trade-value">0 - {(item.yield * 100).toFixed(0)}%</div>
                                </div>
                                <div className="trade-detail-item">
                                    <div className="trade-label">Jumlah Unit</div>
                                    <div className="trade-value">{item.unit}</div>
                                </div>
                                <div className="trade-detail-item">
                                    <div className="trade-label">Estimasi Dividen/Year</div>
                                    <div className="trade-value">Rp.0 - {estimasiDividen.toLocaleString('id-ID')}</div>
                                </div>
                                <div id="trade-buy-button">
                                    <button onClick={() => handleBuyClick(item)}>Beli</button>
                                </div>
                                <div id="trade-see-porto-detail-button">
                                    <button>Lihat Detail</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Overlay */}
            {showOverlay && selectedTrade && (
                <div className="buy-ownership-overlay">
                    <div className="buy-ownership-overlay-content">
                        <h2>Konfirmasi Pembelian</h2>
                        <p><strong>UMKM:</strong> {selectedTrade.name}</p>
                        <p><strong>Harga:</strong> Rp.{selectedTrade.sellValue.toLocaleString('id-ID')}</p>
                        <p><strong>Saldo Anda:</strong> Rp.{balance.toLocaleString('id-ID')}</p>
                        {error && <p className="buy-ownership-error">{error}</p>}
                        <div className="buy-ownership-overlay-buttons">
                            <button onClick={confirmPurchase}>Konfirmasi</button>
                            <button onClick={() => setShowOverlay(false)}>Batal</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Trade
