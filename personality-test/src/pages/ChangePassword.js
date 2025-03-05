import React, { useState } from "react";
import "../styles/global.css"; // ✅ Global stiller

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match! Please try again.");
      return;
    }
    console.log("Password changed successfully:", password);
    // ✅ API'ye gönderme işlemi burada yapılabilir
  };

  return (
    <div className="change-password-container">
      <h1 className="logo">SoulM</h1>

      <div className="change-password-box">
        <h2 className="change-password-title">Change Your Password</h2>
        <p className="change-password-text">
          Please enter your new password and confirm it.
        </p>

        <form className="change-password-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="password">New Password</label>
            <input
              className="form-input"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="form-input"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="primary-button">
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;