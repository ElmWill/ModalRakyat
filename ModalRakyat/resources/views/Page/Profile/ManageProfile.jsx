import React, { useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import defaultProfile from '../../assets/profile-image.png'
import './ManageProfile.css'

const ManageProfile = () => {
    const [image, setImage] = useState(defaultProfile); // gunakan defaultProfile

    // Simulasi data yang sudah ada sebelumnya
    const [name, setName] = useState("John Doe");
    const [email, setEmail] = useState("johndoe@example.com");
    const [phone, setPhone] = useState("08123456789");

    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result); // Set sebagai data URL
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClick = () => {
        fileInputRef.current.click(); // Trigger input file saat div diklik
    };

    const handleSave = () => {
        const confirmed = window.confirm("Apakah Anda yakin ingin menyimpan perubahan?");
        if (confirmed) {
            // Lakukan penyimpanan data di sini
            console.log("Data disimpan:");
            console.log({ name, email, phone, image });
            alert("Profil berhasil disimpan!");
            navigate('/home')
        } else {
            alert("Penyimpanan dibatalkan.");
        }
    };

    return (
        <div className='manage-profile'>
            <h1>Manage Profile</h1>
            <div className="profile-container" onClick={handleClick}>
                <img src={image} alt="Profile" className="profile-image" />
                <div className="edit-overlay">✏️</div>
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                />
            </div>
             <div id="form-container">
                <label>
                    Nama:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Masukkan nama"
                    />
                </label>

                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Masukkan email"
                    />
                </label>

                <label>
                    No HP:
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Masukkan nomor HP"
                    />
                </label>

                <button id="save-button" onClick={handleSave}>Simpan</button>
            </div>
        </div>
    )
}

export default ManageProfile
