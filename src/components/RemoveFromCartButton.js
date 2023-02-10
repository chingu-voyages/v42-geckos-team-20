import { Button } from '@mui/material';
import React, { useContext } from 'react'
import { CartFunctions } from '../Utility_Functions/cartFunctions';

const RemoveFromCartButton = ({ productId }) => {

    const { removeFromCart } = CartFunctions();


  return (
    <Button 
    variant="contained" 
    size="large" 
    sx={{
      borderRadius: "50px",
      width: "100%",
      padding: "0.75rem",
    }}
    onClick={() => removeFromCart(productId)}
    >
        Remove Item
    </Button>
  )
}

export default RemoveFromCartButton