import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, CardActionArea, CardActions, Typography, Box, Button } from '@mui/material';

const ProductCardStyles = {
	width: "300px",
	height: "400px"
}

export default function ProductCard({ product, currency }) {
	const { id, name, price, images, seller } = product;

	return (
		<Card raised={true} sx={ProductCardStyles}>
			<CardActionArea 
				component={Link} 
				to={`/products/${id}`}
			>
				<CardMedia
					component="img"
					image={images[0]} 
					sx={{ width: '100%', height: '250px' }}
					title={name}
					alt={name}
				/>

				<CardContent>
					<Typography variant="h6">{name}</Typography>

					<Typography variant="subtitle1" color="text.secondary">
						{`${currency} ${price}`}
					</Typography>
					
				</CardContent>
			</CardActionArea>

			<CardActions>
				<Button component={Link} to={`/seller/${seller.name}`}>
					{seller.name}
				</Button>
			</CardActions>
		</Card>
	)
};