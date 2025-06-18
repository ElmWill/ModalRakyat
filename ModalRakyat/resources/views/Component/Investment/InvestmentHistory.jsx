import React from 'react'
import './InvestmentHistory.css'

const InvestmentHistory = () => {
    const today = new Date()
    const formattedDate = today.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })

    const investmentHistoryData = [
        {
            umkmName: 'Warteg Kemuning',
            action: 'BUY',
            date: '17 Juni 2025',
            ownership: '50%',
            totalInvestasi: 50000000,
            dividenYield: 0.11, 
            unit: 50
        },
        {
            umkmName: 'Gonegani',
            action: 'BUY',
            date: '17 Juni 2025',
            ownership: '7.14%',
            totalInvestasi: 50000000,
            dividenYield: 0.05, 
            unit: 50
        },
        {
            umkmName: 'Gonegani',
            action: 'SELL',
            date: '17 Juni 2025',
            ownership: '7.14%',
            totalInvestasi: 50000000,
            dividenYield: 0.05, 
            unit: 50
        },
        {
            umkmName: 'Makaroni Ngehe',
            action: 'BUY',
            date: '17 Juni 2025',
            ownership: '10%',
            totalInvestasi: 50000000,
            dividenYield: 0.08, 
            unit: 50
        },
        {
            umkmName: 'Rocky Fried Chicken',
            action: 'BUY',
            date: '17 Juni 2025',
            ownership: '16.6%',
            totalInvestasi: 50000000,
            dividenYield: 0.05,
            unit: 50
        },
        {
            umkmName: 'Naruna Ceramic',
            action: 'BUY',
            date: '18 Juni 2025',
            ownership: '16.6%',
            totalInvestasi: 50000000,
            dividenYield: 0.06, 
            unit: 50
        }
    ]

    return (
        <div id='investment-history-container'>
            {investmentHistoryData.map((item, index) => {
                const estimasiDividen = item.dividenYield * item.totalInvestasi
                const isSell = item.action === 'SELL'
                const actionColor = isSell ? '#EF5E5E' : '#70AF59'

                return (
                    <div
                        key={index}
                        className='investment-history-item'
                        style={{ borderColor: actionColor }}
                    >
                        <div id="investment-history-heading">
                            <div id="investment-umkm-name">
                                <h1>{item.umkmName}</h1>
                            </div>
                            <div id="investment-history-separator">|</div>
                            <div
                                id="investment-history-action"
                                style={{ color: actionColor }}
                            >
                                {item.action}
                            </div>
                            <h2 id='investment-history-date'>{item.date}</h2>
                        </div>
                        <div id="investment-history-detail">
                            <div className="investment-history-detail-item">
                                <div className="investment-history-label">
                                    Persentase Kepemilikan
                                </div>
                                <div className="investment-history-value">
                                    {item.ownership}
                                </div>
                            </div>
                            <div className="investment-history-detail-item">
                                <div className="investment-history-label">
                                    Total Investasi
                                </div>
                                <div className="investment-history-value">
                                    Rp.{item.totalInvestasi.toLocaleString('id-ID')}
                                </div>
                            </div>
                            <div className="investment-history-detail-item">
                                <div className="investment-history-label">
                                    Dividen Yield
                                </div>
                                <div className="investment-history-value">
                                    0 - {(item.dividenYield * 100).toFixed(0)}%
                                </div>
                            </div>
                            <div className="investment-history-detail-item">
                                <div className="investment-history-label">
                                    Jumlah Unit
                                </div>
                                <div className="investment-history-value">
                                    {item.unit}
                                </div>
                            </div>
                            <div className="investment-history-detail-item">
                                <div className="investment-history-label">
                                    Estimasi Dividen/Year
                                </div>
                                <div className="investment-history-value">
                                    Rp.0 - {estimasiDividen.toLocaleString('id-ID')}
                                </div>
                            </div>
                            <div id="history-see-porto-detail-button">
                                <button>Lihat Detail</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default InvestmentHistory
