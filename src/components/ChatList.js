import React, { useState } from "react";
import "../styles/chat.css";

function ChatList({ selectedChat, setSelectedChat, lastMessages }) {
  const [menuOpen, setMenuOpen] = useState(null); // Açık olan menüyü takip et
  const [users, setUsers] = useState([
    { id: 1, name: "Emma", image: "https://randomuser.me/api/portraits/women/1.jpg" },
    { id: 2, name: "Liam", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 3, name: "Olivia", image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 4, name: "Noah", image: "https://randomuser.me/api/portraits/men/2.jpg" },
    { id: 5, name: "Sophia", image: "https://randomuser.me/api/portraits/women/3.jpg" }
  ]);

  const reportUser = (user) => {
    alert(`User ${user.name} has been reported.`);
    setMenuOpen(null);
  };

  const removeUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter(user => user.id !== userId));
    setMenuOpen(null);
  };

  return (
    <div className="chat-list">
      {users.map(user => (
        <div 
          key={user.id} 
          className={`chat-user ${selectedChat?.id === user.id ? "active" : ""}`}
          onClick={() => setSelectedChat(user)}
        >
          <img src={user.image} alt={user.name} className="profile-pic" />
          <div>
            <p><strong>{user.name}</strong></p>
            <p className="last-message">{lastMessages[user.id] || "No messages yet."}</p>
          </div>

          {/* Üç Nokta Butonu */}
          <div className="menu-container">
            <button 
              className="menu-button" 
              onClick={(e) => { e.stopPropagation(); setMenuOpen(user.id); }}
            >
              ⋮
            </button>
          </div>
        </div>
      ))}

      {/* Sidebar'daki Üç Nokta Menü (Ortada Açılacak) */}
      {menuOpen !== null && (
        <div className="sidebar-menu">
          <button onClick={() => reportUser(users.find(u => u.id === menuOpen))}>🚨 Report</button>
          <button onClick={() => removeUser(menuOpen)}>🗑️ Delete</button>
          <button onClick={() => setMenuOpen(null)}>❌ Close</button>
        </div>
      )}
    </div>
  );
}

export default ChatList;
