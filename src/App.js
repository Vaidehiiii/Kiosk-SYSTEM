// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; // Import the Navbar component
import Home from './components/Home/Home'; // Import the Home component
import OrderNow from './components/OrderNow/OrderNow'; // Import the OrderNow component
import Menu from './components/Menu/Menu'; // Import the Menu component
import Customize from './components/Customize/Customize'; // Import the Customize component
import BurgerPage from './BurgerPage'; // Import the BurgerPage component
import Footer from './components/Footer/Footer';
import About from './components/About/About'
import FeedbackForm from './components/Feedback/FeedbackForm';
import ContactUs from './components/ContactUs/ContactUs';

const App = () => {
  return (
    <Router>
      <div style={{ marginTop: '3em' }}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/order-now" component={OrderNow} />
          <Route path="/menu" component={Menu} />
          <Route path="/customize" component={Customize} />
          <Route path="/burger-page" component={BurgerPage} /> {/* Add route for BurgerPage */}
        </Switch>
        
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/feedback-form" component={FeedbackForm} />
          <Route path="/contact-us" component={ContactUs} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;


