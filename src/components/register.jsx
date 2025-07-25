import React from 'react';
import './Register.css';

function Register() {
  return (
    <div className="form-container">
      <h2>Create Account</h2>
      <input type="text" className="form-input" placeholder="Username" />
      <input type="email" className="form-input" placeholder="Email" />
      <input type="password" className="form-input" placeholder="Password" />
      <button className="form-button">Register</button>
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <a href="/recruiter-login">Already have an account? Log in</a>
      </div>
    </div>
  );
}

export default Register;
