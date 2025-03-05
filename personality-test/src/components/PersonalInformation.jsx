import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css"; 

const steps = ["Basic Info", "Preferences", "Lifestyle", "Interests"];

const PersonalInformation = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    birthdate: "",
    gender: "",
    location: "",
    lookingFor: "",
    agePreference: "18-25",
    distancePreference: "0-10 km",
    height: 170,
    weight: 70,
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
    navigate("/profile");
  };

  return (
    <div className="page-container">
      <h1 className="logo">SoulM</h1>

      <div className="form-container">
        <h1 className="form-title">Tell us more about yourself</h1>

        {/* Progress Bar */}
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${((step + 1) / steps.length) * 100}%` }}></div>
        </div>

        {/* Form İçeriği */}
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
              <select className="form-input" name="agePreference" value={formData.agePreference} onChange={handleChange}>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36-45">36-45</option>
                <option value="46+">46+</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Distance Preference</label>
              <select className="form-input" name="distancePreference" value={formData.distancePreference} onChange={handleChange}>
                <option value="0-10 km">0-10 km</option>
                <option value="11-25 km">11-25 km</option>
                <option value="26-50 km">26-50 km</option>
                <option value="51-75 km">51-75 km</option>
                <option value="76-100 km">76-100 km</option>
                <option value="101-125 km">101-125 km</option>
                <option value="126-150 km">126-150 km</option>
                <option value="151-175 km">151-175 km</option>
                <option value="176-200 km">176-200 km</option>
              </select>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="form-group">
              <label className="form-label">Height: {formData.height} cm</label>
              <input type="range" min="140" max="210" name="height" value={formData.height} onChange={handleChange} className="slider" />
            </div>

            <div className="form-group">
              <label className="form-label">Weight: {formData.weight} kg</label>
              <input type="range" min="40" max="150" name="weight" value={formData.weight} onChange={handleChange} className="slider" />
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

        {/* Navigasyon Butonları */}
        <div className="navigation-container">
          {step > 0 && <button className="nav-button" onClick={prevStep}>◀ Back</button>}
          {step < steps.length - 1 ? (
            <button className="nav-button next-button" onClick={nextStep}>Next ▶</button>
          ) : (
            <button className="primary-button" onClick={handleSubmit}>✔ Finish & Save</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;