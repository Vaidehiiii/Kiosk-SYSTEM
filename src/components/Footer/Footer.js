import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import icons from react-icons
import './Footer.css';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 style={{  fontFamily: "Apple Chancery", fontSize: "26px"  }}>The Burger Club</h2>
        <br/>
        <p style={{  fontFamily: "Apple Chancery", fontSize: "16px" , marginRight : 30, marginLeft: 25 }}>
          Welcome to The Burger Club, where every bite tells a flavorful story! Dive into our menu of gourmet burgers crafted with premium ingredients and passion. Explore our culinary journey, connect with us on social media, and join the celebration of good food and great company. Experience burger perfection at The Burger Club</p>
        <div className="follow-us">
          <p>Follow us on:</p>
          <br />
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
        <br />
        <div className="footer-links">
        
          <Button color="inherit"  component={Link} to="/about">About</Button>
          <Button color="inherit"  component={Link} to="/feedback-form">Feedback</Button>
          <Button color="inherit"  component={Link} to="/contact-us">Contact Us</Button>
          {/* <a href="../Feedback">Feedback</a> */}
          {/* <a href="/subscribe">Subscribe</a> */}
        </div>
        <br />
        <p>&copy; 2024 The Burger Club.  All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

