import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './css/style.css';

const steps = ["Basic Info", "Preferences", "Lifestyle", "Interests"];

const PersonalInformation = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    birthdate: "",
    gender: "",
    location: "",
    lookingFor: "",
    agePreference: "",
    distancePreference: "",
    height: "",
    weight: "",
    bodyType: "",
    smoker: "",
    drinking: "",
    diet: "",
    hobbies: "",
    favoriteMusic: "",
    weekendPlans: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleSubmit = () => {
    console.log("Final Form Data:", formData);
    navigate("/ProfilePage");
  };

  const handleLogoClick = () => {
    navigate("/index");
  };

  return (
<>
    <header>
        <div className="logo">
          <h1 className="logo-text" onClick={handleLogoClick} style={{ cursor: "pointer" }}>SoulM</h1>
        </div>
      </header>
    <div className="page-container">

      <div className="form-container">
        <h1 className="form-title">Tell us more about yourself</h1>

        {/* 🔹 Progress Bar */}
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${((step + 1) / steps.length) * 100}%` }}></div>
        </div>

        {/* 🔹 Form İçeriği */}
        {step === 0 && (
          <>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input className="form-input" type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label className="form-label">Birthdate</label>
              <input className="form-input" type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label className="form-label">Gender</label>
              <select className="form-input" name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Location</label>
              <input className="form-input" type="text" name="location" value={formData.location} onChange={handleChange} />
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <div className="form-group">
              <label className="form-label">Looking for</label>
              <select className="form-input" name="lookingFor" value={formData.lookingFor} onChange={handleChange}>
                <option value="">Select</option>
                <option value="Serious Relationship">Serious Relationship</option>
                <option value="Casual Dating">Casual Dating</option>
                <option value="Friendship">Friendship</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Age Preference</label>
              <input className="form-input" type="text" name="agePreference" value={formData.agePreference} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label className="form-label">Distance Preference (km)</label>
              <input className="form-input" type="number" name="distancePreference" value={formData.distancePreference} onChange={handleChange} />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="form-group">
              <label className="form-label">Height</label>
              <input className="form-input" type="text" name="height" value={formData.height} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label className="form-label">Weight</label>
              <input className="form-input" type="text" name="weight" value={formData.weight} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label className="form-label">Do you smoke?</label>
              <select className="form-input" name="smoker" value={formData.smoker} onChange={handleChange}>
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Do you drink?</label>
              <select className="form-input" name="drinking" value={formData.drinking} onChange={handleChange}>
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="form-group">
              <label className="form-label">Hobbies</label>
              <input className="form-input" type="text" name="hobbies" value={formData.hobbies} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label className="form-label">Favorite Music & Movies</label>
              <input className="form-input" type="text" name="favoriteMusic" value={formData.favoriteMusic} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label className="form-label">Weekend Plans?</label>
              <input className="form-input" type="text" name="weekendPlans" value={formData.weekendPlans} onChange={handleChange} />
            </div>
          </>
        )}

        {/* 🔹 Navigasyon Butonları */}
        <div className="navigation-container">
          {step > 0 && <button className="nav-button" onClick={prevStep}>◀ Back</button>}
          {step < steps.length - 1 ? (
            <button className="navnext-button" onClick={nextStep}>Next ▶</button>
          ) : (
            <button className="primary-button" onClick={handleSubmit}>✔ Finish & Save</button>
          )}
        </div>
      </div>
      <div className="footer-summary">
        &copy; SoulM.com | Designed by Group 19
     </div>
    </div>
    </>
  );
};

export default PersonalInformation;