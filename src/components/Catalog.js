import products from '../data/products.json';
import ProductCard from './ProductCard.js';
import {Container} from '@mui/material';
console.log(products);


const ContainerStyles ={
	border: "2px solid black",
	height: "600px",
	padding:"1%",
	marginTop: "5%",
	display: "flex",
	justifyContent: "space-evenly",
	flexWrap: "wrap",
	overflow: "scroll",
}

export  default function Catalog (){
	
	const allProducts = products.map((product)=>
		<ProductCard
		key={product.id}
		name={product.name}
		seller={product.seller.name}
		image={product.images[0]}/>
	);

	return (
		<Container maxWidth="lg" sx={ContainerStyles}>{allProducts}</Container>
	)
}