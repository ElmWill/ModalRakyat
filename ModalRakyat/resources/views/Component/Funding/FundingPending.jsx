import React from 'react'
import './FundingPending.css'

const FundingPending = () => {
    const today = new Date()
    const formattedDate = today.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })

    const FundingPendingData = [
        {
            umkmName: 'UMKM A',
            action: 'BUY',
            date: '17 Juni 2025',
            ownership: '20%',
            totalFundingPending: 50000000,
            dividenYield: 0.11, // 11%
            unit: 500
        },
        {
            umkmName: 'UMKM B',
            action: 'SELL',
            date: '17 Juni 2025',
            ownership: '10%',
            totalFundingPending: 30000000,
            dividenYield: 0.05, // 5%
            unit: 300
        }
    ]

    return (
        <div id='funding-pending-container'>
            {FundingPendingData.map((item, index) => {
                const estimasiDividen = item.dividenYield * item.totalFundingPending
                const isSell = item.action === 'SELL'
                const actionColor = isSell ? '#EF5E5E' : '#70AF59'

                return (
                    <div
                        key={index}
                        className='funding-pending-item'
                        style={{ borderColor: actionColor }}
                    >
                        <div id="funding-pending-heading">
                            <div id="funding-pending-name">
                                <h1>{item.umkmName}</h1>
                            </div>
                            <div id="funding-pending-separator">|</div>
                            <div
                                id="funding-pending-action"
                                style={{ color: actionColor }}
                            >
                                {item.action}
                            </div>
                            <h2 id='funding-pending-date'>{item.date}</h2>
                        </div>
                        <div id="funding-pending-detail">
                            <div className="funding-pending-detail-item">
                                <div className="funding-pending-label">
                                    Persentase Kepemilikan
                                </div>
                                <div className="funding-pending-value">
                                    {item.ownership}
                                </div>
                            </div>
                            <div className="funding-pending-detail-item">
                                <div className="funding-pending-label">
                                    Total Funding Pending
                                </div>
                                <div className="funding-pending-value">
                                    Rp.{item.totalFundingPending.toLocaleString('id-ID')}
                                </div>
                            </div>
                            <div className="funding-pending-detail-item">
                                <div className="funding-pending-label">
                                    Dividen Yield
                                </div>
                                <div className="funding-pending-value">
                                    0 - {(item.dividenYield * 100).toFixed(0)}%
                                </div>
                            </div>
                            <div className="funding-pending-detail-item">
                                <div className="funding-pending-label">
                                    Jumlah Unit
                                </div>
                                <div className="funding-pending-value">
                                    {item.unit}
                                </div>
                            </div>
                            <div className="funding-pending-detail-item">
                                <div className="funding-pending-label">
                                    Estimasi Dividen/Year
                                </div>
                                <div className="funding-pending-value">
                                    Rp.0 - {estimasiDividen.toLocaleString('id-ID')}
                                </div>
                            </div>
                            <div id="pending-see-funding-detail-button">
                                <button>Lihat Detail</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FundingPending
