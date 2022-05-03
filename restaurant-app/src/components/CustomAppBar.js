import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Menu', 'About', 'Contact Us'];
const settings = ['Profile', 'Logout'];

const CustomAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            The Restaurant
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default CustomAppBar;

{/* <body>
    <div className="home">
    
    <div class="navbar" id="header-items">
        <ul id="web-menu">
            <li><a href="index.html">Home</a></li>
            
            <li><button  class="dropdown-btn">Order Online</button></li> 
                 <div id="myDropdown" class="dropdown-content">
                   <a href="">Daily Special</a>
                    <a href="">Weekend Special</a>
                    <a href="">From the Grill</a>
                    <a href="">From the Sea</a>
                </div> 
            
            <li><a href="#about">About</a></li>
            <li><a href="#contactus">Contact Us</a></li>
            <li><a href="#shoppingcart">Shopping Cart</a></li>
        </ul>
    </div>
<div id="main-content"> 
    <div id="welcome">   
        <h1>Welcome to 'restaurant_name'</h1>
        <h2>Gourmet Italian Cuisine</h2>
    
        <div id="fullscreen-image"></div> &nbsp;
    </div>

    <div class="takeout">
        <h2>Take Out</h2>
        
            <div class="centered">
                <p>Given the return to prepandemic conditions, </p> 
                <p>we understand that now everyone is comfortable </p>
                <p>dining in person. Therefore, we offer to-go options </p>
                <p>Our takeout options vary</p>
            </div>
        
       
         <div class="split-right">
             <div class="centered">
                 <p>placeholder for image</p>
             </div>
        </div>
    </div> &nbsp;
    
   
    <div id="dine-in">
        <h2>Limited Dine-In Option</h2>
        <div class="split-left">
            
            <p> Due to limited staffing, </p>
             <p>please see takeout options</p>
            
        </div>

         <div class="split-right">
            
        </div>
        </div>
    </div> &nbsp;
</div>
</body> */}