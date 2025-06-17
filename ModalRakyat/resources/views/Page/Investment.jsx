import React, {useState} from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Menu from '../Component/Investment/Menu'
import Balance from '../Component/Balance/Balance'
import Portofolio from '../Component/Investment/Portofolio'
import InvestmentHistory from '../Component/Investment/InvestmentHistory'

const Investment = () => {
    const [balance] = useState(20000000) // "Saldo Anda", nanti ambil data dari backend
    const [invest] = useState(200000000) // "Saldo Diinvestasikan", nanti ambul data dari backend
    const [activeMenu, setActiveMenu] = useState('portofolio')

    return (
        <div>
            <Navbar/>
            <Menu activeMenu={activeMenu} onMenuClick={setActiveMenu} />
            <Balance 
            balance={balance}
            invest={invest} />
            {activeMenu === 'portofolio' && <Portofolio />}
            {activeMenu === 'riwayat' && <InvestmentHistory />}
        </div>
    )
}

export default Investment
