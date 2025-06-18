import React, { useState } from 'react'
import NavbarUMKM from '../Component/Navbar/NavbarUMKM'
import Menu from '../Component/Funding/Menu'
import AllFunding from '../Component/Funding/AllFunding'
import FundingPending from '../Component/Funding/FundingPending'

const FundingManagement = () => {
    const [balance] = useState(20000000) // "Saldo Anda", nanti ambil data dari backend
    const [invest] = useState(200000000) // "Saldo Diinvestasikan", nanti ambul data dari backend
    const [activeMenu, setActiveMenu] = useState('all-funding')

    return (
        <div>
            <NavbarUMKM />
            <Menu activeMenu={activeMenu} onMenuClick={setActiveMenu} />
            {activeMenu === 'all-funding' && <AllFunding balance={balance} invest={invest} />}
            {activeMenu === 'funding-pending' && <FundingPending />}
        </div>
    )
}

export default FundingManagement
