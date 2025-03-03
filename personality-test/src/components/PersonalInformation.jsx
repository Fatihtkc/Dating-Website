import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Tema renkleri
const themeColor = "#7A52A1"; // Koyu pastel mor
const backgroundColor = "#EAE6F2"; // Lavanta gri

// Form adımları
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

  // Form verisini güncelleme
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Adımlar arası geçiş
  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  // Formu gönderme
  const handleSubmit = () => {
    console.log("Final Form Data:", formData);
    navigate("/dashboard"); // Form tamamlanınca yönlendirme
  };

  return (
    <div style={{ ...styles.pageContainer, backgroundColor }}>
      {/* 🔹 SoulM Logo */}
      <h1 style={styles.logo}>SoulM</h1>

      <div style={styles.container}>
        <h1 style={{ ...styles.title, color: themeColor }}>Tell us more about yourself</h1>

        {/* 🔹 Progress Bar */}
        <div style={styles.progressBarContainer}>
          <div
            style={{
              ...styles.progressBar,
              width: `${((step + 1) / steps.length) * 100}%`,
              backgroundColor: themeColor,
            }}
          ></div>
        </div>

        {/* 🔹 Form Adımları */}
        {step === 0 && (
          <>
            <label style={styles.label}>Full Name</label>
            <input style={styles.input} type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your name" />

            <label style={styles.label}>Birthdate</label>
            <input style={styles.input} type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} />

            <label style={styles.label}>Gender</label>
            <select style={styles.input} name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary">Non-binary</option>
            </select>

            <label style={styles.label}>Location</label>
            <input style={styles.input} type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Enter your city" />
          </>
        )}

        {step === 1 && (
          <>
            <label style={styles.label}>Looking for</label>
            <select style={styles.input} name="lookingFor" value={formData.lookingFor} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Serious Relationship">Serious Relationship</option>
              <option value="Casual Dating">Casual Dating</option>
              <option value="Friendship">Friendship</option>
            </select>

            <label style={styles.label}>Age Preference</label>
            <input style={styles.input} type="text" name="agePreference" value={formData.agePreference} onChange={handleChange} placeholder="E.g. 20-30" />

            <label style={styles.label}>Distance Preference (km)</label>
            <input style={styles.input} type="number" name="distancePreference" value={formData.distancePreference} onChange={handleChange} />
          </>
        )}

        {step === 2 && (
          <>
            <label style={styles.label}>Height</label>
            <input style={styles.input} type="text" name="height" value={formData.height} onChange={handleChange} />

            <label style={styles.label}>Weight</label>
            <input style={styles.input} type="text" name="weight" value={formData.weight} onChange={handleChange} />

            <label style={styles.label}>Do you smoke?</label>
            <select style={styles.input} name="smoker" value={formData.smoker} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <label style={styles.label}>Do you drink?</label>
            <select style={styles.input} name="drinking" value={formData.drinking} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </>
        )}

        {step === 3 && (
          <>
            <label style={styles.label}>Hobbies</label>
            <input style={styles.input} type="text" name="hobbies" value={formData.hobbies} onChange={handleChange} />

            <label style={styles.label}>Favorite Music & Movies</label>
            <input style={styles.input} type="text" name="favoriteMusic" value={formData.favoriteMusic} onChange={handleChange} />

            <label style={styles.label}>Weekend Plans?</label>
            <input style={styles.input} type="text" name="weekendPlans" value={formData.weekendPlans} onChange={handleChange} />
          </>
        )}

        {/* 🔹 Navigation Buttons */}
        <div style={styles.navigationContainer}>
          {step > 0 && <button onClick={prevStep} style={styles.navButton}>◀ Back</button>}
          {step < steps.length - 1 ? (
            <button onClick={nextStep} style={styles.navButton}>Next ▶</button>
          ) : (
            <button onClick={handleSubmit} style={styles.navButton}>✔ Finish & Save</button>
          )}
          {/* 🔹 Profile Page'e yönlendiren buton eklendi */}
          <button onClick={() => navigate("/profile")} style={styles.navButton}>Go to Profile</button>
        </div>
      </div>
    </div>
  );
};

// **Updated Styles**
const styles = {
  pageContainer: {
    fontFamily: "'Poppins', sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor,
    position: "relative",
  },
  logo: {
    position: "absolute",
    top: "20px",
    left: "20px",
    fontSize: "28px",
    fontWeight: "bold",
    background: "linear-gradient(45deg, #FFA500, #7A52A1)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },
  container: {
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "60px",
    borderRadius: "12px",
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
    maxWidth: "600px",
    width: "90%",
    minHeight: "600px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    marginBottom: "50px",
  },
  label: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "10px",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  navButton: {
    padding: "14px 20px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: themeColor,
    color: "#fff",
    border: "none",
    cursor: "pointer",
    margin: "10px",
  },
};

export default PersonalInformation;