import React, { useEffect } from 'react'

import CheckoutProductCard from '../components/CheckoutProductCard';
import products from '../data/products.json';
import { Container } from '@mui/system';
import Heading from '../components/Heading';
import Total from '../components/Total';

import { CartFunctions } from '../components/cartFunctions'


const ContainerStyles ={
	display: "flex",
  flexDirection: "column",
	justifyContent: "center",
  alignItems: "center",
	flexWrap: "wrap",
	zIndex: 0,
  marginTop: "70px"
}




const Cart = () => {

    const { cartContext, setCartContext } = CartFunctions()

    const allCheckoutProducts = cartContext.map((product)=>
      <CheckoutProductCard
        key={product.id}
        name={product.name}
        price={product.price}
        image={product.images[0]}
        id={product.id}
      />
    );
    
    useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem('cartContext'))
      if(storedCart){
        setCartContext(storedCart)
      }
    }, [])

  return (
    <>
      <Heading />

      <Container maxWidth="md" sx={ContainerStyles}>
        {allCheckoutProducts}
        <Total />
      </Container>

    </>
  )
}

export default Cart