// // Home.js

// import React from 'react';
// import Footer from '../Footer/Footer';

// const Home = () => {
//   return (
//     <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
//       <div style={{ margin: '0 20px', display: 'flex' }}>
//         <div style={{ flex: 2 }}>
//          <br/>
//          <br/>
      
//          <h1 style={{ margin: '0 0 20px', fontFamily: "Apple Chancery", fontSize: "35px"  }}> Welcome to the Burger Club</h1>
         
//        <p style={{ margin: '0 0 20px', fontFamily: "Apple Chancery", fontSize: "22px" }}>
//           Indulge in a culinary journey like no other at The Burger Club! We invite you to savor the delightful symphony of flavors packed into our gourmet burgers. Each bite is a celebration of premium ingredients, meticulous preparation, and a passion for delivering a mouthwatering experience.
//         </p>

//        <p style={{ margin: '0 0 20px', fontFamily: "Apple Chancery", fontSize: "22px" }}>
//            At The Burger Club, we believe in the art of crafting the perfect burger – a blend of juicy patties, fresh vegetables, and savory sauces, all nestled within a soft, golden bun. Whether you're a meat lover, a vegetarian enthusiast, or an adventurous foodie, our diverse menu has something extraordinary for every palate.
//         </p>

//          <p style={{ margin: '0 0 20px', fontFamily: "Apple Chancery", fontSize: "22px" }}>
//           Join us in the celebration of good times, great company, and, of course, the most delicious burgers in town. Experience burger perfection at The Burger Club – where every bite tells a flavorful story!
//          </p>
          
//         </div>
//         <div style={{ flex: 1, marginLeft: 10 }}>
//           <img src={require('../../images/pexels-morena-vw-60177241080p-ezgif.com-video-to-gif-converter.gif')} style={{ width: '100%',  marginTop: '70px' }} alt="Your GIF" />
//           {/* Adjust the width as needed */}
//         </div>
//       </div>
//       <br/>
//       <br/>
//       <br/>
//       <Footer />
//     </div>
//   );
// };

// export default Home;


// Home.js
import React from "react";
import Footer from "../Footer/Footer";
import "./Home.css";
import { Restaurant, Fastfood, Timer } from "@material-ui/icons"; // Example Material-UI Icons


const Home = () => {
  return (
    <div className="home-container">
      <div className="content-container">
        <div className="text-container">
          <br/>
          {/* <p className="slide-in-1">DELICIOUSLY</p>
          <p className="slide-in-2">MOUTHWATERING</p>
          <p className="slide-in-3"> BURGER</p> */}
          <h1 style={{ margin: '0 0 30px', fontSize: "40px"  }}> Welcome to the Burger Club !</h1>
          <p className="slide-in-1">
            Indulge in a culinary journey like no other at The Burger Club! We invite you to savor the delightful symphony of flavors packed into our gourmet burgers. Each bite is a celebration of premium ingredients, meticulous preparation, and a passion for delivering a mouthwatering experience.
          </p>
          <br/>
          {/* <p className="slide-in-2">
            Join us in the celebration of good times, great company, and, of course, the most delicious burgers in town. Experience burger perfection at The Burger Club – where every bite tells a flavorful story!
          </p> */}
          <br/>

          {/* Features with animation */}
          <div className="features-container animated-features">
            <div className="feature">
              <Restaurant className="feature-icon" />
              <p style={{ fontFamily: "Bebas Neue", fontSize: "22px" }}>
                Freshly Served
              </p>
            </div>

            <div className="feature">
              <Fastfood className="feature-icon" /> {/* Icon for Customized Meal */}
              <p style={{ fontFamily: "Bebas Neue", fontSize: "22px" }}>
                Customized Meal
              </p>
            </div>

            <div className="feature">
              <Timer className="feature-icon" />
              <p style={{ fontFamily: "Bebas Neue", fontSize: "22px" }}>
                Quick Service
              </p>
            </div>
          </div>
      
          {/* <p className="slide-in-2">
            At The Burger Club, we believe in the art of crafting the perfect burger – a blend of juicy patties, fresh vegetables, and savory sauces, all nestled within a soft, golden bun. Whether you're a meat lover, a vegetarian enthusiast, or an adventurous foodie, our diverse menu has something extraordinary for every palate.
          </p> */}
          {/* <p className="slide-in-3">
            Join us in the celebration of good times, great company, and, of course, the most delicious burgers in town. Experience burger perfection at The Burger Club – where every bite tells a flavorful story!
          </p> */}
        </div>
        <div className="image-container fade-in-image"> {/* Apply the animation class */}
          <img
            src={require("../../images/pexels-morena-vw-60177241080p-ezgif.com-video-to-gif-converter.gif")}
            alt="Your GIF"
          />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;






