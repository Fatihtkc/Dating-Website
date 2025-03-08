import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import "./css/complaintDetail.css";
import { FaUser, FaBars } from "react-icons/fa";

const ComplaintDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [menuAcik, setMenuAcik] = useState(false);

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

  const complaint = {
    id: id,
    reason:
    "This user has been behaving inappropriately and sending spam messages. Explanation details can be found here. (Detailed explanation text...)",
    images: ["/a.png", "/b.png", "/a.png"],
    owner: {
      id: 2,
      name: "Ahmet Yılmaz",
      email: "ahmet@example.com",
      phone: "0555 123 45 67",
      image: "/a.png",
    },
    target: {
      id: 1,
      name: "Ayşe Demir",
      email: "ayse@example.com",
      phone: "0555 765 43 21",
      image: "/b.png",
    },
  };

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prev) => (prev - 1 + complaint.images.length) % complaint.images.length
    );
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % complaint.images.length);
  };

  const handleDeleteComplaint = () => {
    navigate("/complaints");
  };

  const handleBanUser = (e) => {
    e.stopPropagation();
    navigate("/complaints");
  };

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
          <div className="profile-container">
                  <ul className="profile">
                    <li className="profile-item">
                      <a href="#"> <FaUser /> Profile</a>
                      <ul className="dropdown">
                        <li><a href="#" onClick={handleLogout}>Logout</a></li>
                        <li><a href="/profilePageForMod" className="dropdown-item">View Profile</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
        </header>
    <div className="complaint-detail-container">
      {/* Sol Bölüm: Bilgiler */}
      <div className="complaint-detail-sidebar">
        <div
          className="complaint-owner-box clickable"
          onClick={() => navigate(`/profile/${complaint.owner.id}`)}
        >
           <h3>Complainant</h3>
          <div className="owner-info">
            <img
              src={complaint.owner.image}
              alt={complaint.owner.name}
              className="profile-pic-square"
            />
            <p>
            <span className="user-info-label">Name Surname:</span>{" "}
              <span className="user-info-value">{complaint.owner.name}</span>
            </p>
            <p>
              <span className="user-info-label">Email:</span>{" "}
              <span className="user-info-value">{complaint.owner.email}</span>
            </p>
            <p>
            <span className="user-info-label">Phone:</span>{" "}
              <span className="user-info-value">{complaint.owner.phone}</span>
            </p>
          </div>
        </div>
        <div
          className="complaint-target-box clickable"
          onClick={() => navigate(`/profile/${complaint.target.id}`)}
        >
           <h3>Person complained about</h3>
          <div className="target-info">
            <img
              src={complaint.target.image}
              alt={complaint.target.name}
              className="profile-pic-square"
            />
            <p>
            <span className="user-info-label">Name Surname:</span>{" "}
              <span className="user-info-value">{complaint.target.name}</span>
            </p>
            <p>
              <span className="user-info-label">Email:</span>{" "}
              <span className="user-info-value">{complaint.target.email}</span>
            </p>
            <p>
            <span className="user-info-label">Phone:</span>{" "}
              <span className="user-info-value">{complaint.target.phone}</span>
            </p>
            <button className="ban-user-button" onClick={handleBanUser}>
            Ban User
            </button>
          </div>
        </div>
      </div>

      {/* Sağ Bölüm: Şikayet Detayları */}
      <div className="complaint-detail-main">
        <div className="complaint-content-box">
          <p className="complaint-reason-text">{complaint.reason}</p>
          <div className="complaint-images">
            {complaint.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Complaint ${index}`}
                className="complaint-image"
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>
          <button
            className="delete-complaint-button"
            onClick={handleDeleteComplaint}
          >
            Delete Complaint
          </button>
        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              &times;
            </button>
            <img
              src={complaint.images[currentImageIndex]}
              alt={`Complaint ${currentImageIndex}`}
              className="lightbox-image"
            />
            <button className="lightbox-prev" onClick={showPrevImage}>
              &#8249;
            </button>
            <button className="lightbox-next" onClick={showNextImage}>
              &#8250;
            </button>
          </div>
        </div>
      )}
      <div className="footer-summary2">
        &copy; SoulM.com | Designed by Group 19
     </div>
    </div>
    </>
  );
};

export default ComplaintDetail;