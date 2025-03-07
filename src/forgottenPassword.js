import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './css/style.css';

const ForgottenPassword = () => {
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false); // Uyarıyı kontrol eden state
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset request sent for:", email);

    setShowAlert(true);
  };

  const handleOkClick = () => {
    setShowAlert(false);
    navigate("/entercode");
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

    <div className="forgot-password-container">
      <div className="forgot-logo"> 
        <h2 className="forgot-logo-text">SoulM</h2>
      </div>

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

          <button type="submit" className="primary-button">
            Request Password
          </button>
        </form>
      </div>

      {/*  Uyarı Kutusu */}
      {showAlert && (
        <div className="alert-box">
          <p>A reset code has been sent to your email address.</p>
          <button className="ok-button" onClick={handleOkClick}>OK</button>
        </div>
      )}
    </div>
    <div className="footer-summary2">
        &copy; SoulM.com | Designed by Group 19
     </div>
    </>
  );
};

export default ForgottenPassword;