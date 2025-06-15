import React from 'react'
import './History.css'
import success from '../../assets/success-icon.png'
import fail from '../../assets/fail-icon.png'

const History = ({ historyData }) => {
    // format tanggal hari ini
    const today = new Date()
    const formattedDate = today.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })

    return (
        <div id='history-container'>
        <h1>Riwayat</h1>
        {historyData.map((item, index) => {
            const isSuccess = item.status === 'SUCCESSED'
            const containerId = isSuccess ? 'success-containers' : 'fail-containers'
            const itemId = isSuccess ? 'success' : 'fail'
            const icon = isSuccess ? success : fail

            return (
            <div key={index} id={containerId}>
                <div id={itemId}>
                <img src={icon} alt={isSuccess ? 'Success' : 'Fail'} />
                <h2 id='history-label'>{item.type} {item.status}</h2>
                <div id="right-side">
                    <div id="line-vertical"></div>
                    <h2 id='date'>{formattedDate}</h2>
                </div>
                <h2 id='amount'>Rp.{item.amount.toLocaleString('id-ID')}</h2>
                </div>
                <div id="history-line"></div>
            </div>
            )
        })}
        </div>
    )
}

export default History
