import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './css/style.css';

const EnterCode = () => {
  const [code, setCode] = useState("");
  const [showAlert, setShowAlert] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.length !== 6) {
      alert("Please enter a 6-digit code.");
      return;
    }
    
    console.log("Code submitted:", code);
    
   
    setShowAlert(true);
  };

  const handleOkClick = () => {
    // Kullanıcı "OK" butonuna bastığında Change Password ekranına yönlendir
    setShowAlert(false);
    navigate("/changepassword");
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
    <div className="enter-code-container">

      <div className="enter-code-box">
        <h2 className="enter-code-title">Enter Verification Code</h2>
        <p className="enter-code-text">
          Please enter the 6-digit verification code we sent to your email.
        </p>

        <form className="enter-code-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="code">Verification Code</label>
            <input
              className="form-input"
              type="text"
              id="code"
              autocomplete="off"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              maxLength={6}
              required
            />
          </div>

          <button type="submit" className="primary-button">
            Verify Code
          </button>
        </form>
      </div>

      {/* Uyarı Kutusu */}
      {showAlert && (
        <div className="alert-box">
          <p>Verification successful! Redirecting to password change screen...</p>
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

export default EnterCode;