import React from 'react'
import './BalanceFunding.css'

const BalanceFunding = ({ balance, invest }) => {
  return (
    <div id='balance-containers'>
        <div id="balance-item">
            <div id="balance-amount">Rp.{balance.toLocaleString('id-ID')}</div>
            <div id="balance-label">Total Dana</div>
        </div>
        <div id="balance-item">
            <div id="balance-amount">Rp.{invest.toLocaleString('id-ID')}</div>
            <div id="balance-label">Dividen Dibagikan</div>
        </div>
    </div>
  )
}

export default BalanceFunding
