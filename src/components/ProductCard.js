import {Card, CardContent, CardMedia, Typography} from '@mui/material';
import { Link } from "react-router-dom";
import React from "react";



const ProductCardStyles ={
	border: "1px solid black",
	borderRadius:"20px",
	display:"flex",
	flexDirection: "column",
	justifyContent:"space between",
	width: "326px",
	height: "386px",
	left: "0px",
	top: "0px",
	margin: "1%",
	padding:"1%"
}
export default function ProductCard ({id,name,seller,image}) {
	return(
		
		<Card raised={true} sx={ProductCardStyles} key={id}>
				<Link to={`/products/${id}`}>
				<CardMedia
				component="img"
				image={image} style={{width: '100%', height: '250px'}}
				title={name}
			/></Link>
			<CardContent>
				<Typography>{name}</Typography>
			</CardContent>
			<CardContent>
				<Typography>PRICE HERE</Typography>
				<Typography>{seller}</Typography>
			</CardContent>
		</Card>
	)
};