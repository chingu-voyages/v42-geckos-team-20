import React from 'react'

import CheckoutProductCard from '../components/CheckoutProductCard';
import products from '../data/products.json';
import { Container } from '@mui/system';
import Heading from '../components/Heading';
import Total from '../components/Total';


const ContainerStyles ={
	display: "flex",
  flexDirection: "column",
	justifyContent: "center",
  alignItems: "center",
	flexWrap: "wrap",
  mt: '100px',
	zIndex: 0
}



const Cart = () => {

    const allCheckoutProducts = products.map((product)=>
      <CheckoutProductCard
        key={product.id}
        name={product.name}
        price={product.price}
        image={product.images[0]}
        id={product.id}
      />
    );
    

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