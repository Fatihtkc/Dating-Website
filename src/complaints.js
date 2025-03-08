import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation  } from "react-router-dom";
import "./css/modstyle.css";
import "./css/complaints.css";
import { FaUser, FaBars } from "react-icons/fa";

const complaints = [
  {
    id: 1,
    Complainant: { id: 1, ad: "Ahmet Yılmaz", image: "/a.png" },
    complainedPerson: { id: 2, ad: "Ayşe Demir", image: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    reason: "Sending inappropriate messages",
  },
  {
    id: 2,
    Complainant: { id: 3, ad: "Daniel Miller", image: "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    complainedPerson: { id: 2, ad: "Ayşe Demir", image: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    reason: "Disturbing behavior",
  },
  {
    id: 3,
    Complainant: { id: 1, ad: "Azra Arslan", image: "https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg" },
    complainedPerson: { id: 3, ad: "Kemal Şimşek", image: "https://images.pexels.com/photos/1549004/pexels-photo-1549004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    reason: "Disturbing behavior",
  },
];

const Complaints = () => {
  const navigate = useNavigate();
  const [menuAcik, setMenuAcik] = useState(false);

    const location = useLocation();
    const menuRef = useRef(null);

    const handleLogout = () => {
        navigate("/login");
        
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
    <div className="complaints-container">
    {complaints.map((complaint) => (
      <div
      key={complaint.id}
        className="complaint-box"
        onClick={() => navigate(`/complaints/${complaint.id}`)}
      >
        <div
          className="user-info"
          onClick={(e) => {
            e.stopPropagation(); // Şikayet sayfasına gitmesini engelle
            navigate(`/profile/${complaint.Complainant.id}`);
          }}
        >
          <img
             src={complaint.Complainant.image}
             alt={complaint.Complainant.ad}
            className="profile-pic"
          />
          <span className="username">{complaint.Complainant.ad}</span>
        </div>
        <span className="complaint-text">➜</span>
        <div
          className="user-info"
          onClick={(e) => {
            e.stopPropagation(); // Şikayet sayfasına gitmesini engelle
            navigate(`/profile/${complaint.complainedPerson.id}`);
          }}
        >
          <img
            src={complaint.complainedPerson.image}
            alt={complaint.complainedPerson.ad}
            className="profile-pic"
          />
          <span className="username">{complaint.complainedPerson.ad}</span>
        </div>
        <p className="complaint-reason">{complaint.reason}</p>
      </div>
    ))}
    <div className="footer-summary2">
        &copy; SoulM.com | Designed by Group 19
     </div>
  </div>
  </>
  );
};

export default Complaints;