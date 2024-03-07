// Menu.js

import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./Menu.css";
import { useHistory } from "react-router-dom";
import upiQRCodeImage from "../../images/upiQRCodeImage.png"; 
import { AddCircleRounded } from "@material-ui/icons";

const Menu = () => {
  // Sample burger, side dish, and beverage items
  const burgerItems = [
    {
      name: "American Veggie Burger",
      price: 300,
      calories: 300,
      image:
        "https://trentapizza.co.uk/wp-content/uploads/2016/07/Roasted_Vegetable_Burger_Recipe_with_Hummus-1-1024x683.jpg",
    },
    {
      name: "Indo Fusion Aloo Tikki Burger",
      price: 220,
      calories: 250,
      image:
        "https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
    },
    {
      name: "Paneer Tikka Burger",
      price: 320,
      calories: 350,
      image: "https://i.ytimg.com/vi/fNIZnXmxQUE/maxresdefault.jpg",
    },
    {
      name: "American Chicken Cheese Burger",
      price: 370,
      calories: 400,
      image:
        "https://playswellwithbutter.com/wp-content/uploads/2022/06/Best-Ever-Grilled-Chicken-Burgers-15.jpg",
    },
    {
      name: "Chicken Tikka Burger",
      price: 340,
      calories: 350,
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/0d/de/2f/16/chicken-tikka-burger.jpg",
    },
    {
      name: "Chicken Chilly Burger",
      price: 360,
      calories: 320,
      image:
        "https://trentapizza.co.uk/wp-content/uploads/2022/03/Halloumi-Burgers-thumb-526x526.jpg",
    },
  ];

  const sideDishItems = [
    {
      name: "French Fries",
      price: 120,
      image:
        "https://www.unileverfoodsolutions.com.ph/dam/global-ufs/mcos/SEA/calcmenu/recipes/PH-recipes/appetisers/dirty-fries/dirty-fries-main-header.jpg",
    },
    {
      name: "Veg Cheese Nuggets",
      price: 150,
      image: "https://www.ranioil.com/wp-content/uploads/2022/01/veg-soy.png",
    },
    {
      name: "Chicken Nuggets",
      price: 180,
      image:
        "https://mediavine-res.cloudinary.com/image/upload/s--OhG-gDPd--/c_limit,f_auto,fl_lossy,h_1080,q_auto,w_1920/v1602140944/ansc0aoqxvxvg5qsyswi.jpg",
    },
  ];

  const beverageItems = [
    {
      name: "Coca Cola",
      price: 50,
      image:
        "https://www.just-drinks.com/wp-content/uploads/sites/29/2023/02/Coca-Cola-Europacific-Partners.png",
    },
    {
      name: "Sprite / Limca",
      price: 50,
      image:
        "http://st.depositphotos.com/1000647/4405/i/450/depositphotos_44059545-Soft-drink-Sprite.jpg",
    },
    {
      name: "Fanta / Miranda",
      price: 50,
      image:
        "https://facts.net/wp-content/uploads/2023/06/Fanta-can-730x421.jpeg",
    },
  ];

  // State to manage quantities
  const [cart, setCart] = useState({});

  // Function to handle adding item to cart
  const addToCart = (category, itemName) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      const key = `${category}_${itemName}`;
      newCart[key] = (newCart[key] || 0) + 1;
      return newCart;
    });
  };

  // Function to handle removing item from cart
  const removeFromCart = (category, itemName) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      const key = `${category}_${itemName}`;
      if (newCart[key] && newCart[key] > 0) {
        newCart[key] -= 1;
      }
      return newCart;
    });
  };

  // CHANGE
  const buttonStyle = {
    fontSize: '1.5rem', // Adjust font size as needed
    padding: '0.1rem 1rem', // Adjust padding as needed
    borderRadius: '20px', // Adjust border radius as needed
    background: '#ff8c00', // Adjust background color as needed
    color: 'white', // Adjust text color as needed
    border: 'none', // Remove button border
    cursor: 'pointer', // Show pointer cursor on hover
    margin: '0 0.5rem', // Adjust margin between buttons as needed
  };


// Function to render menu items
const renderMenuItems = (items, category) => {
  return (
    <div className="menu-category">
      {items.map((item) => (
        <div key={item.name} className="menu-item">
          <div className="item-image">
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "400px", height: "300px", objectFit: "cover" }}
            />
          </div>
          <div className="item-details">
            <h2 style={{ fontFamily: "Apple Chancery", fontSize: "28px" }}>{item.name}</h2>
            <p>Price: {item.price} INR</p>
            <p>Calories: {item.calories}</p>
            <label>Quantity:</label>
            <div className="quantity-controls">
              <button style={buttonStyle} onClick={() => removeFromCart(category, item.name)}> - </button>
              <span>{getQuantity(category, item.name)}</span>
              <button style={buttonStyle} onClick={() => addToCart(category, item.name)}> + </button>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
};


  // Function to get quantity based on category and item name
  const getQuantity = (category, itemName) => {
    const key = `${category}_${itemName}`;
    return cart[key] || 0;
  };

  // Function to get item details by name and category
  const getItemByName = (category, itemName) => {
    const items = [...burgerItems, ...sideDishItems, ...beverageItems];
    const foundItem = items.find((item) => item.name === itemName);

    return foundItem || { name: "", price: 0, calories: 0, image: "" }; // Default values for not found items
  };

  // State for modal
  const [open, setOpen] = useState(false);

  // State for order summary modal
  const [orderSummaryOpen, setOrderSummaryOpen] = useState(false);

  // State for user details form
  const [userDetails, setUserDetails] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    tableNumber: "",
    paymentMode: "",
  });

  // Function to handle opening the modal
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to handle closing the modal
  const handleClose = () => {
    setOpen(false);
  };

  // Function to handle opening the order summary modal
  const handleOrderSummaryOpen = () => {
    setOrderSummaryOpen(true);
  };

  const history = useHistory(); // Get the history object
  // Function to handle closing the order summary modal
  const handleOrderSummaryClose = () => {
    history.goBack();
    setOrderSummaryOpen(false);
    // history.push('/menu');
  };

  // Function to handle user details form input changes
  const handleUserDetailsChange = (field, value) => {
    setUserDetails((prevDetails) => ({ ...prevDetails, [field]: value }));
  };

  // Function to handle checkout
  const handleCheckout = () => {
    // Perform checkout logic here (e.g., show thank you message)
    alert("Order completed. Thank you!");
    // Optionally, you can reset the cart and user details after checkout
    setCart({});
    setUserDetails({
      name: "",
      phoneNumber: "",
      email: "",
      tableNumber: "",
      paymentMode: "",
    });
    handleOrderSummaryClose(); // Close the order summary modal
  };

  // Function to render cart items
  const renderCartItems = () => {
    return Object.keys(cart).map((key) => {
      const [category, itemName] = key.split("_");
      const quantity = cart[key];
      const item = getItemByName(category, itemName);

      return (
         <div className="item-details">
           <p style={{ fontSize: "20px" }}>{item.name}</p>
           <p style={{ fontSize: "18px" }}>Quantity: {quantity}</p>
           <p style={{ fontSize: "18px" }}>Price: {item.price * quantity} INR</p>
         </div>
      );
    });
  };

  // Function to calculate total price of items in the cart
  const calculateTotalPrice = () => {
    let totalPrice = 0;

    Object.keys(cart).forEach((key) => {
      const [category, itemName] = key.split("_");
      const quantity = cart[key];
      const item = getItemByName(category, itemName);

      totalPrice += item.price * quantity;
    });

    return totalPrice;
  };

  // CHANGE
  // Function to render the QR code for UPI payments
  const renderUpiQRCode = () => {
    return (
      <div>
        <p>Scan the QR code to complete your UPI payment:</p>
        {userDetails.paymentMode == "upi" && (
          <img
            src={upiQRCodeImage}
            alt="UPI QR Code"
            style={{ width: "200px", height: "200px" }}
          />
        )}
      </div>
    );
  };

  // Check if all user details are filled and payment mode is selected
const isCheckoutDisabled =
!userDetails.name ||
!userDetails.phoneNumber ||
!userDetails.email ||
!userDetails.tableNumber ||
!userDetails.paymentMode;


  // Modal content for order summary
  const orderSummaryModalBody = (
    <div className="modal-content order-summary">
      <h2>Order Summary</h2>
      <div className="order-items">{renderCartItems()}</div>
      <p>Total Price: {calculateTotalPrice()} INR</p>

      {/* User details form */}
      <form>
        <TextField
          label="Name"
          value={userDetails.name}
          required
          onChange={(e) => handleUserDetailsChange("name", e.target.value)}
        />
        <TextField
          label="Phone Number"
          required
          value={userDetails.phoneNumber}
          onChange={(e) =>
            handleUserDetailsChange("phoneNumber", e.target.value)
          }
        />
        <TextField
          label="Email"
          required
          value={userDetails.email}
          onChange={(e) => handleUserDetailsChange("email", e.target.value)}
        />
        <TextField
          label="Table Number"
          required
          value={userDetails.tableNumber}
          onChange={(e) =>
            handleUserDetailsChange("tableNumber", e.target.value)
          }
        />
        

        {/* Radio buttons for payment mode */}
        <div>
          <label>Payment Mode:</label>
          <div>
            <label>
              <input
                type="radio"
                value="cash"
                checked={userDetails.paymentMode === "cash"}
                onChange={() => handleUserDetailsChange("paymentMode", "cash")}
                required
              />
              Cash
            </label>
            <label>
              <input
                type="radio"
                value="upi"
                checked={userDetails.paymentMode === "upi"}
                onChange={() => handleUserDetailsChange("paymentMode", "upi")}
              />
              UPI
            </label>
            {userDetails.paymentMode == "upi" && (
              <img
                src={upiQRCodeImage}
                alt="UPI QR Code"
                style={{ width: "200px", height: "200px" }}
              />
            )}
          </div>
        </div>

        <Button variant="contained" color="primary" onClick={handleCheckout}  disabled={isCheckoutDisabled}>
          Checkout
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleOrderSummaryClose}
        >
          Cancel
        </Button>
      </form>
    </div>
  );

  // CHANGE

  {
    /* Render the QR code if payment mode is UPI */
  }
  {
    userDetails.paymentMode === "upi" && renderUpiQRCode();
  }


  // Function to get category of an item
  const getCategory = (itemName) => {
    if (burgerItems.some((item) => item.name === itemName)) {
      return "burgers";
    } else if (sideDishItems.some((item) => item.name === itemName)) {
      return "sideDishes";
    } else if (beverageItems.some((item) => item.name === itemName)) {
      return "beverages";
    }
    return "";
  };

  return (
    <div style={{ textAlign: "center" }}>
      <br />
      <h1 style={{ fontFamily: "Apple Chancery", fontSize: "45px" }}>Menu Card</h1>
      <br />
      <h2 style={{ fontFamily: "Apple Chancery", fontSize: "30px"}}>Burgers</h2>
      <br />
      {renderMenuItems(burgerItems, "burgers")}
      <br />
      <br />
      <h2 style={{ fontFamily: "Apple Chancery", fontSize: "30px" }}>Side Dishes</h2>
      <br />
      {renderMenuItems(sideDishItems, "sideDishes")}
      <br />
      <br />
      <h2 style={{ fontFamily: "Apple Chancery", fontSize: "30px" }}>Beverages</h2>
      <br />
      {renderMenuItems(beverageItems, "beverages")}
      <br />
      <br />
      {/* Cart section */}
      <div className="cart-section">
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Place Order
        </Button>
        <Modal open={open} onClose={handleClose}>
          {orderSummaryModalBody}
        </Modal>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Menu;

