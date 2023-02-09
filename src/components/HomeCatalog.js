import { useEffect, useContext } from "react";
import { Context } from '../App';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import ProductCard from './ProductCard.js';
import usePagination from '../hooks/usePagination';

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
  const PER_PAGE = 5;

	const filteredProducts = products.filter((product) => (
		product.categories.category.includes(activeCategory) || product.categories.subcategories.includes(activeCategory)
	))
  const { jump, currentData, allData, currentPage, maxPage } = usePagination(PER_PAGE, filteredProducts);
  
	useEffect(() => {
	  handleChange(1,1);
	},[maxPage])

	
	const handleChange = (e, p) => {
    jump(p);

  };

	let productsToView; 
	if (activeCategory === "All") {
		productsToView = allData(); 
	 } else {
		 productsToView = currentData(); 
	 }
	 

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
				      <Stack spacing={2} alignItems="center" marginTop="2%">      
							<Pagination
								size="large"
								color="primary"
								count={maxPage}
								page={currentPage}
								onChange={handleChange}
							/>
						</Stack>
						</>
		
	)
}