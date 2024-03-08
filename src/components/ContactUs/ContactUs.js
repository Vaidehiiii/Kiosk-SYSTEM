// ContactUs.js

import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal'; // Import Modal component from Material-UI
import './ContactUs.css'; // Import CSS for styling
import Footer from '../Footer/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [modalOpen, setModalOpen] = useState(false); // State to control modal visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    console.log('Form submitted:', formData);
    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    // Open the modal after form submission
    setModalOpen(true);
    // Close the modal after 3 seconds
    setTimeout(() => {
      setModalOpen(false);
    }, 3000);
  };

  const isFormValid = () => {
    return Object.values(formData).every(value => value.trim() !== '');
  };

  return (
    <div>
        <br/>
    <div className="contact-form-container">
        <br/>
      <h2>Contact Us</h2>
      <p>You can email us at theburgerclub.com or Call/SMS/Whatsapp at 9876543210</p>
      <p>Monday - Saturday : 10 AM - 7 PM.</p>
      <p>OR </p>  
      <p> Fill this form and we will call you back.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Phone Number"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <TextField
          label="Message"
          multiline
          rows={3}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button variant="contained" color="primary" type="submit" disabled={!isFormValid()}>
          Contact Us
        </Button>
      </form>
      </div>
      <br/>
      <br/>
      <br/>
      <Footer />

      {/* Modal for Thank You message */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="modal-content">
          <h2>Thank You</h2>
          <p>Your message has been received. We will get back to you shortly.</p>
        </div>
      </Modal>
    </div>
  );
};

export default ContactUs;


