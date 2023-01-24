import ProductCard from './ProductCard.js';
import { Container } from '@mui/material';
import products from '../data/products.json';



const ContainerStyles = {
	display: "flex",
	justifyContent: "space-evenly",
	flexWrap: "wrap",
	zIndex: 0
}

export default function Catalog({filteredProducts, currency }) {
	const productsToView = filteredProducts.map((product) =>
		<ProductCard key={product.id} product={product} currency={currency} />
	);
	return (
		<Container maxWidth="lg" sx={ContainerStyles}>{productsToView}</Container>
	)
}