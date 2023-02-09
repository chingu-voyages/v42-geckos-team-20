import { useContext } from "react";
import { Context } from '../App';

import ProductCard from './ProductCard.js';

import { Container } from '@mui/material';

const ContainerStyles = {
	display: "flex",
	justifyContent: "space-evenly",
	flexWrap: "wrap",
	zIndex: 0,
	gap: "2rem"
}

export default function Catalog ({ currency }){
  const { products, activeCategory } = useContext(Context);

	const filteredProducts = products.filter((product) => (
		product.categories.category.includes(activeCategory) || product.categories.subcategories.includes(activeCategory)
	))

	const productsToView = activeCategory === "All" ? (
		products
	) : (
		filteredProducts
	)

	return (
		<Container maxWidth="lg" sx={ContainerStyles}>
			{productsToView.map((product) => (
				<ProductCard 
					key={product.id}
					product={product}
					currency={currency}
				/>
			))}
		</Container>
	)
}