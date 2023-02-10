import { Button } from '@mui/material';
import React, { useContext } from 'react'
import { Context } from '../App'

const RemoveFromCartButton = ({ productId }) => {

    const { cartContext, setCartContext } = useContext(Context);

    const handleClick = () => {
        const updatedCart = cartContext.filter(product => product.id !== productId);
        setCartContext(updatedCart)
        localStorage.setItem('cartContext', JSON.stringify(updatedCart));
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
    onClick={handleClick}
    >
        Remove Item
    </Button>
  )
}

export default RemoveFromCartButton