import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import React from "react";



const ProductCardStyles = {
	border: "1px solid black",
	borderRadius: "20px",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space between",
	width: "326px",
	height: "386px",
	left: "0px",
	top: "0px",
	margin: "1%",
	padding: "1%"
}
export default function ProductCard({ product, currency }) {
	const { id, name, price, images,seller:{name:sellerName}} = product;
	return (
		<Card raised={true} sx={ProductCardStyles}>
			<Link to={`/products/${id}`}>
				<CardMedia
					component="img"
					image={images[0]} style={{ width: '100%', height: '250px' }}
					title={name}
				/></Link>
			<CardContent>
				<Typography>{name}</Typography>
			</CardContent>
			<CardContent>
				<Typography>{`${currency}${price}`}</Typography>
				<Typography>{sellerName}</Typography>
			</CardContent>
		</Card>
	)
};