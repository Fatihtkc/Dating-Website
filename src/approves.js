import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation  } from "react-router-dom";
import "./css/approves.css";


const ProfilKarti = ({ id, image, nameSurname, email, phone }) => {
  const navigate = useNavigate();

  // Kartın tamamına tıklayınca profile yönlendirir.
  const handleCardClick = () => {
    navigate(`/profile/${id}`);
  };

  // Onay butonuna tıklanınca
  const handleApprove = (e) => {
    e.stopPropagation(); // Kartın tıklanmasını engelle
    // Onaylama işlemi (API çağrısı veya state güncellemesi) yapılabilir.
    console.log("Approve Profile:", id);
  };

  // Sil butonuna tıklanınca
  const handleDelete = (e) => {
    e.stopPropagation(); // Kartın tıklanmasını engelle
    // Silme işlemi (API çağrısı veya state güncellemesi) yapılabilir.
    console.log("Delete Profile:", id);
  };

  return (
    <div className="profil-karti" onClick={handleCardClick}>
      <img src={image} alt={nameSurname} className="profil-resim" />
      <div className="profil-bilgi">
      <h3>{nameSurname}</h3>
        <p>Email: {email}</p>
        <p>Phone No: {phone}</p>
      </div>
      <div className="profil-buttons">
        <button className="approve-button" onClick={handleApprove}>
        Approve
        </button>
        <button className="delete-button" onClick={handleDelete}>
        Delete
        </button>
      </div>
    </div>
  );
};

const Approves = () => {
  const profiller = [
    { id: 1, image: "/a.png", nameSurname: "Ahmet Yılmaz", email: "ahmet@example.com", phone: "0555 123 45 67" },
    { id: 2, image: "/b.png", nameSurname: "Ayşe Demir", email: "ayse@example.com", phone: "0555 765 43 21" },
    { id: 1, image: "/a.png", nameSurname: "Ali Korkmaz", email: "ali@example.com", phone: "0555 987 65 43" },
    { id: 2, image: "/b.png", nameSurname: "Zeynep Şahin", email: "zeynep@example.com", phone: "0555 654 32 10" },
  ];

  const [menuAcik, setMenuAcik] = useState(false);

const location = useLocation();
const navigate = useNavigate();
const menuRef = useRef(null); // 📌 Menüye referans oluştur

const handleLogout = () => {
    navigate("/login"); // Çıkış yapınca login sayfasına yönlendir
};

// 📌 Sayfanın herhangi bir yerine tıklanınca menüyü kapatma
useEffect(() => {
    const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuAcik(false); // Menü dışına tıklanınca kapat
    }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
    document.removeEventListener("mousedown", handleClickOutside);
    };
}, []);

const handleLogoClick = () => {
  navigate("/index"); 
};

  return (
    <>
    <header className="header">
      <div className="header-left">
      <h1 className="logo-text"  onClick={handleLogoClick} style={{ cursor: "pointer" }}>SoulM</h1>
      </div>
      <nav className="header-nav">
        <Link to="/complaints" className={`nav-item ${location.pathname === "/complaints" ? "active" : ""}`}>
          Complaints
        </Link>
        <Link to="/approves" className={`nav-item ${location.pathname === "/approves" ? "active" : ""}`}>
          Approves
        </Link>
      </nav>
      <div className="header-right" ref={menuRef}>
        <button className="profile-button" onClick={() => setMenuAcik(!menuAcik)}>
          Profile ▼
        </button>
        {menuAcik && (
          <div className="dropdown-menu">
            <Link to="/profilePageForMod" className="dropdown-item">View Profile</Link>
            <button className="dropdown-item logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
    <div className="profil-listesi">
      {profiller.map((profil) => (
        <ProfilKarti key={profil.id} {...profil} />
      ))}
    </div>
    <div className="footer-summary2">
        &copy; SoulM.com | Designed by Group 19
     </div>
    </>
  );
};

export default Approves;