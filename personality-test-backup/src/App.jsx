import { Routes, Route } from "react-router-dom";
import PersonalityTest from "./components/PersonalityTest";
import PersonalInformation from "./components/PersonalInformation";
import ProfilePage from "./components/ProfilePage"; 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PersonalityTest />} />
      <Route path="/personal-info" element={<PersonalInformation />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default App;