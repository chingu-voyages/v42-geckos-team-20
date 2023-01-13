import React from 'react'

import { Box } from '@mui/system';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Heading = () => {
  return (
    <Box sx={{ 
      
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid black',
      padding: '0 5px 0 5px'
      
      }}>
      <h1>Nearby Markets</h1>
      <Box sx={{

        width: 70,
        display: 'flex',
        justifyContent: 'space-between'

      }}>
        <AccountCircleIcon />
        <ShoppingCartIcon />
      </Box>

    </Box>
  )
}

export default Heading


