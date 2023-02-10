import React, { useState, useContext } from 'react';
import { Context } from '../App';
import Button from '@mui/material/Button';
import { supabase } from '../supabaseClient';
import { CartFunctions } from '../Utility_Functions/cartFunctions'
// import axios from 'axios'

export default function AddToCartButton({ product }) {
  
const { addToCart } = CartFunctions();
  
  return (
    <Button 
      variant="contained" 
      size="large" 
      sx={{
        borderRadius: "50px",
        width: "100%",
        padding: "0.75rem",
      }}
      onClick={() => addToCart(product)}
    >
      Add to cart
    </Button>
  );
}
