import React, { useState } from "react";
import "../styles/chat.css"; 

function ChatScreen() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey! How are you?", sender: "Emma" }
  ]);

  const [reply, setReply] = useState("");

  const deleteMessage = (id) => {
    setMessages(messages.filter(msg => msg.id !== id));
  };

  const reportUser = (sender) => {
    alert(`User ${sender} has been reported.`);
  };

  const answerMessage = () => {
    if (!reply.trim()) return;
    setMessages([...messages, { id: Date.now(), text: reply, sender: "You" }]);
    setReply("");
  };

  return (
    <div className="page-container">
      <h2>📩 Messages</h2>
      <div className="chat-box">
        {messages.map((msg) => (
          <div key={msg.id} className="message">
            <p><strong>{msg.sender}:</strong> {msg.text}</p>
            <div className="message-actions">
              <button onClick={() => deleteMessage(msg.id)}>🗑️ Delete</button>
              <button onClick={() => reportUser(msg.sender)}>🚨 Report</button>
            </div>
          </div>
        ))}
      </div>
      <div className="reply-box">
        <input 
          type="text" 
          value={reply} 
          onChange={(e) => setReply(e.target.value)} 
          placeholder="Type your answer..."
        />
        <button onClick={answerMessage}>💬 Answer</button>
      </div>
    </div>
  );
}

export default ChatScreen;
