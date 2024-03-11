// import React from 'react';
// import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
// import { makeStyles } from '@material-ui/core/styles';
// import logo from '../../images/logo.png'

// const useStyles = makeStyles((theme) => ({
//   navbar: {
//     backgroundColor: '#ff8c00', // Change the background color as needed
//   },
//   title: {
//     flexGrow: 1,
//     display: 'flex',
//     alignItems: 'center',
//   },
//   logo: {
//     marginRight: theme.spacing(1),
//     width: 60, // Adjust the width of your logo
//     height: 60,
//   },
// }));

// const Navbar = () => {
//   const classes = useStyles();

//   return (
//     <AppBar position="static" className={classes.navbar}>
//       <Toolbar>
//         <div className={classes.title}>
//           <img src="https://thumbs.dreamstime.com/z/fresh-tasty-burger-isolated-transparent-white-background-juicy-cheeseburger-menu-fastfood-beef-patty-tomatoes-cheese-281764095.jpg?w=768" alt="logo" className={classes.logo} />
//           <Typography variant="h5"><b>THE BURGER CLUB</b></Typography>
//         </div>
//         <IconButton edge="end" color="inherit" aria-label="menu">
//           <MenuIcon />
//         </IconButton>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../images/LOGO.jpg';

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: '#ff8c00', // Change the background color as needed
  },
  
  title: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    marginRight: theme.spacing(1),
    width: 55, // Adjust the width of your logo
    height: 55,
    borderRadius: 50,
  },
  linkButton: {
    marginRight: theme.spacing(2), // Adjust the spacing as needed
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <div className={classes.title}>
          {/* <img src={logo} alt="logo" className={classes.logo} /> */}
          <img src={require('../../images/LOGO.jpg')} alt="logo" className={classes.logo} />
          <Typography variant="h5" style={{ fontFamily: "Apple Chancery", fontSize: "30px" }}><b>THE BURGER CLUB</b></Typography>
        </div>
        <Button color="inherit" className={classes.linkButton} component={Link} to="/">Home</Button>
        <Button color="inherit" className={classes.linkButton} component={Link} to="/order-now">Menu</Button>
        <Button color="inherit" className={classes.linkButton} component={Link} to="/customize">Customize</Button>
        {/* <IconButton edge="end" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

