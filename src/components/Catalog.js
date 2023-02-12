import ProductCard from './ProductCard';

import { Container, Typography } from '@mui/material';

const ContainerStyles = {
	display: "flex",
	justifyContent: "space-evenly",
	flexWrap: "wrap",
	zIndex: 0,
	gap: "2rem"
}

export default function Catalog ({ products }) {

	if(!products || products.length === 0) return (
		<Typography align="center" variant="h4">
			No Products Yet
		</Typography>
	)

	return (
		<Container maxWidth="lg" sx={ContainerStyles}>
			{products.map((product) => (
				<ProductCard 
					key={product.id}
					product={product}
				/>
			))}
		</Container>
	)
}