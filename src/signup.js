import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const AuthForm = ({ isRegister }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemleri burada yapılacak
    console.log({ username, email, password, passwordConf });
  };

  return (
    <div>
      <header>
      <div className="logo">
        <h1 className="logo-text"><span>Soul</span>M</h1>
      </div>
    </header>
    <div className="auth-content">
    <div className="auth-form-container">
      <form onSubmit={handleSubmit}>
        <h2 className="form-title">{isRegister ? 'Register' : 'Login'}</h2>
        {isRegister && (
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
        )}
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
        </div>
        {isRegister && (
          <div>
            <label>Password Confirmation</label>
            <input
              type="password"
              name="passwordConf"
              className="text-input"
              value={passwordConf}
              onChange={(e) => setPasswordConf(e.target.value)}
            />
          </div>
        )}
        <div>
          <button type="submit" className="btn btn-big">
            {isRegister ? 'Register' : 'Login'}
          </button>
        </div>
        <p>
          {isRegister ? 'Or ' : 'Don\'t have an account? '}
          <Link to={isRegister ? '/login' : '/register'}>
            {isRegister ? 'Sign In' : 'Sign Up'}
          </Link>
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