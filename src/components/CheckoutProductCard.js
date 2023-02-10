import {Container, CardContent, CardMedia, Typography, Breadcrumbs} from '@mui/material';
import { Link } from "react-router-dom";
import Counter from '../components/Counter'
import React from "react";
import RemoveFromCartButton from './RemoveFromCartButton';
const CheckoutProductCard = ({id,name,price,image}) => {

    const CheckoutCardStyles = {
        display: "flex",
        justifyContent: "space-between",
        padding: '5px'
    }

  return (
    <Container sx={CheckoutCardStyles} key={id}>
        <CardContent sx={{display: 'flex'}}>
            <CardMedia
                image={image} style={{width: '200px', height: '200px', border: 'solid black 1px'}}
                title={name}
            />        
            <CardContent>
                <Typography>{name}</Typography>
                <Typography>${price.toFixed(2)}</Typography>
            </CardContent>
        </CardContent>


        <CardContent sx={{display:' flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between'}}>
            <Counter />
            <RemoveFromCartButton productId={id}></RemoveFromCartButton>
        </CardContent>
        
    </Container>
  )
}

export default CheckoutProductCard