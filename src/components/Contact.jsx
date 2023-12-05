import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');

  const validateEmail = (input) => {
    // Regular expression to check for a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    if (inputEmail === '' || validateEmail(inputEmail)) {
      setEmailError('');
    } else {
      setEmailError('Invalid email format');
    }
  };

  const handleNameChange = (e) => {
    const inputName = e.target.value;
    setName(inputName);
    if (inputName === '') {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  };

  const handleEmailBlur = () => {
    if (email === '' || !validateEmail(email)) {
      setEmailError('Invalid email format');
    }
  };

  const handleNameBlur = () => {
    if (name === '') {
      setNameError('Name is required');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <h2>Contact Me</h2>
        <p>Feel free to reach out using the information below:</p>
        <ul className="list-group">
          <li className="list-group-item">Email: armand_araujo@yahoo.com</li>
          <li className="list-group-item">Phone: +1(424)303-1384</li>
        </ul>
      </div>
      <div className="col-md-6">
        <h2>Send Your Info</h2>
        <p>Or leave your info below:</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name"></label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={handleNameChange}
              onBlur={handleNameBlur}
              placeholder="Enter your name" // Placeholder text for name
            />
            {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              placeholder="Enter your email" // Placeholder text for email
            />
            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="message"></label>
            <textarea
              className="form-control"
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message" // Placeholder text for message
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
