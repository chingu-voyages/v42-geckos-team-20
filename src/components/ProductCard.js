import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const ProductCardStyles = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	width: "300px",
	height: "400px",
	overflow: "hidden"
}

export default function ProductCard({ product, currency }) {
	const { id, name, price, images, seller } = product;

	return (
		<Card raised={true} sx={ProductCardStyles}>
			<Link to={`/products/${id}`}>
				<CardMedia
					component="img"
					image={images[0]} 
					sx={{ width: '100%', height: '250px' }}
					title={name}
				/>
			</Link>

			<CardContent 
				sx={{ 
					display: "flex", 
					flexDirection: "column", 
					flexGrow: 1, 
					height: "100%", 
					justifyContent: "space-between"
				}}
			>
				<Typography variant="h6">{name}</Typography>

				<Box>
					<Typography variant="subtitle1">
						{`${currency} ${price}`}
					</Typography>

					<Link to={`/seller/${seller.name}`}>
						<Typography variant="subtitle1">
							{seller.name}
						</Typography>
					</Link>
				</Box>
			</CardContent>
		</Card>
	)
};