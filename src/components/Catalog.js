import products from '../data/products.json';
import ProductCard from './ProductCard.js';
import './catalog.css';


console.log(products);
export  default function Catalog (){
	return (
		<div id='catalog'>
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
		</div>
	)
}