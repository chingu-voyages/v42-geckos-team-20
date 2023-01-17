import products from '../data/products.json';
import ProductCard from './ProductCard.js';
import { Container } from '@mui/material';
// console.log(products);


const ContainerStyles ={
	display: "flex",
	justifyContent: "space-evenly",
	flexWrap: "wrap",
	zIndex: 0
}

export default function Catalog (){
	
	const allProducts = products.map((product)=>
		<ProductCard
		key={product.id}
		name={product.name}
		seller={product.seller.name}
		image={product.images[0]}
		id={product.id}
		/>
		
	);

	return (
		<Container maxWidth="lg" sx={ContainerStyles}>{allProducts}</Container>
	)
}