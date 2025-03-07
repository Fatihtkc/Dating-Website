import React, { useState } from 'react';
import './css/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const users = [
    { username: 'manager', password: 'manager123', role: 'manager' },
    { username: 'moderator', password: 'mod123', role: 'moderator' },
    { username: 'user', password: 'user123', role: 'user' },
  ];


  const handleSubmit = (event) => {
    event.preventDefault();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Role göre yönlendirme yap
      if (user.role === 'manager') {
        navigate('/Manager');
      } else if (user.role === 'moderator') {
        navigate('/complaints');
      } else if (user.role === 'user') {
        navigate('/giriş');
      }
    } else {
      setErrorMessage('Invalid Username or Password.');
    }
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleLogoClick = () => {
    navigate("/index"); 
  };

  const handleForgotPassword = () => {
    navigate('/forgottenPassword');
  };


  return (
    <div>
      <header>
      <div className="logo">
        <h1 className="logo-text" onClick={handleLogoClick} style={{ cursor: "pointer" }}><span>Soul</span>M</h1>
      </div>
    </header>

      <div className="auth-content">
        <form onSubmit={handleSubmit} className="login-form">
          <h2 className="log-title">Login</h2>

          {errorMessage && <p className="error">{errorMessage}</p>}

          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              className="text-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
            <button type="button" className="forgot-password-btn" onClick={handleForgotPassword}>
              Forgotten Password?
            </button>
          </div>
          <div>
            <button type="submit" className="btn btn-big">Login</button>
          </div>
          <p>Or <a href="#" onClick={handleSignup}>Sign Up</a></p>
        </form>
      </div>
      <div className="footer-summary">
        &copy; SoulM.com | Designed by Group 19
     </div>
    </div>
  );
};

export default Login;
