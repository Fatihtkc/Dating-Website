import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/match.css";

function MatchScreen() {
  const navigate = useNavigate();

  const [matches, setMatches] = useState([
    { id: 1, name: "Emma", image: "https://via.placeholder.com/100" },
    { id: 2, name: "Liam", image: "https://via.placeholder.com/100" }
  ]);

  const removeMatch = (id) => {
    setMatches(matches.filter(match => match.id !== id));
  };

  const reportUser = (name) => {
    alert(`User ${name} has been reported.`);
  };

  const openChat = (user) => {
    navigate("/messages", { state: { user } }); // Navigate to Messages page with user data
  };

  return (
    <div className="match-container">
      <h2>❤️ Matchings</h2>
      <div className="match-list">
        {matches.length === 0 ? (
          <p>No matches yet.</p>
        ) : (
          matches.map((match) => (
            <div key={match.id} className="match-card">
              <img src={match.image} alt={match.name} />
              <p>{match.name}</p>
              <button onClick={() => openChat(match.name)}>💬 Message</button>
              <button onClick={() => removeMatch(match.id)}>❌ Remove</button>
              <button onClick={() => reportUser(match.name)}>🚨 Report</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MatchScreen;
