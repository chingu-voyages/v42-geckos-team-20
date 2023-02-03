import React from 'react';
import Button from '@mui/material/Button';

export default function AddToCartButton() {
  return (
    <Button 
      variant="contained" 
      size="large" 
      sx={{
        borderRadius: "50px",
        width: "100%",
        padding: "0.75rem",
      }}
    >
      Add to cart
    </Button>
  );
}
