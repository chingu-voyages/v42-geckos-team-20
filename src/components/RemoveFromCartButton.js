import { Button } from '@mui/material';
import React from 'react'
import { CartFunctions } from '../Utility_Functions/cartFunctions';

const RemoveFromCartButton = ({ productId }) => {

    const { removeFromCart } = CartFunctions();

    const handleRemoveFromCart = () => {
      removeFromCart(productId.id);
    };

  return (
    <Button 
    variant="contained" 
    size="large" 
    sx={{
      borderRadius: "50px",
      width: "100%",
      padding: "0.75rem",
    }}
    onClick={handleRemoveFromCart}
    >
        Remove Item
    </Button>
  )
}

export default RemoveFromCartButton