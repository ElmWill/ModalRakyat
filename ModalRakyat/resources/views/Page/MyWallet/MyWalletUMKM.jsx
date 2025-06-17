import React, { useState } from 'react'
import './MyWalletUMKM.css'
import modalrakyat_logo from '../../assets/modal rakyat_warna2.png'
import Deposit from '../../Component/MyWallet/Deposit'
import Withdraw from '../../Component/MyWallet/Withdraw'
import Balance from '../../Component/Balance/Balance'
import History from '../../Component/MyWallet/History'

const MyWalletUMKM = () => {
    // Nanti data dari database
    const [balance, setBalance] = useState(20000000) // saldo awal Rp.20.000.000
    const [invest] = useState(200000000) // Saldo diinvestasikan Rp.200.000.000
    // const [historyData, setHistoryData] = useState([]) // riwayat transaksi
    const [historyData, setHistoryData] = useState([ // data dummy
    { type: 'DEPOSIT', status: 'SUCCESSED', amount: 150000 },
    { type: 'WITHDRAW', status: 'FAILED', amount: 50000 },
    { type: 'DEPOSIT', status: 'SUCCESSED', amount: 300000 }
    ])

    return (
        <div className='my-wallet'>
            <div id='modal-rakyat-logo'>
                <img src={modalrakyat_logo} alt="" />
            </div>
            <div id="depo-with">
                <Deposit 
                setBalance={setBalance} 
                setHistoryData={setHistoryData} 
                />
                <Withdraw 
                balance={balance} 
                setBalance={setBalance} 
                setHistoryData={setHistoryData} 
                />
            </div>
            <Balance 
            balance={balance}
            invest={invest} />
            <History historyData={historyData} />
        </div>
    )
}

export default MyWalletUMKM
