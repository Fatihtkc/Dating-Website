import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/match.css";
import { 
  FaUser, 
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

function MatchScreen() {
  const navigate = useNavigate();

  const [matches, setMatches] = useState([
    { id: 1, name: "Emma", image: "https://randomuser.me/api/portraits/women/1.jpg" },
    { id: 2, name: "Liam", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 3, name: "Olivia", image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 4, name: "Noah", image: "https://randomuser.me/api/portraits/men/2.jpg" },
    { id: 5, name: "Sophia", image: "https://randomuser.me/api/portraits/women/3.jpg" }
  ]);

  const removeMatch = (id) => {
    setMatches(matches.filter(match => match.id !== id));
  };

  const reportUser = (name) => {
    alert(`User ${name} has been reported.`);
  };

  const openChat = (user) => {
    navigate(`/chatScreen?user=${user.name}`); // 🛠️ Sends the selected user
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
   <button className="back-button3" onClick={handleBack}>
        <FaArrowLeft style={{ marginRight: "5px" }} />
   </button>
   <div className="logo">
        <h1 className="logo-text" onClick={handleLogoClick} style={{ cursor: "pointer" }}>SoulM</h1>
   </div>
</header>

    <div className="page-container3">
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
                <button onClick={() => reportUser(match.name)}>🚨 Report</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    <div className="footer-summary2">
    &copy; SoulM.com | Designed by Group 19
 </div>
</>
  );
}

export default MatchScreen;