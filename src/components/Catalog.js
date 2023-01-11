import products from '../data/products.json';
import ProductCard from './ProductCard.js';
import './catalog.css';


console.log(products);
export  default function Catalog (){
	
	const allProducts = products.map((product)=>
		<ProductCard 
		key={product.id} 
		name={product.name} 
		seller={product.seller.name} 
		image={product.images[0]}/>
	);

	return (
		<div id='catalog'>{allProducts}</div>
	)
}