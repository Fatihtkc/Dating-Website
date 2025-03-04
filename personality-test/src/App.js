import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonalityTest from "./components/PersonalityTest";
import PersonalInformation from "./components/PersonalInformation";
import ProfilePage from "./components/ProfilePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersonalityTest />} />
        <Route path="/personal-info" element={<PersonalInformation />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;