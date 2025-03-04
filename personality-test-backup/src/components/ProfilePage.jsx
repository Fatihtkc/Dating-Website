import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Tema renkleri
const themeColor = "#7A52A1";
const backgroundColor = "#EAE6F2";

const ProfilePage = () => {
  const navigate = useNavigate();

  // Kullanıcı bilgilerini saklayan state (Şimdilik statik, sonra DB bağlanacak)
  const [userInfo, setUserInfo] = useState({
    fullName: "John Doe",
    birthdate: "1995-06-15",
    gender: "Male",
    location: "New York",
    lookingFor: "Serious Relationship",
    agePreference: "25-35",
    distancePreference: "50km",
    height: "175 cm",
    weight: "70 kg",
    smoker: "No",
    drinking: "Occasionally",
    hobbies: "Reading, Gaming, Hiking",
    favoriteMusic: "Rock, Jazz",
    weekendPlans: "Watching movies, Going for a walk",
    personalityType: "Introverted", // Personality test sonucu
  });

  // Kullanıcı bilgilerini güncelleme
  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  // Bilgileri kaydetme (Şimdilik console log yapıyor)
  const handleSave = () => {
    console.log("Updated User Info:", userInfo);
    alert("Your information has been updated!"); // Şimdilik simülasyon için
  };

  return (
    <div style={{ ...styles.pageContainer, backgroundColor }}>
      {/* 🔹 Logo */}
      <h1 style={styles.logo}>SoulM</h1>

      <div style={styles.container}>
        <h1 style={{ ...styles.title, color: themeColor }}>Your Account</h1>

        {/* 🔹 Kullanıcı Bilgileri Formu */}
        <div style={styles.infoSection}>
          <label style={styles.label}>Full Name</label>
          <input style={styles.input} type="text" name="fullName" value={userInfo.fullName} onChange={handleChange} />

          <label style={styles.label}>Birthdate</label>
          <input style={styles.input} type="date" name="birthdate" value={userInfo.birthdate} onChange={handleChange} />

          <label style={styles.label}>Gender</label>
          <select style={styles.input} name="gender" value={userInfo.gender} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-binary">Non-binary</option>
          </select>

          <label style={styles.label}>Location</label>
          <input style={styles.input} type="text" name="location" value={userInfo.location} onChange={handleChange} />

          <label style={styles.label}>Personality Type (From Test)</label>
          <input style={styles.input} type="text" name="personalityType" value={userInfo.personalityType} disabled />
        </div>

        {/* 🔹 Butonlar */}
        <div style={styles.buttonContainer}>
          <button onClick={handleSave} style={styles.button}>Save Changes</button>
          <button onClick={() => navigate("/")} style={styles.button}>Go Back to Home</button>
        </div>
      </div>
    </div>
  );
};

// **Styles**
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
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "30px",
  },
  infoSection: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },
  label: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "8px",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  button: {
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

export default ProfilePage;