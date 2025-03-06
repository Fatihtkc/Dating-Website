import React, { useState } from "react";
import "../../css/profile.css";

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    birthdate: "1995-06-15",
    email: "john@example.com",
    phone: "123-456-7890",
    password: "currentPassword"
  });

  // Popup için state
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: ""
  });
  const [isNewPasswordValid, setIsNewPasswordValid] = useState(false);

  // Şifre göster/gizle state'leri
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  // Yeni şifre alanındaki değişiklikleri kontrol eden fonksiyon
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...passwordForm, [name]: value };
    setPasswordForm(updatedForm);

    if (name === "newPassword" || name === "confirmNewPassword") {
      const { newPassword, confirmNewPassword } = updatedForm;
      // Basit validasyon: en az 8 karakter, en az bir rakam ve iki alan eşit mi?
      const valid =
        newPassword.length >= 8 &&
        /\d/.test(newPassword) &&
        newPassword === confirmNewPassword;
      setIsNewPasswordValid(valid);
    }
  };

  const handleSavePassword = () => {
    if (isNewPasswordValid) {
      // Şifre güncelleme işlemi burada yapılabilir (örneğin API çağrısı)
      setFormData({ ...formData, password: passwordForm.newPassword });
      // Popup'ı kapat ve formu sıfırla, toggle state'leri de resetle
      setShowPasswordPopup(false);
      setPasswordForm({ oldPassword: "", newPassword: "", confirmNewPassword: "" });
      setIsNewPasswordValid(false);
      setShowNewPassword(false);
      setShowConfirmNewPassword(false);
    }
  };

  const closePopup = () => {
    setShowPasswordPopup(false);
    setShowNewPassword(false);
    setShowConfirmNewPassword(false);
  };

  return (
    <div className="page-container">
      <div className="profile-container">
        <h1 className="profile-title">Your Account</h1>
        <div className="profile-content">
          {/* Sol: Profil Resmi */}
          <div className="profile-picture">
            <img src="/a.png" alt="Profile" />
          </div>
                    {/* Sağ: Kişisel Bilgiler */}
                    <div className="profile-info">
            <div className="info-group">
              <label className="form-label">Full Name</label>
              <input className="profile-input" type="text" name="fullName" value={formData.fullName} readOnly />
            </div>
            <div className="info-group">
              <label className="form-label">Birthdate</label>
              <input className="profile-input" type="date" name="birthdate" value={formData.birthdate} readOnly />
            </div>
            <div className="info-group">
              <label className="form-label">Email</label>
              <input className="profile-input" type="email" name="email" value={formData.email} readOnly />
            </div>
            <div className="info-group">
              <label className="form-label">Phone</label>
              <input className="profile-input" type="text" name="phone" value={formData.phone} readOnly />
            </div>
            <div className="info-group password-group">
              <label className="form-label">Password</label>
              <input className="profile-input" type="password" name="password" value={formData.password} readOnly />
              <button className="change-password-button" onClick={() => setShowPasswordPopup(true)}>
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Şifre Değiştirme Popup'ı */}
      {showPasswordPopup && (
        <div className="password-popup-overlay" onClick={closePopup}>
          <div className="password-popup" onClick={(e) => e.stopPropagation()}>
            <h2>Change Password</h2>
            <div className="popup-form-group">
              <label>Old Password</label>
              <input
                type="password"
                name="oldPassword"
                value={passwordForm.oldPassword}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="popup-form-group">
              <label>New Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showNewPassword ? "text" : "password"}
                  name="newPassword"
                  value={passwordForm.newPassword}
                  onChange={handlePasswordChange}
                />
                <button
                  type="button"
                  className="password-toggle-button"
                  onClick={() => setShowNewPassword((prev) => !prev)}
                >
                  {showNewPassword ? "Hide" : "Show"}
                </button>
              </div>
              {isNewPasswordValid && <span className="valid-indicator">&#10004;</span>}
            </div>
            <div className="popup-form-group">
              <label>Confirm New Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showConfirmNewPassword ? "text" : "password"}
                  name="confirmNewPassword"
                  value={passwordForm.confirmNewPassword}
                  onChange={handlePasswordChange}
                />
                <button
                  type="button"
                  className="password-toggle-button"
                  onClick={() => setShowConfirmNewPassword((prev) => !prev)}
                >
                  {showConfirmNewPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div className="password-requirements">
              <p>
                Password must be at least 8 characters long and include at least one number.
              </p>
            </div>
            <button
              className="save-password-button"
              onClick={handleSavePassword}
              disabled={!isNewPasswordValid}
            >
              Save Password and Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
