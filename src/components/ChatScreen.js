import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/chat.css";

function ChatScreen() {
  const location = useLocation();
  const matchedUser = location.state?.user || "Unknown"; // Get the selected user from MatchScreen

  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How are you?", sender: matchedUser, isMine: false },
    { id: 2, text: "I'm good! How about you?", sender: "You", isMine: true }
  ]);

  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, { id: Date.now(), text: newMessage, sender: "You", isMine: true }]);
    setNewMessage("");
  };

  return (
    <div className="chat-container">
      <h2>📩 Messages with {matchedUser}</h2>
      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`chat-bubble ${msg.isMine ? "sent" : "received"}`}>
            <p><strong>{msg.sender}:</strong> {msg.text}</p>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input 
          type="text" 
          value={newMessage} 
          onChange={(e) => setNewMessage(e.target.value)} 
          placeholder="Type a message..." 
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatScreen;
