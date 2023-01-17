import ProductCard from './ProductCard.js';
import { Container } from '@mui/material';

const ContainerStyles ={
	display: "flex",
	justifyContent: "space-evenly",
	flexWrap: "wrap",
	zIndex: 0
}

export default function Catalog ({filteredProducts, currency}){
	
	const productsToView = filteredProducts.map((product)=>
		<ProductCard
		key={product.id}
		name={product.name}
		seller={product.seller.name}
		price={product.price}
		image={product.images[0]}
		id={product.id}
		currency={currency}
		/>
		
	);

	return (
		<Container maxWidth="lg" sx={ContainerStyles}>{productsToView}</Container>
	)
}