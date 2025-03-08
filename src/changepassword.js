import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaExclamation } from "react-icons/fa";
import './css/style.css';

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  let newErrors = {};

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hataları sıfırla
    setErrors({});

    // Şifre doğrulama
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match!";
    }
    
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Hatalar varsa formu gönderme
    }

    console.log("Password changed successfully:", password);
    // API'ye gönderme işlemi burada yapılabilir

    navigate("/giriş", { state: { passwordChanged: true } });

  };

  const handleLogoClick = () => {
    navigate("/index");
  };

  const handleChangePass = () => {
    navigate("/login");
  };

  return (
    <>
      <header>
        <div className="logo">
          <h1 className="logo-text" onClick={handleLogoClick} style={{ cursor: "pointer" }}>SoulM</h1>
        </div>
      </header>
      <div className="change-password-container">
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
              {errors.password && <p className="error-message"><FaExclamation /> {errors.password}</p>}
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
              {errors.confirmPassword && <p className="error-message"><FaExclamation /> {errors.confirmPassword}</p>}
            </div>

            <button type="submit" className="primary-button" onClick={handleChangePass}>
              Change Password
            </button>
          </form>
        </div>
      </div>
      <div className="footer-summary2">
        &copy; SoulM.com | Designed by Group 19
      </div>
    </>
  );
};

export default ChangePassword;
