import React from 'react';

import { Box } from '@mui/material';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Heading = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid black',
        padding: '0 10px',
        position: 'fixed',
        top: 0,
        width: 'calc(100% - 20px)',
        height: '80px',
        zIndex: 2,
        bgcolor: 'background.paper'
      }}
    >
      <h1>Nearby Markets</h1>
      <Box 
        sx={{
          width: 70,
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <AccountCircleIcon />
        <ShoppingCartIcon />
      </Box>

    </Box>
  )
}

export default Heading


