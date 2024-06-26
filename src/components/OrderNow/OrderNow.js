// // OrderNow.js

// import React from 'react';
// import { Link } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
// import Footer from '../Footer/Footer';

// const OrderNow = () => {
//   const styles = {
//     orderNowContainer: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       padding: '20px',
//       margin: '0 auto',
//       maxWidth: '1200px',
//     },

//     imageContainer: {
//       flex: 1,
//       marginRight: '20px',
//     },

//     image: {
//       width: '100%',
//       height: 'auto',
//       width: "650px",
//       heignt: "650px",
//     },

//     contentContainer: {
//       flex: 1,
//       fontSize: 20,
//     },

//     orderButton: {
//       backgroundColor: '#ff8c00', /* Orange color, you can change it */
//       color: '#fff',
//       padding: '10px 20px',
//       fontSize: '16px',
//       border: 'none',
//       cursor: 'pointer',
//       borderRadius: '5px',
//     },
//   };

//   return (
//     <div>
//     <div style={styles.orderNowContainer}>
//       <div style={styles.imageContainer}>
//         <br/>
//         <img
//           src="https://insanelygoodrecipes.com/wp-content/uploads/2020/05/Burger-with-fries-1024x536.png"
//           alt="Burger"
//           style={styles.image}
//         />
//       </div>
//       <div style={styles.contentContainer}>
//       <br/>
//         <h1 style={{ fontFamily: "Apple Chancery" }}>Hungry?</h1>
//         <br />
//         <p>Explore our delicious menu and place your order now!</p>
//         <br />
//         <Link to="/menu">
//           <button style={styles.orderButton}>Order Now</button>
//         </Link>
//       </div>
//         </div>
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//       <Footer/>
//     </div>
//   );
// };

// export default OrderNow;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import Footer from '../Footer/Footer';
// import './OrderNow.css'; // Ensure this import path is correct

// const OrderNow = () => {
//   const styles = {
//     orderNowContainer: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       padding: '20px',
//       margin: '0 auto',
//       maxWidth: '1200px',
//     },
//     imageContainer: {
//       flex: 1,
//       marginRight: '20px',
//       animation: 'fadeIn 1s ease-in-out', // Animation for the image
//     },
//     image: {
//       width: '100%',
//       height: 'auto',
//     },
//     contentContainer: {
//       flex: 1,
//       fontSize: 20,
//       animation: 'slideIn 1s ease-in-out 1s', // Animation with delay
//     },
//     orderButton: {
//       backgroundColor: '#ff8c00', /* Orange color */
//       color: '#fff',
//       padding: '10px 20px',
//       fontSize: '16px',
//       border: 'none',
//       cursor: 'pointer',
//       borderRadius: '5px',
//       animation: 'bounce 1s infinite 2s', // Bounce with delay
//     },
//   };

//   return (
//     <div>
//       <div style={styles.orderNowContainer}>
//         <div style={styles.imageContainer}>
//           <br />
//           <img
//             src="https://insanelygoodrecipes.com/wp-content/uploads/2020/05/Burger-with-fries-1024x536.png"
//             alt="Burger"
//             style={styles.image}
//           />
//         </div>
//         <div style={styles.contentContainer}>
//           <br />
//           <h1 style={{ fontFamily: 'Apple Chancery' }}>Hungry?</h1>
//           <br />
//           <p>Explore our delicious menu and place your order now!</p>
//           <br />
//           <Link to="/menu">
//             <button style={styles.orderButton}>Order Now</button>
//           </Link>
//         </div>
//       </div>
//       <br/>
//       <br/>
//       <br/>
//       <Footer />
//     </div>
//   );
// };

// export default OrderNow;




import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './OrderNow.css'; // Ensure this import path is correct

const OrderNow = () => {
  const styles = {
    orderNowContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px',
      margin: '0 auto',
      maxWidth: '1200px',
    },
    imageContainer: {
      flex: 1,
      marginRight: '20px',
      animation: 'zoomIn 1s ease-in-out', // Changed to zoom-in animation
    },
    image: {
      width: '650px',
      height: 'auto',
    },
    contentContainer: {
      flex: 1,
      fontSize: 20,
      animation: 'slideIn 1s ease-in-out 1s', // Animation with delay
    },
    orderButton: {
      backgroundColor: '#8b0000',
      color: '#fff',
      padding: '10px 20px',
      fontSize: '16px',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '5px',
      animation: 'bounce 1s infinite 2s', // Bounce animation with delay
    },
  };

  return (
    <div>
      <div style={styles.orderNowContainer}>
        <div style={styles.imageContainer}>
          <br />
          <img
            src="https://insanelygoodrecipes.com/wp-content/uploads/2020/05/Burger-with-fries-1024x536.png"
            alt="Burger"
            style={styles.image}
          />
        </div>
        <div style={styles.contentContainer}>
          <br />
          <h1 style={{ fontFamily: 'Apple Chancery', color: '#8b0000' }}>Hungry?</h1>
          <br />
          <p>Explore our delicious menu and place your order now!</p>
          <br />
          <Link to="/menu">
            <button style={styles.orderButton}>Order Now</button>
          </Link>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer />
    </div>
  );
};

export default OrderNow;
