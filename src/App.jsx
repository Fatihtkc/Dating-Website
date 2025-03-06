import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/style.css";
import Header from "./moderator/Header";
import Approves from "./moderator/Approves/Approves";
import Complaints from "./moderator/Complaints/Complaints";
import ComplaintDetail from "./moderator/Complaints/ComplaintDetail";
import ProfilePage from "./moderator/ProfilePage";

const Profile = ({ id }) => <h1>Profil Sayfası - ID: {id}</h1>;
const LoginPage = () => <h1>Giriş Sayfası</h1>;

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Approves />} />
          <Route path="/approves" element={<Approves />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/complaints/:id" element={<ComplaintDetail />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
