import React, { useState } from 'react';
import axios from 'axios';
import Logos from '../images/img.png';
import Banner from '../images/banner01.jpg';
import '../images/pop.css';

const FormPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('https://popup-1-3xga.onrender.com/submit', formData);
    if (response.status === 200) {
      alert('Form submitted successfully!');
      onClose();
    } else {
      alert('Failed to submit the form.');
    }
  };

  return (
    <div className="form-popup">
      <div className="form-popup-content">
        <div className="form-popup-cover">
          <button className="form-popup-close-button" onClick={onClose}>×</button>
          <img src={Banner} alt="Cover" className="form-popup-cover-image" />
        </div>
        <div className="form-popup-body">
          <img src={Logos} alt="Logo" className="form-popup-logo" />
          <h2 className="form-popup-title">Connect With us!</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required className="form-popup-input" />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required className="form-popup-input" />
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required className="form-popup-input" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="form-popup-input" />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="How can we help you?" required className="form-popup-textarea" />
            <button type="submit" className="form-popup-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormPopup;