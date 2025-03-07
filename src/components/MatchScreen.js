import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/match.css";

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
    navigate(`/messages?user=${user.name}`); // 🛠️ Sends the selected user
  };

  return (
    <div className="page-container">
      <h2>❤️ Matchings</h2>
      <div className="match-list">
        {matches.length === 0 ? (
          <p>No matches yet.</p>
        ) : (
          matches.map((match) => (
            <div key={match.id} className="match-card">
              <img src={match.image} alt={match.name} className="match-image" />
              <p>{match.name}</p>
              <div className="button-group">
                <button onClick={() => openChat(match)}>💬 Message</button>
                <button onClick={() => removeMatch(match.id)}>❌ Remove</button>
                <button onClick={() => reportUser(match.name)}>🚨 Report</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MatchScreen;