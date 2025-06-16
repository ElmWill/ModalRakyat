import React from 'react'
import './Menu.css'

const Menu = ({ activeMenu, onMenuClick }) => {
  return (
    <div id='menu-containers'>
        <div
            id="menu-item"
            className={activeMenu === 'portofolio' ? 'active' : ''}
            onClick={() => onMenuClick('portofolio')}
        >
            Portofolio
        </div>
        <div
            id="menu-item"
            className={activeMenu === 'riwayat' ? 'active' : ''}
            onClick={() => onMenuClick('riwayat')}
        >
            Riwayat
        </div>
    </div>
  )
}

export default Menu
