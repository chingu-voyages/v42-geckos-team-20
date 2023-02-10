import { useContext } from "react";
import { Context } from '../App';

import ProductCard from './ProductCard';
import Pagination from './Pagination';

import { Container } from '@mui/material';

const ContainerStyles = {
	display: "flex",
	justifyContent: "space-evenly",
	flexWrap: "wrap",
	zIndex: 0,
	gap: "2rem"
}

export default function Catalog ({ currency }){
  const { products, activeCategory, productsByPage } = useContext(Context);

	const filteredProducts = productsByPage.filter((product) => (
		product.categories.category.includes(activeCategory) || product.categories.subcategories.includes(activeCategory)
	))

	const productsToView = activeCategory === "All" ? (
		productsByPage
	) : (
		filteredProducts
	)

	return (
		<>
			<Container maxWidth="lg" sx={ContainerStyles}>
				{productsToView.map((product) => (
					<ProductCard 
						key={product.id}
						product={product}
						currency={currency}
					/>
				))}
			</Container>

			<Pagination />
		</>
	)
}