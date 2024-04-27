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
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  navbar: {
    // backgroundColor: '#8b0000', // Background color of the navbar
    // backgroundColor: '#ffaa33',
    backgroundColor: '#311900',
    transition: 'background-color 0.5s ease', // Smooth transition for navbar background
  },

  title: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },

  logo: {
    marginRight: theme.spacing(1),
    width: 55, // Width of your logo
    height: 55,
    borderRadius: '50%', // Round logo
    transition: 'transform 0.3s ease', // Smooth transition for logo
  },

  linkButton: {
    marginRight: theme.spacing(2),
    transition: 'color 0.3s ease, transform 0.3s ease', // Smooth transitions for buttons
  },

  // Hover effect for navbar and link buttons
  hoverEffect: {
    '&:hover': {
      backgroundColor: '#6f4e37', // Change on hover
      transform: 'scale(1.05)', // Slight scale effect
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <div className={classes.title}>
          <img src={require('../../images/LOGO.jpg')} alt="logo" className={`${classes.logo} ${classes.hoverEffect}`} />
          <Typography variant="h5" style={{ fontFamily: 'Apple Chancery', fontSize: '30px', color: 'white' }}>
            <b>THE BURGER CLUB</b>
          </Typography>
        </div>
        <Button color="inherit" className={`${classes.linkButton} ${classes.hoverEffect}`} component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" className={`${classes.linkButton} ${classes.hoverEffect}`} component={Link} to="/order-now">
          Menu
        </Button>
        <Button color="inherit" className={`${classes.linkButton} ${classes.hoverEffect}`} component={Link} to="/customize">
          Customize
        </Button>
        <Button color="inherit" className={`${classes.linkButton} ${classes.hoverEffect}`} component={Link} to="/suggestions">
          Recommend
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

