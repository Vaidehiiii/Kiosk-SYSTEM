// Home.js

import React from 'react';

const Home = () => {
  return (
    <div style={{ margin: '0 20px', display: 'flex' }}>
      <div style={{ flex: 2 }}>
        <br />
        <h1 style={{ margin: '0 0 20px' }}> The Burger Club</h1>
        <p style={{ margin: '0 0 20px' }}>
          Indulge in a culinary journey like no other at The Burger Club! We invite you to savor the delightful symphony of flavors packed into our gourmet burgers. Each bite is a celebration of premium ingredients, meticulous preparation, and a passion for delivering a mouthwatering experience.
        </p>

        <p style={{ margin: '0 0 20px' }}>
          At The Burger Club, we believe in the art of crafting the perfect burger – a blend of juicy patties, fresh vegetables, and savory sauces, all nestled within a soft, golden bun. Whether you're a meat lover, a vegetarian enthusiast, or an adventurous foodie, our diverse menu has something extraordinary for every palate.
        </p>

        <p style={{ margin: '0 0 20px' }}>
          Join us in the celebration of good times, great company, and, of course, the most delicious burgers in town. Experience burger perfection at The Burger Club – where every bite tells a flavorful story!
        </p>
      </div>

      <div style={{ flex: 1, marginLeft: 10 }}>
      <img src={require('../../images/pexels-morena-vw-60177241080p-ezgif.com-video-to-gif-converter.gif')} style={{ width: '90%' , marginTop: '50px'}} alt="Your GIF" />

        {/* <video src={require('../../images/pexels-morena-vw-6017724 (1080p).mp4')} controls style={{ width: '75%' }} /> */}
      </div>
    </div>
  );
};

export default Home;


