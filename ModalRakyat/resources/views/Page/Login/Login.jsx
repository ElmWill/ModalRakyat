import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'
import modalrakyat_logo from '../../assets/modal rakyat_warna2.png'
import axios from 'axios';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => {
        return email.includes('@');
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
        return regex.test(password);
    };

    const handleLogin = async () => {
        if (!validateEmail(email)) {
            setError('Alamat email tidak valid. Harus mengandung "@"');
            return;
        }
        if (!validatePassword(password)) {
            setError('Password minimal 8 karakter, mengandung 1 angka dan 1 karakter spesial.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                email,
                password
            });

            const { token, user } = response.data;

            // Simpan token di localStorage
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            setError('');
            alert('Login berhasil!');
            navigate('/home');

        } catch (error) {
            if (error.response && error.response.status === 401) {
                setError('Email atau password salah.');
            } else {
                setError('Akun tidak ditemukan. Silakan daftar terlebih dahulu.');
            }
        }
    };

    return (
    <div className="login-page">
        <div className='modal-rakyat-logo'>
            <img src={modalrakyat_logo} alt="" />
        </div>
        <div className="form-container">
            <label htmlFor="email">Alamat Email <span className="required">*</span></label>
            <input
                type="email"
                id="email"
                placeholder="jackman@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Kata Sandi <span className="required">*</span></label>
            <div className="password-wrapper">
                <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={showPassword ? 'Password' : '**************'}
                />
                <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                
                >
                {showPassword ? '🙈' : '👁️'}
                </span>
            </div>
            {error && <p className="error-message">{error}</p>}

            <button className="login-buttons" onClick={handleLogin}>
                Masuk
            </button>

            <p className="signup-link">
                Belum punya akun? <Link to="/register">Buat akun</Link>
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