import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatScreen from "./components/ChatScreen";
import MatchScreen from "./components/MatchScreen";
import "./styles/chat.css";
import "./styles/match.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/messages" element={<ChatScreen />} />
        <Route path="/matchings" element={<MatchScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
