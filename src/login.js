import React, { useState } from 'react';
import './css/style.css';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const users = [
    { email: 'manager@example.com', password: 'manager123', role: 'manager' },
    { email: 'moderator@example.com', password: 'mod123', role: 'moderator' },
    { email: 'user@example.com', password: 'user123', role: 'user' },
  ];

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Basit e-posta doğrulaması
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      if (user.role === 'manager') {
        navigate('/Manager');
      } else if (user.role === 'moderator') {
        navigate('/complaints');
      } else if (user.role === 'user') {
        navigate('/giriş');
      }
    } else {
      setErrorMessage('Invalid Email or Password.');
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
          <h1 className="logo-text" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
            <span>Soul</span>M
          </h1>
        </div>
      </header>

      <div className="auth-content">
        <form onSubmit={handleSubmit} className="login-form">
          <h2 className="log-title">Login</h2>

          {errorMessage && <p className="error">{errorMessage}</p>}

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="text-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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