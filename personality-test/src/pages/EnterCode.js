import React, { useState } from "react";
import "../styles/global.css"; // ✅ Global stiller

const EnterCode = () => {
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.length !== 6) {
      alert("Please enter a 6-digit code.");
      return;
    }
    console.log("Code submitted:", code);
    // ✅ Burada yönlendirme veya API isteği eklenebilir
  };

  return (
    <div className="enter-code-container">
      <h1 className="logo">SoulM</h1>

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
    </div>
  );
};

export default EnterCode;