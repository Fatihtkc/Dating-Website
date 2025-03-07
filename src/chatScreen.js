import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ChatList from "./chatList";
import ChatWindow from "./chatWindow";
import "./css/chat.css";
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

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ChatScreen() {
  const query = useQuery();
  const userFromMatch = query.get("user");
  const navigate = useNavigate();
  const [selectedChat, setSelectedChat] = useState(null);
  const [lastMessages, setLastMessages] = useState({
    1: "Hey! How are you?",
    2: "Let’s meet up later!",
    3: "Did you see my message?",
    4: "Happy Birthday!",
    5: "Let’s go on a trip!"
  });

  // List of users with profile pictures
  const users = [
    { id: 1, name: "Emma", image: "https://randomuser.me/api/portraits/women/1.jpg" },
    { id: 2, name: "Liam", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 3, name: "Olivia", image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 4, name: "Noah", image: "https://randomuser.me/api/portraits/men/2.jpg" },
    { id: 5, name: "Sophia", image: "https://randomuser.me/api/portraits/women/3.jpg" }
  ];

  useEffect(() => {
    if (userFromMatch) {
      const newChatId = Date.now(); // Create a unique ID for the new chat

      // Find the user's profile image if available, else use a default one
      const matchedUser = users.find(user => user.name === userFromMatch);
      const userImage = matchedUser ? matchedUser.image : "https://via.placeholder.com/50";

      setSelectedChat({ id: newChatId, name: userFromMatch, image: userImage });

      setLastMessages((prev) => ({
        ...prev,
        [newChatId]: "No messages yet" // 🛠️ Fix: Show "No messages yet" in sidebar
      }));
    }
  }, [userFromMatch]);

  const handleLogoClick = () => {
    navigate("/index"); 
  };

  const handleBack = () => {
    navigate("/giriş"); 
  };

  return (
    <div>
      {/* Top Header Bar */}
      <div className="chat-header3">
        <button className="back-button3" onClick={handleBack}>
                <FaArrowLeft style={{ marginRight: "5px" }} />
              </button>
        <span>📩 Messages</span>
        <h1 className="logo-text" onClick={handleLogoClick} style={{ cursor: "pointer" }}><span>Soul</span>M</h1>
      </div>
  
      {/* Chat Content */}
      <div className="chat-content">
        <ChatList selectedChat={selectedChat} setSelectedChat={setSelectedChat} lastMessages={lastMessages} />
        <ChatWindow selectedChat={selectedChat} setLastMessages={setLastMessages} />
      </div>
    </div>
  );
}

export default ChatScreen;