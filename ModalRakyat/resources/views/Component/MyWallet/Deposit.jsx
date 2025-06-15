import React, { useState } from 'react'
import deposit from '../../assets/deposit-icon.png'
import './Deposit.css'

const Deposit = ({ setBalance, setHistoryData }) => {
    const [showOverlay, setShowOverlay] = useState(false)
    const [amount, setAmount] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleDepositClick = () => {
        setShowOverlay(true)
    }

    const handleCloseOverlay = () => {
        setShowOverlay(false)
        setAmount('')
    }

    const handleSubmit = () => {
        const depositAmount = parseInt(amount)

        if (isNaN(depositAmount) || depositAmount <= 0) {
        setErrorMessage('Masukkan jumlah yang valid')
        return
        }

        // Tambah ke saldo
        setBalance(prev => prev + depositAmount)

        // Tambah ke riwayat
        setHistoryData(prev => [
        ...prev,
        {
            type: 'DEPOSIT',
            status: 'SUCCESSED',
            amount: depositAmount
        }
        ])

        handleCloseOverlay()
    }

    return (
        <div>
        <div id='deposit' onClick={handleDepositClick}>
            <img src={deposit} alt="Deposit" />
            <h2>Deposit</h2>
        </div>

        {showOverlay && (
            <div id="deposit-overlay">
            <div id="deposit-overlay-content">
                <h3>Masukkan Jumlah Deposit</h3>
                <input
                type="text"
                value={Number(amount).toLocaleString('id-ID')}
                onChange={(e) => {
                    const rawValue = e.target.value.replace(/\./g, '')
                    if (/^\d*$/.test(rawValue)) { // hanya angka
                    setAmount(rawValue)
                    setErrorMessage('')
                    }
                }}
                />
                <p id="input-error-message">{errorMessage}</p>
                <div id="deposit-buttons">
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={handleCloseOverlay}>Cancel</button>
                </div>
            </div>
            </div>
        )}
        </div>
    )
}

export default Deposit