import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaUser, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {  
  FaInfoCircle, 
  FaAlignLeft, 
  FaVenusMars, 
  FaHeart, 
  FaMapMarkerAlt, 
  FaSmokingBan, 
  FaBeer, 
  FaCheck,
  FaArrowLeft
} from "react-icons/fa";

const LikesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [likedProfiles, setLikedProfiles] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (location.state?.likedProfiles) {
      setLikedProfiles(location.state.likedProfiles);
    }
  }, [location.state]); // location.state değiştiğinde çalışır

  const removeProfile = (id) => {
    const updatedProfiles = likedProfiles.filter((profile) => profile.id !== id);
    setLikedProfiles(updatedProfiles);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    console.log('Çıkış..');
    navigate('/login'); 
  };

  const handleEditProfile = () => {
    navigate('/ProfilePage'); 
  };

  
  const goToLikesPage = () => {
    navigate('/likes', { state: { likedProfiles } }); 
  };

  const goToMatchScreen = () => {
    navigate('/matchScreen'); 
  };

  const goToMessagesScreen = () => {
    navigate('/chatScreen'); 
  };

  const handleLogoClick = () => {
    navigate("/index"); 
  };

  const handleBack = () => {
    navigate("/giriş"); 
  };

  return (
    <>
      <header>
      <div className="logo">
        <h1 className="logo-text" onClick={handleLogoClick} style={{ cursor: "pointer" }}>SoulM</h1>
      </div>
      <div className="header-divider"></div>
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars />
      </div>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#" onClick={goToMatchScreen}>Matches</a></li>
        <li><a href="#" onClick={goToMessagesScreen}>Messages</a></li>
        <li><a href="#" onClick={goToLikesPage} >Likes</a></li>
      </ul>
      <div className="profile-container">
        <ul className="profile">
          <li className="profile-item">
            <a href="#"> <FaUser /> Profile</a>
            <ul className="dropdown">
              <li><a href="#" onClick={handleLogout}>Logout</a></li>
              <li><a href="#" onClick={handleEditProfile}>Edit Profile</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
      <div className="likes-page">
        <button className="back-button3" onClick={handleBack}>
                <FaArrowLeft style={{ marginRight: "5px" }} />
              </button>
        <h1>Liked Profiles</h1>
        {likedProfiles.length > 0 ? (
          <ul className="profile-list">
            {likedProfiles.map((profile) => (
              <li className="profile-item2" key={profile.id}>
                <img src={profile.imgs[0]} alt="Profile" />
                <div>
                  <h2>{profile.name}, {profile.age} </h2>
                  <p>{profile.shorterbio}</p>
                  <button className="remove-button" onClick={() => removeProfile(profile.id)}>
                    <span>Remove Profile</span> 
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-liked-profiles">No liked profiles yet.</p>
        )}
      </div>
      <div className="footer-summary2">
        &copy; SoulM.com | Designed by Group 19
      </div>
    </>
  );
};

export default LikesPage;