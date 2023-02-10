import { useContext, useState } from "react";
import { Context } from '../App';
import { useNavigate, Link, useLocation } from "react-router-dom";
import { supabase } from '../supabaseClient';

import { Box, IconButton, Button, Avatar, Tooltip, Menu, MenuItem, Typography, AppBar, Toolbar } from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Heading = () => {
  const { currentUser, setCurrentUser, session, setSession } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()

    if(error) {
      alert(error.error_description || error.message)
    } else {
      setSession(null)
      navigate("/")
    }
  };

  return (
    <>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Typography 
            variant="h5" 
            component={Link} to="/"
            color="inherit"
            sx={{ flexGrow: 1, textDecoration: "none" }} 
          >
            Nearby Markets
          </Typography>
          
          {session ? (
            <Box 
              sx={{
                width: 'fit-content',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Tooltip title="Account Settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>
                    {currentUser && currentUser.first_name ? currentUser.first_name.charAt(0) : null}
                  </Avatar>
                </IconButton>
              </Tooltip>
              <IconButton
                component={Link}
                to="/cart"
                sx={{ color: "text.secondary" }}
              >
                <ShoppingCartIcon />
              </IconButton>
            </Box>
          ) : (
            <Button 
              variant="contained"
              component={Link}
              to="/login"
              sx={{
                display: pathname === "/login" || pathname === "/signup" ? "none" : ""
              }}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => navigate(`/users/${session.user.id}`)}>
          Account
        </MenuItem>
        <MenuItem onClick={() => navigate("/profile")}>
          Profile
        </MenuItem>
        <MenuItem onClick={() => console.log("seller page here")}>
          Your Store
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          Logout
        </MenuItem>
      </Menu>
    </>
  )
}

export default Heading;
