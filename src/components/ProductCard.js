import { useContext } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../App.js';

import { Card, CardContent, CardMedia, CardActionArea, CardActions, Typography, Button } from '@mui/material';

const ProductCardStyles = {
	width: "300px",
	height: "400px"
}

export default function ProductCard({ product }) {
	const { id, name, price, images, seller } = product;
	const { currency } = useContext(Context);

	return (
		<Card raised={true} sx={ProductCardStyles}>
			<CardActionArea 
				component={Link} 
				to={`/products/${id}`}
			>
				<CardMedia
					component="img"
					image={images[0].url} 
					sx={{ width: '100%', height: '250px' }}
					title={name}
					alt={name}
				/>

				<CardContent>
					<Typography variant="h6" noWrap>{name}</Typography>

					<Typography variant="subtitle1" color="text.secondary">
						{`${currency} ${price.toFixed(2)}`}
					</Typography>
				</CardContent>
			</CardActionArea>

			<CardActions>
				<Button component={Link} to={`/users/${seller.id}`}>
					{seller.first_name}
				</Button>
			</CardActions> 
		</Card>
	)
};