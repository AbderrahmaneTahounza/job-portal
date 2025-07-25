import React from 'react';
import './Register.css';  

function RecruiterLogin() {
  return (
    <div className="form-container">
      <h2>Log in</h2>
      <input type="text" className="form-input" placeholder="Username" />
      <input type="password" className="form-input" placeholder="Password" />
      <button className="form-button">Log in</button>
      <div className="form-footer">
        <label className="checkbox-label">
          <input type="checkbox" />
          Remember me
        </label>
        <a href="#">Forgot Password?</a>
      </div>
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <a href="/register">Create an Account</a>
      </div>
    </div>
  );
}

export default RecruiterLogin;
