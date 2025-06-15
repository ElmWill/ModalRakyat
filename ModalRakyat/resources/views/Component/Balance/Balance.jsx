import React from 'react'
import './Balance.css'

const Balance = ({ balance }) => {
  return (
    <div id='balance-containers'>
        <div id="balance-item">
            <div id="balance-amount">Rp.{balance.toLocaleString('id-ID')}</div>
            <div id="balance-label">Saldo Anda</div>
        </div>
        <div id="balance-item">
            <div id="balance-amount">Rp.100.000.000</div>
            <div id="balance-label">Saldo Diinvestasikan</div>
        </div>
    </div>
  )
}

export default Balance
