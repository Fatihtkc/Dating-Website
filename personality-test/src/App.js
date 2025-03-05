import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonalityTest from "./components/PersonalityTest";
import PersonalInformation from "./components/PersonalInformation";
import ProfilePage from "./components/ProfilePage";
import ForgottenPassword from "./pages/ForgottenPassword"; 
import EnterCode from "./pages/EnterCode"; 
import ChangePassword from "./pages/ChangePassword"; // ✅ Yeni sayfa eklendi

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersonalityTest />} />
        <Route path="/personal-info" element={<PersonalInformation />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/forgottenpassword" element={<ForgottenPassword />} />
        <Route path="/entercode" element={<EnterCode />} />
        <Route path="/changepassword" element={<ChangePassword />} /> {/* ✅ Yeni sayfa */}
      </Routes>
    </Router>
  );
};

export default App;