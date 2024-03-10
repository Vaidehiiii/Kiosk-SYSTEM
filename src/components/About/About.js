// About.js   src\images\pexels-katerina-holmes-59074361080p-ezgif.com-speed.gif

import React from 'react';
import './About.css'; // Import CSS for styling
import Footer from '../Footer/Footer';
import burgerImage from '../../images/burger1.jpeg'; // Import your burger image
import burgerImage1 from '../../images/burger2.jpeg'

const About = () => {
  return (
    <div className="about-container">
     
      <h1 style={{textAlign: 'center' }}>Welcome to The Burger Club!</h1>
      <img src={require('../../images/pexels-katerina-holmes-59074361080p-ezgif.com-speed.gif')} style={{ width: '60',  marginTop: '20px', display: 'block', margin: '0 auto'}} alt="Your GIF" />
      <br/>
      <br/>
      <p>
        At The Burger Club, we're not just about serving burgers; we're passionate about creating an unforgettable culinary experience for our guests. Our story began with a vision to redefine the art of burger-making, infusing each bite with a symphony of flavors that tantalize the taste buds and leave you craving for more.
      </p>

      <div className="section">
      <br />
        <h2>Our Philosophy and Values:</h2>
        <div className="content">
          <div className="text">
          <br />
            <p>
            At The Burger Club, we believe in sourcing the finest, freshest ingredients from local farmers and suppliers. We're committed to sustainability and reducing our environmental footprint, which is why we strive to use eco-friendly packaging and minimize food waste wherever possible. Our restaurant is a place where everyone is welcome, and we're dedicated to fostering a warm, inclusive dining environment where guests can feel at home.
            </p>
          </div>
          <div className="image">
            <img src={burgerImage} alt="Burger" />
          </div>
        </div>
      </div>
      <div className="section">
        
        <div className="content">
        
          <div className="image1">
           <img src={burgerImage1} alt="Burger" />
          </div>
          
          <div className="text1">
          <h2>Goals and Objectives</h2>
        <br/>
            <ul>
              <li>Offer a diverse menu of delicious burgers, sides, and beverages.</li>
              <li>Prioritize quality ingredients for freshness and flavor.</li>
              <li>Provide excellent customer service and a welcoming atmosphere.</li>
              <li>Promote sustainability and engage with the local community.</li>
              <li>Innovate with new menu items and promotions.</li>
              <li>Support staff training and development.</li>
              <li>Listen to customer feedback for continuous improvement.</li>
              <li>Establish The Burger Club as a beloved dining destination.</li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default About;

