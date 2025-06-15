import React, { useState } from 'react'
import withdraw from '../../assets/withdraw-icon.png'
import './Withdraw.css'

const Withdraw = ({ balance, setBalance, setHistoryData }) => {
    const [showOverlay, setShowOverlay] = useState(false)
    const [amount, setAmount] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleWithdrawClick = () => {
        setShowOverlay(true)
    }

    const handleCloseOverlay = () => {
        setShowOverlay(false)
        setAmount('')
    }

    const handleSubmit = () => {
        const withdrawAmount = parseInt(amount)

        if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
            setErrorMessage('Masukkan jumlah yang valid')
            return
        }

        if (withdrawAmount > balance) {
            setErrorMessage('Jumlah melebihi saldo yang tersedia')
            return
        }

        // Kurangi saldo
        setBalance(prev => prev - withdrawAmount)

        // Tambahkan ke riwayat
        setHistoryData(prev => [
        ...prev,
        {
            type: 'WITHDRAW',
            status: 'SUCCESSED',
            amount: withdrawAmount
        }
        ])

        handleCloseOverlay()
    }

    return (
        <div>
        <div id='withdraw' onClick={handleWithdrawClick}>
            <img src={withdraw} alt="Withdraw" />
            <h2>Withdraw</h2>
        </div>

        {showOverlay && (
            <div id="withdraw-overlay">
            <div id="withdraw-overlay-content">
                <h3>Saldo Saat Ini: Rp.{balance.toLocaleString('id-ID')}</h3>
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

                <div id="withdraw-buttons">
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={handleCloseOverlay}>Cancel</button>
                </div>
            </div>
            </div>
        )}
        </div>
    )
}

export default Withdraw
