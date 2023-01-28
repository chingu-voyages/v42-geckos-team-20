import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function AddToCartButton() {
  return (
    <Box sx={{  m: 5  }}>
      <Button variant="contained" size="large">
        Add to cart
      </Button>
    </Box>
  );
}
