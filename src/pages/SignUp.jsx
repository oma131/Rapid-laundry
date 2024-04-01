import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [userpassword, setUserpassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://rapidclean-laundry.onrender.com/api/user/register', {
        fullname,
        email,
        userpassword,
        confirmPassword,
        agreed
      });
      console.log("User signup successful", response.data); // Handle successful response from the backend
      setRegistrationMessage('Signup successful! You can now login.');
    } catch (error) {
      console.error('Error submitting data:', error); // Handle error response from the backend
      setRegistrationMessage('Error signing up. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
              setEmailError(emailRegex.test(e.target.value) ? '' : 'Please enter a valid email address');
            }}
            required
          />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userpassword}
            onChange={(e) => {
              setUserpassword(e.target.value);
              const hasUpperCase = /[A-Z]/.test(e.target.value);
              const hasLowerCase = /[a-z]/.test(e.target.value);
              const hasLength = e.target.value.length >= 8;
              setPasswordError(
                hasUpperCase && hasLowerCase && hasLength ? '' : 'Password must have at least one uppercase, one lowercase, and be at least 8 characters long'
              );
            }}
            required
          />
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setConfirmPasswordError(e.target.value === userpassword ? '' : 'Passwords do not match');
            }}
            required
          />
          {confirmPasswordError && <p style={{ color: 'red' }}>{confirmPasswordError}</p>}
        </div>
        <div>
          <input
            type="checkbox"
            id="agreed"
            name="agreed"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            required
          />
          <label htmlFor="agreed">I agree to the terms and conditions</label>
        </div>
        <button id="signupButton" type="submit">Sign Up</button>
      </form>
      {registrationMessage && <p>{registrationMessage}</p>}
    </div>
  );
};

export default SignUp;
