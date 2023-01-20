import React from 'react';

import { Box, Typography } from '@mui/material';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Heading = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid black',
        padding: '0 10px',
        position: 'sticky',
        top: 0,
        width: 'calc(100% - 20px)',
        height: '80px',
        zIndex: 2,
        bgcolor: 'background.paper'
      }}
    >
      <Link to='/' style={{textDecoration: 'none'}}><Typography sx={{color: 'black'}} variant='h4'>Nearby Markets</Typography></Link>
      
      <Box 
        sx={{
          width: 70,
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Link to='/login'><AccountCircleIcon sx={{color: 'black'}}/></Link>
        <Link to='/cart'><ShoppingCartIcon sx={{color: 'black'}}/></Link>
      </Box>

    </Box>
  )
}

export default Heading


