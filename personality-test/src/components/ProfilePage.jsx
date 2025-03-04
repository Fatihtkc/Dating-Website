import React, { useState } from "react";
import "../styles/global.css"; 

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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="page-container">
            <h1 className="logo">SoulM</h1>
            <div className="profile-container">
                <h1 className="profile-title">Your Account</h1>

                {/* Profil Bilgileri */}
                <div className="profile-group">
                    <div className="form-group full-width">
                        <label className="form-label">Full Name</label>
                        <input className="profile-input" type="text" name="fullName" value={formData.fullName} readOnly />
                    </div>

                    <div className="form-group full-width">
                        <label className="form-label">Birthdate</label>
                        <input className="profile-input" type="date" name="birthdate" value={formData.birthdate} readOnly />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Gender</label>
                        <select className="profile-input" name="gender" value={formData.gender} onChange={handleChange}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Non-binary">Non-binary</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Location</label>
                        <input className="profile-input" type="text" name="location" value={formData.location} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Looking For</label>
                        <select className="profile-input" name="lookingFor" value={formData.lookingFor} onChange={handleChange}>
                            <option value="Serious Relationship">Serious Relationship</option>
                            <option value="Casual Dating">Casual Dating</option>
                            <option value="Friendship">Friendship</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Age Preference</label>
                        <input className="profile-input" type="text" name="agePreference" value={formData.agePreference} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Distance Preference (km)</label>
                        <input className="profile-input" type="text" name="distancePreference" value={formData.distancePreference} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Height</label>
                        <input className="profile-input" type="text" name="height" value={formData.height} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Weight</label>
                        <input className="profile-input" type="text" name="weight" value={formData.weight} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Body Type</label>
                        <input className="profile-input" type="text" name="bodyType" value={formData.bodyType} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Do you smoke?</label>
                        <select className="profile-input" name="smoker" value={formData.smoker} onChange={handleChange}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Do you drink?</label>
                        <select className="profile-input" name="drinking" value={formData.drinking} onChange={handleChange}>
                            <option value="Occasionally">Occasionally</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </div>

                {/* Butonlar */}
                <div className="profile-buttons">
                    <button className="profile-button">Save Changes</button>
                    <button className="profile-button">Go Back to Home</button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;