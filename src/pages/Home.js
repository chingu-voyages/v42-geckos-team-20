import { useContext,useState, useEffect } from 'react';
import { Context } from '../App.js';
import ProductPagination from '../Utility_Functions/ProductPagination';

import Catalog from '../components/Catalog.js';
import SubHeader from '../components/SubHeader';

import products from '../data/products.json';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Home = () => {
  const { activeCategory, setActiveCategory } = useContext(Context);
  const [ filteredProducts, setFilteredProducts ] = useState([]);
  const [ currency, setCurrency ] = useState("€") //only a placeholder for now.
  const [ page, setPage ] = useState(1);
  const PER_PAGE = 5;

  const count = Math.ceil(filteredProducts.length / PER_PAGE);
  const dataPage = ProductPagination(filteredProducts, PER_PAGE);
  
  const handleChange = (e, p) => {
    setPage(p);
    dataPage.jump(p);
    console.log('handleChange', handleChange);
  };

  useEffect(() => {
    if(activeCategory === "All"){
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.categories.includes(activeCategory)));

      handleChange(1,1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory, count])

  return (
    <>
      <SubHeader  />
      
      <Catalog currency={currency} />

      <Stack spacing={2} alignItems="center" marginTop="2%">
        <Pagination
          size="large"
          color="primary"
          count={count}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </>
  )
}

export default Home;
