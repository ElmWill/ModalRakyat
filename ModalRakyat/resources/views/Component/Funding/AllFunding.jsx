import React, { useState } from 'react'
import './AllFunding.css'
import Balance from '../Balance/Balance'

const dataAllFunding = [
    { name: 'UMKM A', ownership: '20%', investment: 500000000, dividend: 0 },
    { name: 'UMKM B', ownership: '20%', investment: 500000000, dividend: 0 },
    { name: 'UMKM C', ownership: '20%', investment: 500000000, dividend: 0 },
    { name: 'UMKM D', ownership: '20%', investment: 500000000, dividend: 0 }
]

const AllFunding = ({ balance, invest }) => {
    const today = new Date()
    const formattedDate = today.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })


    const [showModal, setShowModal] = useState(false)
    const [selectedUMKM, setSelectedUMKM] = useState(null)
    const [sellPercent, setSellPercent] = useState('')
    const [error, setError] = useState('')

    const openModal = (umkm) => {
        setSelectedUMKM(umkm)
        setSellPercent('')
        setError('')
        setShowModal(true)
    }

    const handleSell = () => {
        const percent = parseFloat(sellPercent)
        if (isNaN(percent) || percent <= 0) {
            setError('Minimal penjualan adalah lebih dari 0%')
            return
        }

        if (percent > 100) {
            setError('Maksimal penjualan adalah 100% dari kepemilikan Anda')
            return
        }

        // Hitung ownership baru
        const currentOwnership = parseFloat(selectedUMKM.ownership.replace('%', ''));
        const newOwnership = Math.max(0, currentOwnership - percent);

        // Simulasi penyimpanan ke database
        const record = {
        name: selectedUMKM.name,
        ownership: currentOwnership + '%', // sebelum dijual
        sell: percent + '%', // yang dijual
        newOwnership: newOwnership + '%', // setelah dijual
        date: formattedDate // menyimpan format tanggal hari ini
        }

        console.log("Data penjualan disimpan:", record)

        alert(`Menjual ${percent}% dari ${selectedUMKM.ownership} (${selectedUMKM.name})\nTanggal: ${formattedDate}`)
        setShowModal(false)
    }


    return (
        <div>
            <Balance balance={balance} invest={invest} />
            <div id='funding-container'>
                {dataAllFunding.map((item, index) => {
                    const dividendValue = item.dividend * item.investment;
                    return (
                        <div id="funding-items" key={index}>
                            <div id="funding-umkm-name">
                                <h1>{item.name}</h1>
                            </div>
                            <div id="funding-umkm-detail">
                                <div className="funding-umkm-detail-item">
                                    <div className="funding-label">Persentase Kepemilikan</div>
                                    <div className="funding-value">{item.ownership}</div>
                                </div>
                                <div className="funding-umkm-detail-item">
                                    <div className="funding-label">Total Investasi</div>
                                    <div className="funding-value">Rp {item.investment.toLocaleString('id-ID')}</div>
                                </div>
                                <div className="funding-umkm-detail-item">
                                    <div className="funding-label">Dividen Dibagikan</div>
                                    <div className="funding-value">Rp {dividendValue.toLocaleString('id-ID')} ({item.dividend * 100}%)</div>
                                </div>
                                <div id="download-report-button">
                                    <button>Unduh Laporan</button>
                                </div>
                                <div id="sell-ownership-button">
                                    <button onClick={() => openModal(item)}>Jual Kepemilikan</button>
                                </div>
                                <div id="see-funding-detail-button">
                                    <button>Lihat Detail</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Jual Kepemilikan - {selectedUMKM.name}</h2>
                        <p>Kepemilikan saat ini: {selectedUMKM.ownership}</p>
                        <label>
                            Ingin jual berapa persen dari kepemilikan ini? (0-100%)
                            <input
                                type="number"
                                value={sellPercent}
                                onChange={(e) => setSellPercent(e.target.value)}
                                min="1"
                                max="100"
                            />
                        </label>
                        {error && <p className="sell-ownership-error-text">{error}</p>}
                        <div className="modal-buttons">
                            <button onClick={handleSell}>Jual</button>
                            <button onClick={() => setShowModal(false)}>Batal</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AllFunding
