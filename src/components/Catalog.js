import ProductCard from './ProductCard.js';

import { Container } from '@mui/material';

import products from '../data/products.json';

const ContainerStyles = {
	display: "flex",
	justifyContent: "space-evenly",
	flexWrap: "wrap",
	zIndex: 0,
	gap: "2rem"
}

export default function Catalog ({filteredProducts, currency}){
	const productsToView = filteredProducts.currentData().map((product) => (
			<ProductCard 
				key={product.id} 
				product={product} 
				currency={currency} 
			/>
		)
	);
	return (
		<Container maxWidth="lg" sx={ContainerStyles}>
			{productsToView}
		</Container>
	)
}