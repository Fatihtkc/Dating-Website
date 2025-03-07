import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { FaExclamation } from "react-icons/fa";

const AuthForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[a-zA-Z0-9_]+$/;

    if (!username.trim()) newErrors.username = "Username is required";
    else if (!usernameRegex.test(username)) newErrors.username = "Username can only contain English letters, numbers, and underscores";
    
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(email)) newErrors.email = "Invalid email format";
    
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 8) newErrors.password = "Password must be at least 8 characters";
    
    if (!passwordConf) newErrors.passwordConf = "Please confirm your password";
    else if (passwordConf !== password) newErrors.passwordConf = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log({ username, email, password, passwordConf });
      navigate('/personality-test');
    }
  };

  const handleLogoClick = () => {
    navigate("/index");
  };

  return (
    <div>
      <header>
        <div className="logo">
          <h1 className="logo-text" onClick={handleLogoClick} style={{ cursor: "pointer" }}>SoulM</h1>
        </div>
      </header>
      <div className="auth-content">
        <div className="auth-form-container">
          <form onSubmit={handleSubmit}>
            <h2 className="form-title">Register</h2>
            <div>
              <label>Username</label>
              <input
                type="text"
                name="username"
                autocomplete="off"
                className="text-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && <p className="error"><FaExclamation /> {errors.username}</p>}
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                autocomplete="off"
                className="text-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="error"><FaExclamation /> {errors.email}</p>}
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="text-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="error"><FaExclamation /> {errors.password}</p>}
            </div>
            <div>
              <label>Password Confirmation</label>
              <input
                type="password"
                name="passwordConf"
                className="text-input"
                value={passwordConf}
                onChange={(e) => setPasswordConf(e.target.value)}
              />
              {errors.passwordConf && <p className="error"><FaExclamation /> {errors.passwordConf}</p>}
            </div>
            <div>
              <button type="submit" className="btn btn-big">
                Register
              </button>
            </div>
            <p>
              Or <Link to="/login" className="register-link">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
      <div className="footer-summary">
        &copy; SoulM.com | Designed by Group 19
      </div>
    </div>
  );
};

export default AuthForm;