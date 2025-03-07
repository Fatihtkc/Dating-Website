import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../css/modstyle.css";

const Header = () => {
  const [menuAcik, setMenuAcik] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
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

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/">
          <img src="/logo.png" alt="Uygulama Logosu" className="logo" />
        </Link>
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
            <Link to="/profile" className="dropdown-item">Profilini Gör</Link>
            <button className="dropdown-item logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;