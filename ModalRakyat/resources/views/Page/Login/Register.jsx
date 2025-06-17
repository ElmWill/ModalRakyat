import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css'
import modalrakyat_logo from '../../assets/modal rakyat_warna2.png'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agree, setAgree] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validatePassword = (pw) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
        return regex.test(pw);
    }

    const handleRegister = async () => {
        if (!name) {
            setError('Nama lengkap tidak boleh kosong.');
            return;
        }
        if (!email.includes('@')) {
            setError('Alamat email tidak valid. Harus mengandung "@"');
            return;
        }
        if (!validatePassword(password)) {
            setError('Password harus minimal 8 karakter, mengandung huruf kapital, huruf kecil, dan karakter spesial.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Konfirmasi password tidak cocok.');
            return;
        }
        if (!agree) {
            setError('Anda harus menyetujui syarat dan ketentuan.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/api/register', {
                name,
                email,
                password
            });

            alert('Akun berhasil dibuat!');
            navigate('/login');
        } catch (error) {
            if (error.response && error.response.status === 422) {
                const errors = error.response.data.errors;
                const firstError = Object.values(errors)[0][0];
                setError(firstError);
            } else {
                setError('Terjadi kesalahan saat registrasi.');
            }
        }
    };


    return (
        <div className="register-page">
            <div className="modal-rakyat-logo">
                <img src={modalrakyat_logo} alt="Modal Rakyat" />
            </div>

            <div className="form-container">
                <p className="login-link">
                    Sudah punya akun? <Link to="/login">Masuk</Link>
                </p>

                <label>Nama Lengkap <span className="required">*</span></label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama lengkap kamu"
                />

                
                <label>Alamat Email <span className="required">*</span></label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jackman@gmail.com" />

                <label>Password <span className="required">*</span></label>
                <div className="password-wrapper">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={showPassword ? 'Password' : '**************'}
                    />
                    <span onClick={() => setShowPassword(!showPassword)} className="toggle-password">
                        {showPassword ? '🙈' : '👁️'}
                        
                    </span>
                </div>

                    <label>Konfirmasi Password <span className="required">*</span></label>
                <div className="password-wrapper">
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder={showConfirmPassword ? 'Konfirmasi Password' : '**************'}
                    />
                    <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="toggle-password">
                        {showConfirmPassword ? '🙈' : '👁️'}
                    </span>
                </div>

                <div className="checkbox-container">
                <input type="checkbox" checked={agree} onChange={() => setAgree(!agree)} />
                <span>
                    Dengan membuat akun, kamu menyetujui secara <a href="#">Syarat dan Ketentuan</a>
                </span>
                </div>

                {error && <p className="error-message">{error}</p>}

                <button className="register-button" onClick={handleRegister}>
                Buat Akun
                </button>

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

export default Register