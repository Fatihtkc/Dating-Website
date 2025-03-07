import React, { useState, useEffect } from "react";
import "../styles/chat.css";

const userMessages = {
  1: [{ id: 1, text: "Hey! How are you?", sender: "Emma" }],
  2: [{ id: 2, text: "Let’s meet up later!", sender: "Liam" }],
  3: [{ id: 3, text: "Did you see my message?", sender: "Olivia" }],
  4: [{ id: 4, text: "Happy Birthday!", sender: "Noah" }],
  5: [{ id: 5, text: "Let’s go on a trip!", sender: "Sophia" }]
};

function ChatWindow({ selectedChat, setLastMessages }) {
  const [messages, setMessages] = useState([]);
  const [menuOpen, setMenuOpen] = useState(null); // Menü açık/kapalı kontrolü

  useEffect(() => {
    if (selectedChat) {
      setMessages(userMessages[selectedChat.id] || []);
    }
  }, [selectedChat]);

  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    
    const updatedMessages = [...messages, { id: Date.now(), text: newMessage, sender: "You" }];
    setMessages(updatedMessages);
    setLastMessages(prev => ({ ...prev, [selectedChat.id]: newMessage }));
    
    setNewMessage("");
  };

  const deleteMessage = (id) => {
    setMessages(messages.filter(msg => msg.id !== id));
    setMenuOpen(null); // Menü kapat
  };

  const closeMenu = (e) => {
    if (!e.target.closest(".menu-container")) {
      setMenuOpen(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, []);

  if (!selectedChat) return <div className="chat-window empty">Select a chat</div>;

  return (
    <div className="chat-window">
      <div className="chat-header">
        <img src={selectedChat.image} alt={selectedChat.name} className="profile-pic-large" />
        <h2>{selectedChat.name}</h2>
      </div>
      
      <div className="messages">
        {messages.map(msg => (
          <div key={msg.id} className={`message ${msg.sender === "You" ? "mine" : "theirs"}`}>
            <p>{msg.text}</p>
            <div className="menu-container">
              <button 
                className="menu-button" 
                onClick={(e) => { e.stopPropagation(); setMenuOpen(menuOpen === msg.id ? null : msg.id); }}
              >
                ⋮
              </button>
              {menuOpen === msg.id && (
                <div className="dropdown-menu">
                  <button onClick={() => deleteMessage(msg.id)}>🗑️ Delete</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="message-input">
        <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Type a message..." />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatWindow;
