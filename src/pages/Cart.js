import React from 'react'

import CheckoutProductCard from '../components/CheckoutProductCard';
import products from '../data/products.json';
import { Container } from '@mui/system';


const ContainerStyles ={
	display: "flex",
  flexDirection: "column",
	justifyContent: "center",
  alignItems: "center",
	flexWrap: "wrap",
	zIndex: 0
}

const Cart = () => {

    const allCheckoutProducts = products.map((product)=>
      <CheckoutProductCard
        key={product.id}
        name={product.name}
        seller={product.seller.name}
        image={product.images[0]}
        id={product.id}
      />
    );


  return (

    <Container maxWidth="lg" sx={ContainerStyles}>{allCheckoutProducts}</Container>
  )
}

export default Cart