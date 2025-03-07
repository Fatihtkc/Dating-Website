import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./css/modstyle.css";

const Header = () => {
  const [menuAcik, setMenuAcik] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);

  const handleLogout = () => {
    navigate("/login");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuAcik(false);
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
        <div className="logo">
          <h1 className="logo-text" onClick={handleLogoClick} style={{ cursor: "pointer" }}>SoulM</h1>
        </div>
        </Link>
      </div>
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
