import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/style.css";

const ProfilePage = () => {
    const [formData, setFormData] = useState({
        fullName: "John Doe",
        birthdate: "1995-06-15",
        gender: "Male",
        location: "New York",
        lookingFor: "Serious Relationship",
        agePreference: "25-35",
        distancePreference: "50",
        height: "180 cm",
        weight: "75 kg",
        bodyType: "Athletic",
        smoker: "No",
        drinking: "Occasionally",
        diet: "Vegan"
    });
    
    const [notification, setNotification] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const { fullName, birthdate, gender, location, lookingFor, agePreference, distancePreference, height, weight, bodyType, smoker, drinking, diet } = formData;
        
        if (!fullName.trim()) return "Full Name cannot be empty";
        
        const birthDateObj = new Date(birthdate);
        const today = new Date();
        const age = today.getFullYear() - birthDateObj.getFullYear();
        if (isNaN(birthDateObj) || age < 18) return "You must be at least 18 years old";
        
        if (!gender.trim()) return "Gender must be selected";
        if (!location.trim()) return "Location cannot be empty";
        if (!lookingFor.trim()) return "Looking For field must be selected";
        if (!/^\d{2}-\d{2}$/.test(agePreference)) return "Age Preference must be in 'min-max' format";
        if (isNaN(distancePreference) || distancePreference <= 0) return "Distance Preference must be a positive number";
        if (!/^\d+ cm$/.test(height)) return "Height must be in 'number cm' format";
        if (!/^\d+ kg$/.test(weight)) return "Weight must be in 'number kg' format";
        if (!bodyType.trim()) return "Body Type cannot be empty";
        if (!smoker.trim()) return "Smoking preference must be selected";
        if (!drinking.trim()) return "Drinking preference must be selected";
        if (!diet.trim()) return "Diet field cannot be empty";
        
        return "";
    };

    const handleSave = () => {
        const error = validateForm();
        if (error) {
            setNotification(error);
            setTimeout(() => setNotification(""), 3000); 
            return;
        }
        navigate("/giriş");
    };

    const handleLogoClick = () => {
        navigate("/index");
    };

    const handleGoHome = () => {
        navigate('/giriş'); 
      };

    return (
        <>
    <header>
        <div className="logo">
          <h1 className="logo-text" onClick={handleLogoClick} style={{ cursor: "pointer" }}>SoulM</h1>
        </div>
      </header>
        <div className="page-container">
            <div className="profile-container2">
                <h1 className="profile-title2">Your Account</h1>
                {notification && <div className="notification">{notification}</div>}
                {/* Profil Bilgileri */}
                <div className="profile-group2">
                    <div className="form-group2 full-width">
                        <label className="form-label2">Full Name</label>
                        <input className="profile-input2" type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
                    </div>

                    <div className="form-group2 full-width">
                        <label className="form-label2">Birthdate</label>
                        <input className="profile-input2" type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} />
                    </div>

                    <div className="form-group2">
                        <label className="form-label2">Gender</label>
                        <select className="profile-input2" name="gender" value={formData.gender} onChange={handleChange}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Non-binary">Non-binary</option>
                        </select>
                    </div>

                    <div className="form-group2">
                        <label className="form-label2">Location</label>
                        <input className="profile-input2" type="text" name="location" value={formData.location} onChange={handleChange} />
                    </div>

                    <div className="form-group2">
                        <label className="form-label2">Looking For</label>
                        <select className="profile-input2" name="lookingFor" value={formData.lookingFor} onChange={handleChange}>
                            <option value="Serious Relationship">Serious Relationship</option>
                            <option value="Casual Dating">Casual Dating</option>
                            <option value="Friendship">Friendship</option>
                        </select>
                    </div>

                    <div className="form-group2">
                        <label className="form-label2">Age Preference</label>
                        <input className="profile-input2" type="text" name="agePreference" value={formData.agePreference} onChange={handleChange} />
                    </div>

                    <div className="form-group2">
                        <label className="form-label2">Distance Preference (km)</label>
                        <input className="profile-input2" type="text" name="distancePreference" value={formData.distancePreference} onChange={handleChange} />
                    </div>

                    <div className="form-group2">
                        <label className="form-label2">Height</label>
                        <input className="profile-input2" type="text" name="height" value={formData.height} onChange={handleChange} />
                    </div>

                    <div className="form-group2">
                        <label className="form-label2">Weight</label>
                        <input className="profile-input2" type="text" name="weight" value={formData.weight} onChange={handleChange} />
                    </div>

                    <div className="form-group2">
                        <label className="form-label2">Body Type</label>
                        <input className="profile-input2" type="text" name="bodyType" value={formData.bodyType} onChange={handleChange} />
                    </div>

                    <div className="form-group2">
                        <label className="form-label2">Do you smoke?</label>
                        <select className="profile-input2" name="smoker" value={formData.smoker} onChange={handleChange}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    <div className="form-group2">
                        <label className="form-label2">Do you drink?</label>
                        <select className="profile-input2" name="drinking" value={formData.drinking} onChange={handleChange}>
                            <option value="Occasionally">Occasionally</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </div>

                {/* Butonlar */}
                <div className="profile-buttons">
                    <button className="profile-button" onClick={handleSave}>Save Changes</button>
                    <button className="profile-button" onClick={handleGoHome}>Go Back to Home</button>
                </div>
            </div>
            <div className="footer-summary">
        &copy; SoulM.com | Designed by Group 19
     </div>
        </div>
        </>
    );
};

export default ProfilePage;