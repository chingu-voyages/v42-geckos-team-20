import {Container, CardContent, CardMedia, Typography, Breadcrumbs} from '@mui/material';
import { Link } from "react-router-dom";
import Counter from '../components/Counter'
import React from "react";

const CheckoutProductCard = ({id,name,seller,image}) => {

    const CheckoutCardStyles = {
        display: "flex",
        justifyContent: "space-between",
        maxWidth: 'xs',
        padding: '5px'
    }

  return (
    <Container sx={CheckoutCardStyles} key={id}>
        <CardMedia
            image={image} style={{width: '200px', height: '200px'}}
            title={name}
        />
        <CardContent>
			<Typography>{name}</Typography>
            <Typography>PRICE HERE</Typography>
		</CardContent>
        <CardContent>
            <Counter />
        </CardContent>
    </Container>
  )
}

export default CheckoutProductCard