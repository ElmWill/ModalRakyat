import React from 'react'
import './Menu.css'

const Menu = ({ activeMenu, onMenuClick }) => {
  return (
    <div id='menu-containers'>
        <div
            id="menu-item"
            className={activeMenu === 'all-funding' ? 'active' : ''}
            onClick={() => onMenuClick('all-funding')}
        >
            All Funding
        </div>
        <div
            id="menu-item"
            className={activeMenu === 'funding-pending' ? 'active' : ''}
            onClick={() => onMenuClick('funding-pending')}
        >
            Pending
        </div>
    </div>
  )
}

export default Menu
