import { useContext,useState, useEffect } from 'react';
import { Context } from '../App.js';

import Catalog from '../components/Catalog.js';
import SubHeader from '../components/SubHeader.js';
import ProductPagination from '../components/ProductPagination';

import products from '../data/products.json';

import { Pagination, Stack } from '@mui/material';

const Home = () => {
  const { activeCategory, setActiveCategory } = useContext(Context);
  const [ filteredProducts, setFilteredProducts ] = useState([]);
  const [ currency, setCurrency ] = useState("€") // only a placeholder for now.
  const [ page, setPage ] = useState(1);
  const PER_PAGE = 5;
  
  const count = Math.ceil(filteredProducts.length / PER_PAGE);
  const dataPage = ProductPagination(filteredProducts, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    dataPage.jump(p);
    console.log('handleChange', handleChange);
  };

  useEffect(() =>{
    if(activeCategory === "All"){
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.categories.includes(activeCategory)));

      handleChange(1,1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[activeCategory, count])

  return (
    <>
      <SubHeader />
      
      <Catalog 
        filteredProducts={dataPage} 
        currency={currency} 
      />

      <Stack spacing={2} alignItems="center" marginTop="2%">
				<Pagination
					count={count}
					page={page}
					onChange={handleChange}
					size="large"
					shape="rounded"
          color="primary"
				/>
			</Stack>
    </>
  )
}

export default Home;
