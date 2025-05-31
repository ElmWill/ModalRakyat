import React, { useState } from 'react'
import './Login.css'
import modalrakyat_logo from '../../assets/modal rakyat_warna2.png'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
    <div className="login-page">
        <div className='modal-rakyat-logo'>
            <img src={modalrakyat_logo} alt="" />
        </div>
        <div className="form-container">
            <label htmlFor="email">Alamat Email <span className="required">*</span></label>
            <input type="email" id="email" placeholder="jackman@gmail.com" />

            <label htmlFor="password">Kata Sandi <span className="required">*</span></label>
            <div className="password-wrapper">
                <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="**************"
                />
                <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                >
                {showPassword ? '🙈' : '👁️'}
                </span>
            </div>

            <button className="login-buttons">Masuk</button>

            <p className="signup-link">
            Belum punya akun? <a href="/register">Buat akun</a>
            </p>

            <div className="alt-buttons">
                <button className="google-btn">
                    <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />
                    Daftar dengan Google
                </button>
                <button className="apple-btn">
                    <img src="https://img.icons8.com/ios-filled/20/000000/mac-os.png" alt="Apple" />
                    Daftar dengan Apple ID
                </button>
            </div>        
        </div>
    </div>
    
    )
}

export default Login
