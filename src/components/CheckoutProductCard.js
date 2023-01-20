import {Container, CardContent, CardMedia, Typography, Breadcrumbs} from '@mui/material';
import { Link } from "react-router-dom";
import Counter from '../components/Counter'
import React from "react";

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


        <CardContent sx={{display:' flex', alignItems: 'end'}}>
            <Counter />
        </CardContent>
    </Container>
  )
}

export default CheckoutProductCard