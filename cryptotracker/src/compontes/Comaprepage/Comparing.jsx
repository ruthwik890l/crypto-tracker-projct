import React, { useState } from 'react';
import './seletecoin.css'; // Ensure this is the correct path to your CSS file

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    companyName: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const { name, email, companyName, message } = formData;
    const newErrors = { name: '', email: '', companyName: '', message: '' };
    const letters = /^[a-zA-Z\s]*$/;
    let isValid = true;

    if (name.trim() === '') {
      newErrors.name = 'Please fill out this field!';
      isValid = false;
    } else if (!letters.test(name)) {
      newErrors.name = 'Please enter only characters!';
      isValid = false;
    }

    if (email.trim() === '') {
      newErrors.email = 'Please fill out this field!';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address!';
      isValid = false;
    }

    if (companyName.trim() === '') {
      newErrors.companyName = 'Please fill out this field!';
      isValid = false;
    }

    if (message.trim() === '') {
      newErrors.message = 'Please fill out this field!';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle successful form submission logic here
      console.log('Form submitted successfully!');
      // Reset form data after successful submission if needed
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      companyName: '',
      message: '',
    });
    setErrors({
      name: '',
      email: '',
      companyName: '',
      message: '',
    });
  };

  return (
    <div className="contain">
      <div className="wrapper">
        <div className="form">
          <h4>GET IN TOUCH</h4>
          <h2 className="form-headline">Send us a message</h2>
          <form id="submit-form" onSubmit={handleSubmit}>
            <p>
              <input
                id="name"
                className="form-input"
                type="text"
                placeholder="Your Name*"
                value={formData.name}
                onChange={handleChange}
              />
              <small className="name-error">{errors.name}</small>
            </p>
            <p>
              <input
                id="email"
                className="form-input"
                type="email"
                placeholder="Your Email*"
                value={formData.email}
                onChange={handleChange}
              />
              <small className="email-error">{errors.email}</small>
            </p>
            <p className="full-width">
              <input
                id="companyName"
                className="form-input"
                type="text"
                placeholder="Company Name*"
                value={formData.companyName}
                onChange={handleChange}
              />
              <small className="companyName-error">{errors.companyName}</small>
            </p>
            <p className="full-width">
              <textarea
                id="message"
                cols="30"
                rows="7"
                placeholder="Your Message*"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <small className="message-error">{errors.message}</small>
            </p>
            <p className="full-width">
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                defaultChecked
              />{' '}
              Yes, I would like to receive communications by call / email about Company's services.
            </p>
            <p className="full-width">
              <input
                type="submit"
                className="submit-btn"
                value="Submit"
              />
              <button
                type="button"
                className="reset-btn"
                onClick={handleReset}
              >
                Reset
              </button>
            </p>
          </form>
        </div>

        <div className="contacts contact-wrapper">
          <ul>
            <li>
            We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, please fill out the form below and we'll get back to you as soon as possible.
            </li>
            <span className="highlight-contact-info">
              <li className="email-info">
                <i className="fa fa-envelope" aria-hidden="true"></i> info@demo.com
              </li>
              <li>
                <i className="fa fa-phone" aria-hidden="true"></i> <span className="highlight-text">+91 11 1111 2900</span>
              </li>
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs; // Corrected export statement
