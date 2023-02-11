import React from 'react';
import Button from '@mui/material/Button';
import { CartFunctions } from '../Utility_Functions/cartFunctions'

export default function AddToCartButton({ product }) {
  
  const { addToCart } = CartFunctions();

  const handleAddTOCart = () => {
    addToCart(product)
  }
  
  return (
    <Button 
      variant="contained" 
      size="large" 
      sx={{
        borderRadius: "50px",
        width: "100%",
        padding: "0.75rem",
      }}
      onClick={handleAddTOCart}
    >
      Add to cart
    </Button>
  );
}
