import './productCard.css';

export default function ProductCard ({name,seller,image}) {
	return(
		<div id='productCard'>
			<img src={image} alt="image unavailable"></img>
			<div>
				<div>{name}</div>
				<div>
					<div>PRICE here</div>
					<div>{seller}</div>
				</div>
			</div>
		</div>
	)
};