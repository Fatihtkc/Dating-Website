import React, { useState } from "react";
import "./css/chat.css";

function ChatList({ selectedChat, setSelectedChat, lastMessages }) {
  const [menuOpen, setMenuOpen] = useState(null); // Açık olan menüyü takip et
  const [users, setUsers] = useState([
    { id: 1, name: "Emma", image: "https://randomuser.me/api/portraits/women/1.jpg" },
    { id: 2, name: "Liam", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 3, name: "Olivia", image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 4, name: "Noah", image: "https://randomuser.me/api/portraits/men/2.jpg" },
    { id: 5, name: "Sophia", image: "https://randomuser.me/api/portraits/women/3.jpg" }
  ]);

  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [reportMessage, setReportMessage] = useState("");
  const [reportReason, setReportReason] = useState("");

  const reportUser = (user) => {
    alert(`User ${user.name} has been reported.`);
    setMenuOpen(null);
  };

  const removeUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter(user => user.id !== userId));
    setMenuOpen(null);
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
            <p className="last-message">
          {lastMessages[user.id] 
            ? lastMessages[user.id].length > 20 
              ? lastMessages[user.id].substring(0, 20) + "..." 
              : lastMessages[user.id] 
            : "No messages yet."
          }
        </p>
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
          <button onClick={openReportModal}>🚨 Report</button>
          <button onClick={() => removeUser(menuOpen)}>🗑️ Delete</button>
          <button onClick={() => setMenuOpen(null)}>❌ Close</button>
        </div>
      )}
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
    </div>
  );
}

export default ChatList;