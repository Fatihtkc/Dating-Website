import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ChatScreen from "./components/ChatScreen";
import MatchScreen from "./components/MatchScreen";
import "./styles/chat.css";
import "./styles/match.css";

function HomePage() {
  return (
    <div className="page-container">
      <h2>🏡 Welcome to SoulM</h2>
      <p>Select a page:</p>
      <div className="button-group">
        <a href="/messages"><button>📩 Messages</button></a>
        <a href="/matchings"><button>❤️ Matchings</button></a>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Fix: Add Home Page */}
        <Route path="/messages" element={<ChatScreen />} />
        <Route path="/matchings" element={<MatchScreen />} />
        <Route path="*" element={<Navigate to="/" />} />  {/* Redirect unknown pages to Home */}
      </Routes>
    </Router>
  );
}

export default App;
