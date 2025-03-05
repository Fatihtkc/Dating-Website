import React, { useState } from "react";
import "../styles/global.css"; // ✅ Global stiller

const ForgottenPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset request sent for:", email);
  };

  return (
    <div className="forgot-password-container">
      <h1 className="logo">SoulM</h1>

      <div className="forgot-password-box">
        <h2 className="forgot-password-title">Request Password</h2>
        <p className="forgot-password-text">
          Forgot your password? Please enter your mail address and click on
          "Request Password" button. We will send you a mail to create a new password.
        </p>

        <form className="forgot-password-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              className="form-input"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* 🔹 Eksik olan buton metni eklendi */}
          <button type="submit" className="primary-button">
            Request Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgottenPassword;