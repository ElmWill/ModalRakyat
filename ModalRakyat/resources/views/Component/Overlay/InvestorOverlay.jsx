import React from 'react'
import {Link} from 'react-router-dom'
import './InvestorOverlay.css'
import profil from '../../assets/profile-icon.png'
import wallet from '../../assets/wallet-icon.png'
import switchs from '../../assets/switch-icon.png'
import out from '../../assets/out-icon.png'

const InvestorOverlay = ({ onClose }) => {
    return (
    <div className="profile-overlay-backdrop" onClick={onClose}>
        <div className="profile-overlay" onClick={(e) => e.stopPropagation()}>
            <ul id="open-overlay">
                <Link to="/manage-profile" id="overlay-content">
                    <img src={profil} alt="" />
                    <li><button>Profil Saya</button></li>   
                </Link>
                <Link to="/my-wallet" id="overlay-content">
                    <img src={wallet} alt="" />
                    <li><button>Dompet Saya</button></li>   
                </Link>
                <Link to="/" id="overlay-content">
                    <img src={switchs} alt="" />
                    <li><button>Beralih ke UMKM</button></li>   
                </Link>
                <Link to="/" id="overlay-content">
                    <img src={out} alt="" />
                    <li><button>Keluar</button></li>   
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default InvestorOverlay
