import React from 'react'
import './Footer.css'
import modalrakyat_logo from '../../assets/Logo.png'
import email_icon from '../../assets/email.png'
import telephone_icon from '../../assets/telephone.png'
import linkedin_icon from '../../assets/linkedin.png'
import instagram_icon from '../../assets/instagram.png'
import facebook_icon from '../../assets/facebook.png'
import twitter_icon from '../../assets/twitter.png'
import copyright_icon from '../../assets/copyright.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-content">
            <div className="footer-brand">
                <div className="brand-logo">
                    <img src="" alt="" />
                    <img src={modalrakyat_logo} alt="Modal Rakyat Logo" className="footer-logo-image" />
                </div>
                <div className="brand-text">
                    <h1>Modal Rakyat</h1>
                    <p>Dari rakyat untuk rakyat<br/>
                    Bersama membangun Indonesia emas</p>
                </div>
            </div>
            <div className="contact">
                <div className="email">
                    <img src={email_icon} alt="email"/>
                    <p>benangcom@gmail.com</p>
                </div>
                <div className="phone">
                    <img src={telephone_icon} alt="telephone"/>
                    <p>+62 888 6668 1688 </p>
                </div>
            </div>
            <div className="social-media">
                <ul className="social-media-list">
                    <li><a href="#"><img src={linkedin_icon} alt="LinkedIn"/></a></li>
                    <li><a href="#"><img src={instagram_icon} alt="Instagram"/></a></li>
                    <li><a href="#"><img src={facebook_icon} alt="Facebook"/></a></li>
                    <li><a href="#"><img src={twitter_icon} alt="Twitter"/></a></li>
                </ul>
            </div>
        </div>
        <div className="footer-line">
            <div className="horizontal-line"></div>
        </div>
        <div className="after-line">
            <div className="tnc">
                <p>Term and Condition</p>
                <p>Privacy Policy</p>
                <p>Code of Conduct</p>
            </div>
            <div className="copyright">
                <img src={copyright_icon} alt="copyright"/>
                <p>ModalRakyat, Inc. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
