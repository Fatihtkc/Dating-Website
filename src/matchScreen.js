import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaBars } from "react-icons/fa";
import "./css/match.css";
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

function MatchScreen(likedProfiles) {
  const navigate = useNavigate();

  const [matches, setMatches] = useState([
    { id: 1, name: "Emma", image: "https://randomuser.me/api/portraits/women/1.jpg" },
    { id: 2, name: "Liam", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 3, name: "Olivia", image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 4, name: "Noah", image: "https://randomuser.me/api/portraits/men/2.jpg" },
    { id: 5, name: "Sophia", image: "https://randomuser.me/api/portraits/women/3.jpg" }
  ]);

  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [reportMessage, setReportMessage] = useState("");
  const [reportReason, setReportReason] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const removeMatch = (id) => {
    setMatches(matches.filter(match => match.id !== id));
  };

  const reportUser = (name) => {
    alert(`User ${name} has been reported.`);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openChat = (user) => {
    navigate(`/chatScreen?user=${user.name}`);
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

  const openReportModal = () => {
    setIsReportModalOpen(true);
  };

  const submitReport = () => {
    if (!reportReason) return;
    setReportMessage(`Your report about "${reportReason}" has been successfully submitted. We will review it and get back to you soon.`);

    setIsReportModalOpen(false);
    setTimeout(() => {
      setReportMessage(""); 
    }, 4000); 
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

    <div className="page-container3">
      <button className="back-button3" onClick={handleBack}>
        <FaArrowLeft style={{ marginRight: "5px" }} />
      </button>
    <h1>Matched Profiles</h1>
      <div className="match2-list">
        {matches.length === 0 ? (
          <p>No matches yet.</p>
        ) : (
          matches.map((match) => (
            <div key={match.id} className="match2-card">
              <img src={match.image} alt={match.name} className="match2-image" />
              <p>{match.name}</p>
              <div className="button2-group">
                <button onClick={() => openChat(match)}>💬 Message</button>
                <button onClick={() => removeMatch(match.id)}>❌ Remove</button>
                <button onClick={openReportModal}>🚨 Report</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>

    {isReportModalOpen && (
        <div className="report-modal">
          <h3>Report User</h3>
          <p>Select a reason for reporting:</p>
          <select value={reportReason} onChange={(e) => setReportReason(e.target.value)}>
            <option value="">-- Select Reason --</option>
            <option value="Fake Photo">Fake Photo</option>
            <option value="Inappropriate Behavior">Inappropriate Behavior</option>
            <option value="Scam / Fraud">Scam / Fraud</option>
            <option value="Harassment">Harassment</option>
            <option value="Other">Other</option>
          </select>
          <button onClick={submitReport} className="report-submit-btn">Submit Report</button>
          <button onClick={() => setIsReportModalOpen(false)} className="close-modal-btn">Cancel</button>
        </div>
      )}

      {reportMessage && (
        <div className="report-notification2">
          {reportMessage}
        </div>
      )}

    <div className="footer-summary2">
    &copy; SoulM.com | Designed by Group 19
 </div>
</>
  );
}

export default MatchScreen;