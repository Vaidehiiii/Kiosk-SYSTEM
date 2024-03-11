// Customize.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Customize = () => {
  

  const styles = {
    customizeContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px',
      margin: '0 auto',
      maxWidth: '1200px',
    },
    imageContainer: {
      flex: 1,
      marginRight: '20px',
    },
    image: {
      width: '100%',
      height: 'auto',
      width: "650px"
    },
    contentContainer: {
      flex: 1,
    },
    orderButton: {
      backgroundColor: '#ff8c00', /* Orange color, you can change it */
      color: '#fff',
      padding: '10px 20px',
      fontSize: '16px',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '5px',
    },
  };

  return (
    <div>
    <div style={styles.customizeContainer}>
      <div style={styles.imageContainer}>
        <img
          src="https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg"
          alt="Burger"
          style={styles.image}
        />
        <br />
        <br />
        <br />
      </div>
      <div style={styles.contentContainer}>
      <br />
      <br />
      <br />
        <h1 style={{ fontFamily: "Apple Chancery" }}>Picky Eater ?</h1>
        <br />
        <p style={{fontSize:20, fontFamily: "Apple Chancery"}}>Create your perfect burger masterpiece with our customizable burger section, where you choose each ingredient for a unique and delicious experience.</p>
        <br />
        <br />
        <Link to="/burger-page">
          <button style={styles.orderButton}>Customize Now!</button>
        </Link>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      </div>
      <br />
        <br />
        <br />
        <br />
      <Footer/>
    </div>
  );
};



export default Customize;
